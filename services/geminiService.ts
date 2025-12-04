
import { GoogleGenAI, Chat, Type, Schema } from "@google/genai";
import { TEACHER_SYSTEM_INSTRUCTION, QUIZ_DATA } from '../constants';
import { Question, QuestionCategory } from '../types';

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

// Helper to reliably find the API Key in various environments (Vite, Vercel, etc.)
const getApiKey = (): string | undefined => {
  // 1. Try standard process.env (Node/Webpack/Next.js)
  if (typeof process !== 'undefined' && process.env?.API_KEY) {
    return process.env.API_KEY;
  }
  // 2. Try Vite specific import.meta.env
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_KEY) {
    // @ts-ignore
    return import.meta.env.VITE_API_KEY;
  }
  // 3. Try Vercel System Env accessed via standard env var in some configs
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_API_KEY) {
    return process.env.NEXT_PUBLIC_API_KEY;
  }
  
  return undefined;
};

export const initializeGemini = () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("API Key is missing. Please set VITE_API_KEY or API_KEY in your environment variables.");
    return;
  }
  genAI = new GoogleGenAI({ apiKey });
};

export const getTeacherResponse = async (userMessage: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "システムエラー: APIキーが設定されていません。管理者にお問い合わせください。";
  }

  if (!genAI) {
    initializeGemini();
  }

  try {
    if (!chatSession && genAI) {
      chatSession = genAI.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: TEACHER_SYSTEM_INSTRUCTION,
        },
      });
    }

    if (!chatSession) {
        throw new Error("Chat session could not be initialized.");
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

export const generateQuizFromMedia = async (files: File | File[]): Promise<Question[]> => {
  const apiKey = getApiKey();
  if (!genAI) initializeGemini();
  if (!genAI || !apiKey) {
    throw new Error("APIキーが見つかりません。環境設定を確認してください。");
  }

  const fileList = Array.isArray(files) ? files : [files];
  const parts: any[] = [];

  for (const file of fileList) {
    if (file.size > 20 * 1024 * 1024) {
      throw new Error(`ファイル ${file.name} が大きすぎます。20MB以下のファイルを選択してください。`);
    }
    try {
      const part = await fileToGenerativePart(file);
      parts.push(part);
    } catch (e) {
      throw new Error(`ファイル ${file.name} の読み込みに失敗しました。`);
    }
  }

  // Extract existing questions to avoid duplicates
  const existingQuestions = QUIZ_DATA.map(q => q.text).join("\n");

  const prompt = `
    あなたは非常に厳格で優秀な日本の「理科の先生」です。
    提供された画像（資料やテスト）の内容を詳細に読み取り、生徒のための復習テストを作成してください。

    【重要：言語について】
    **全ての質問、選択肢、解説は必ず「日本語」で出力してください。**

    【除外リスト】
    以下の質問は既に存在します。これらと内容が完全に重複する問題は作成しないでください（似ているが違う視点の問題はOKです）：
    ${existingQuestions.slice(0, 5000)}... (省略)

    【指示】
    1. **詳細な分析**: 資料内のすべてのテキスト、グラフ、図表のラベルを読み取ってください。
    2. **量**: 資料の内容を網羅するように、**50問から80問**の高品質な多肢選択問題を作成してください。
       - 出力が途切れないよう、解説は簡潔かつ的確にまとめてください。
    3. **質**: 単なる用語の暗記だけでなく、グラフの読み取りや因果関係（例：太陽高度と気温の関係）を問う問題を含めてください。
    4. **解説**: なぜその答えが正解なのかを、小学生〜中学生にもわかるように丁寧に解説してください。
    5. **カテゴリ**: 以下のいずれかを割り当ててください：'天体・季節', '光と影', '生物', 'その他'。

    【最重要：図表問題のテキスト化（NO_VISUAL_REFERENCES）】
    - ユーザーは問題を解く際に、元の画像を見ることができません。
    - **「図1を見て答えなさい」や「グラフAの記号はどれか」といった問題は絶対に作らないでください。**
    - **図やグラフの状況を「文章」で説明して問題にしてください。**
      - 悪い例：「図1のAの位置にあるとき、季節はどれか？」
      - 良い例：「地球の地軸が太陽の方向に傾いているとき、北半球の季節はどうなるか？」
      - 良い例：「気温のグラフが14時ごろにピークになっているとき、地温のピークはいつ頃か？」

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
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [...parts, { text: prompt }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        maxOutputTokens: 32768, // Max tokens to allow large response (100+ questions)
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
      id: q.id, // ID will be reassigned in App.tsx to ensure uniqueness
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
