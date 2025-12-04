export enum QuestionCategory {
  ASTRONOMY = '天体・季節', // Earth, Sun, Seasons
  PHYSICS = '光と影', // Shadows, Temperature
  BIOLOGY = '生物', // Insects, Plants
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  category: QuestionCategory;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
