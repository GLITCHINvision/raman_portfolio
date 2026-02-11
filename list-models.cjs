const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
  try {
    const list = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Just to get the instance
    // Note: getGenerativeModel doesn't have listModels, need to use the genAI instance if available
    // Actually, let's just try gemini-pro which is usually safe.
    console.log("Testing gemini-pro...");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Hi");
    console.log("Success with gemini-pro!");
  } catch (e) {
    console.error("Error:", e.message);
  }
}

listModels();
