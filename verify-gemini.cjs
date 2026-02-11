const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Manually read .env file
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
  console.error("❌ Error: Missing or invalid Gemini API Key in .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `You are Ramanobot, the AI assistant for Raman Sharma's portfolio. 
  (System prompt truncated for verification script, matching the one in gemini.js)`
});

async function testBot() {
  console.log("🚀 Testing Ramanobot brain connection...");

  try {
    const chat = model.startChat({
      history: [],
      generationConfig: { maxOutputTokens: 100 },
    });

    const testQuestion = "Who is Raman Sharma?";
    console.log(`\nQuestion: "${testQuestion}"`);

    const result = await chat.sendMessage(testQuestion);
    const response = await result.response;
    const text = response.text();

    console.log("\n✅ Ramanobot Response:");
    console.log("------------------------");
    console.log(text);
    console.log("------------------------");
    console.log("\n🔥 Brain is working! It's giving real, genuine answers now.");
  } catch (error) {
    console.error("\n❌ Error during verification:", error.message);
  }
}

testBot();
