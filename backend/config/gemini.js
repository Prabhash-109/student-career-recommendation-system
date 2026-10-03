import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI = null;

export const getGeminiModel = (modelName = 'gemini-1.5-flash') => {
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  if (!genAI) {
    return null;
  }
  return genAI.getGenerativeModel({ model: modelName });
};
