const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

async function findBestModel() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.models) {
      console.log("No models found. Error:", data);
      return;
    }

    const available = data.models
      .filter(m => m.supportedGenerationMethods.includes('generateContent'))
      .map(m => m.name);

    console.log("Available Models for generateContent:");
    available.forEach(m => console.log(`- ${m}`));

    const pref = ["models/gemini-1.5-flash", "models/gemini-1.5-pro", "models/gemini-pro", "models/gemini-1.0-pro"];
    const best = pref.find(p => available.includes(p)) || available[0];

    console.log(`\nRecommended model to use: ${best}`);
  } catch (e) {
    console.error("Fetch Error:", e.message);
  }
}

findBestModel();
