import { GoogleGenAI, Chat, Type, Schema } from "@google/genai";
import { TEACHER_SYSTEM_INSTRUCTION } from '../constants';
import { Question, QuestionCategory } from '../types';

let chatSession: Chat | null = null;

// Initialize GoogleGenAI with the API key from process.env as per guidelines.
// The apiKey is assumed to be pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTeacherResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: TEACHER_SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    return result.text || "すみません、うまく答えられませんでした。もう一度聞いてくれますか？";
  } catch (error: any) {
    console.error("Gemini Chat Error:", error);
    
    // Friendly error handling
    if (error.message?.includes('429')) {
      return "申し訳ありません。現在、質問が殺到しておりAIが少し疲れているようです。少し時間を置いてから話しかけてください。";
    }
    
    return "申し訳ありません。通信エラーが発生しました。もう一度試してみてください。";
  }
};

// Function to convert file to base64
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      // Extract the base64 string (remove "data:image/png;base64," prefix)
      const base64Content = base64Data.split(',')[1];
      resolve({
        inlineData: {
          data: base64Content,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateQuizFromMedia = async (files: File[]): Promise<Question[]> => {
  if (files.length === 0) {
    throw new Error("ファイルが選択されていません。");
  }

  // File size check for each file
  for (const file of files) {
    if (file.size > 20 * 1024 * 1024) {
      throw new Error(`ファイル「${file.name}」が大きすぎます。20MB以下のファイルを選択してください。`);
    }
  }

  let mediaParts;
  try {
    mediaParts = await Promise.all(files.map(file => fileToGenerativePart(file)));
  } catch (e) {
    throw new Error("ファイルの読み込みに失敗しました。");
  }

  const prompt = `
    あなたは非常に厳格で優秀な日本の「理科の先生」です。
    提供された複数の資料（画像やテスト、教科書など）の内容を詳細に読み取り、生徒のための復習テストを作成してください。

    【重要：言語について】
    **全ての質問、選択肢、解説は必ず「日本語」で出力してください。**

    【指示】
    1. **詳細な分析**: 全ての資料内のすべてのテキスト、グラフ、図表のラベルを統合して読み取ってください。
    2. **量**: 資料の内容を網羅するように、**30問から40問**の高品質な多肢選択問題を作成してください。
    3. **質**: 単なる用語の暗記だけでなく、グラフの読み取りや因果関係（例：太陽高度と気温の関係）を問う問題を含めてください。
    4. **解説**: なぜその答えが正解なのか、なぜ他が間違いなのかを、小学生〜中学生にもわかるように丁寧に解説してください。
    5. **カテゴリ**: 以下のいずれかを割り当ててください：'天体・季節', '光と影', '生物'。

    【最重要：図表問題のテキスト化（NO_VISUAL_REFERENCES）】
    - ユーザーは問題を解く際に、元の画像を見ることができません。
    - **「図1を見て答えなさい」や「グラフAの記号はどれか」といった問題は絶対に作らないでください。**
    - **図やグラフの状況を「文章」で説明して問題にしてください。**
      - 悪い例：「図1のAの位置にあるとき、季節はどれか？」
      - 良い例：「地球の地軸が太陽の方向に傾いているとき、北半球の季節はどうなるか？」

    JSON形式の配列で出力してください。Markdown記法は含めないでください。
  `;

  const quizSchema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.INTEGER },
        category: { type: Type.STRING },
        text: { type: Type.STRING },
        options: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING }
            }
          }
        },
        correctOptionId: { type: Type.STRING },
        explanation: { type: Type.STRING }
      }
    }
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [...mediaParts, { text: prompt }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        maxOutputTokens: 32768,
        thinkingConfig: { thinkingBudget: 0 }, 
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("AIからの応答が空でした。");
    
    // Cleaning
    const cleanedText = jsonText.replace(/```json\n?|```/g, '').trim();
    
    // Parse
    let rawData;
    try {
      rawData = JSON.parse(cleanedText);
    } catch (e) {
      console.error("JSON Parse Error. Raw text:", jsonText);
      throw new Error("AIの応答データの解析に失敗しました。");
    }
    
    if (!Array.isArray(rawData)) {
      throw new Error("AIの応答形式が不正です（配列ではありません）。");
    }

    return rawData.map((q: any) => ({
      id: q.id,
      category: q.category as QuestionCategory,
      text: q.text,
      options: q.options,
      correctOptionId: q.correctOptionId,
      explanation: q.explanation
    })) as Question[];

  } catch (error: any) {
    console.error("Quiz Generation Error Details:", error);

    // Specific error messaging for the user
    const errorMsg = error.toString().toLowerCase();
    
    if (errorMsg.includes('429')) {
      throw new Error("APIの利用制限（クオータ）を超過しました。しばらく時間をおいて試すか、APIキーを確認してください。");
    }
    if (errorMsg.includes('403') || errorMsg.includes('key not valid')) {
      throw new Error("APIキーが無効、または許可されていません。");
    }
    if (errorMsg.includes('candidate was blocked') || errorMsg.includes('safety')) {
      throw new Error("コンテンツがAIの安全基準によりブロックされました。別の画像を試してください。");
    }
    if (errorMsg.includes('fail to fetch') || errorMsg.includes('network')) {
      throw new Error("通信エラーです。インターネット接続を確認してください。");
    }

    throw new Error(`問題の生成に失敗しました: ${error.message || "不明なエラー"}`);
  }
};