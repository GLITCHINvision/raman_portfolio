import { KNOWLEDGE_BASE } from "../data/aiKnowledge";

export const getAIResponse = async (userMessage) => {
  // Simulate network latency for a "pro" feel
  await new Promise(resolve => setTimeout(resolve, 800));

  const query = userMessage.toLowerCase();

  // Find the best match based on keywords
  const match = KNOWLEDGE_BASE.mapping.find(item =>
    item.keywords.some(keyword => query.includes(keyword))
  );

  if (match) {
    return match.response;
  }

  // Handle generic greetings
  if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
    return "Greetings. I am Raman's Core Intelligence. How can I assist you with his professional profile today?";
  }

  return KNOWLEDGE_BASE.fallback;
};
