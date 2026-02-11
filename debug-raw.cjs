const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

async function debug() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  console.log("Fetching: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=REDACTED");

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Hi" }] }]
      })
    });

    const data = await response.json();
    console.log("Status:", response.status);
    console.log("Response Body:", JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Fetch Error:", e.message);
  }
}

debug();
