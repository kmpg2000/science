import { GoogleGenAI, Chat, Type, Schema } from "@google/genai";
import { TEACHER_SYSTEM_INSTRUCTION } from '../constants';
import { Question, QuestionCategory } from '../types';

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API Key is missing");
    return;
  }
  genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getTeacherResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "APIキーが設定されていません。環境変数を確認してください。";
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
  } catch (error) {
    console.error("Gemini Error:", error);
    return "申し訳ありません。現在、先生は少し忙しいようです（エラーが発生しました）。";
  }
};

// Function to convert file to base64
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
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

export const generateQuizFromMedia = async (file: File): Promise<Question[]> => {
  if (!genAI) initializeGemini();
  if (!genAI) throw new Error("GenAI not initialized");

  const mediaPart = await fileToGenerativePart(file);

  // Updated prompt to handle visual-to-text conversion and high quantity/quality
  const prompt = `
    You are a highly precise and strict science tutor.
    Your task is to generate a comprehensive review quiz based *strictly* on the provided document (image or PDF).

    INSTRUCTIONS:
    1. **Deep Analysis**: Read every text, label, graph axis, and diagram detail in the provided file.
    2. **Quantity**: Create **30 to 40** distinct, high-quality multiple-choice questions. It is critical to generate at least 30 questions. Cover every topic found in the document to the fullest extent.
    3. **Quality**: Prioritize questions that test understanding of relationships (e.g., how the sun's angle affects temperature, interpreting graph trends) rather than just simple fact recall. Ensure distinct distractors (wrong answers).
    4. **Accuracy**: Ensure the correct answer is indisputably supported by the document content.
    5. **Explanation**: Provide a helpful, educational explanation for students (why the answer is right and others are wrong).
    6. **Categories**: Assign one of these categories: '天体・季節', '光と影', '生物'.

    CRITICAL RULE FOR VISUALS (NO_VISUAL_REFERENCES):
    - The user CANNOT see the original image/PDF while taking the quiz.
    - **DO NOT** write questions that say "Look at Figure 1", "As shown in Graph A", or "Which symbol in the diagram...".
    - **INSTEAD, CONVERT VISUALS TO TEXT**: Describe the visual scenario within the question text itself.
      - BAD: "What does Figure 1 show?"
      - GOOD: "In a diagram where the Earth's axis is tilted towards the Sun, which season is represented?"
      - BAD: "Which of A, B, C in the graph represents Winter?"
      - GOOD: "In a graph showing sun altitude, which curve represents the season with the lowest peak altitude (Winter)?"

    Return the response strictly as a JSON array matching the schema.
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
        parts: [mediaPart, { text: prompt }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        // Increased thinking budget for deeper analysis of the document
        thinkingConfig: {
          thinkingBudget: 4096, 
        },
        // Significantly increased maxOutputTokens to allow for 30-40 JSON objects
        maxOutputTokens: 32768, 
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No data returned");
    
    // Parse and map to ensure types align (Schema returns strings/ints, we cast to Question interface)
    const rawData = JSON.parse(jsonText);
    return rawData.map((q: any) => ({
      id: q.id,
      category: q.category as QuestionCategory,
      text: q.text,
      options: q.options,
      correctOptionId: q.correctOptionId,
      explanation: q.explanation
    })) as Question[];

  } catch (error) {
    console.error("Quiz Generation Error:", error);
    throw error;
  }
};