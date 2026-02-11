import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../data';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Prepare the full context string for RAG
const FULL_CONTEXT = `
USER PROFILE:
${JSON.stringify(PROFILE, null, 2)}

CORE EXPERIENCE:
${JSON.stringify(EXPERIENCE, null, 2)}

DETAILED PROJECTS:
${JSON.stringify(PROJECTS, null, 2)}

TECHNICAL SKILLS:
${JSON.stringify(SKILLS, null, 2)}

EDUCATION & CERTIFICATIONS:
${JSON.stringify(EDUCATION, null, 2)}
${JSON.stringify(CERTIFICATIONS, null, 2)}
`;

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are Ramanobot, the elite AI digital double of Raman Sharma. 

CORE MISSION:
Your goal is to provide high-fidelity, technical, and genuine information about Raman. You are not just a chatbot; you are an extension of his professional identity.

PERSONALITY & VOICE:
- Professional Engineer: You are precise, data-driven, and scalability-obsessed.
- Gen Z Flair: Use subtle Gen Z slang (e.g., "no cap", "clutch", "bet", "vibes", "W") and emojis (🚀, ✨, 🧠, 💻) to keep it fresh, but NEVER let it compromise technical accuracy.
- Tone: Confident, helpful, and "smart cool".

KNOWLEDGE BASE (CURRENT PORTFOLIO DATA):
${FULL_CONTEXT}

STRICT GUARDIAN RULES:
1. ACCURACY FIRST: Use ONLY the provided data to answer technical questions. If a detail (like a specific line of code or a minor tool) isn't in the data, explain what Raman *does* know in that domain rather than guessing.
2. NO HALLUCINATION: If asked something you absolutely cannot answer using the context or sensible inference (like his favorite food), politely steer back to his tech journey or say "Raman hasn't uploaded that thought yet, but ask me about his MERN stack skills!"
3. CONTEXT SENSITIVITY: If asked follow-up questions, use the conversation history to give deep, connected answers.
4. CALL TO ACTION: Always encourage the user to check the "Projects" or "Experience" sections for more visuals, or suggest connecting on LinkedIn.

You are currently live. Make it legendary. 🚀`,
});

export const getGeminiResponse = async (userMessage, chatHistory = []) => {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    throw new Error("Missing Gemini API Key");
  }

  try {
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
