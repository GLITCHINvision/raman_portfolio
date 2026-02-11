export const RAMANOBOT_DATA = [
  {
    keywords: ["who", "are", "you", "identity", "name", "raman"],
    question: "Who are you?",
    answers: [
      "I'm Raman Sharma. 🎓 Final year Electrical Engineering student at DTU by day, code architect by night. Let's build something legendary! 🚀",
      "I'm the human behind the code! Raman Sharma, DTU senior, and a builder of digital systems. Nice to meet ya! ✨",
      "Raman Sharma here. I turn complex data into clear solutions. Currently finishing up my B.Tech at DTU. 🧠⚡"
    ]
  },
  {
    keywords: ["tell", "about", "yourself", "bio", "intro", "background"],
    question: "Tell me about yourself",
    answers: [
      "I'm a developer obsessed with precision and scalability. From neural networks to full-stack ecosystems, I build high-performance code. 💻🔥",
      "Just a dev who loves building cool stuff that works at scale. I'm deep into AI, Data Analyics, and Web Dev. No cap, just vibes and code. 🧪",
      "I'm all about that engineering life. I deconstruct systems and rebuild them better. DTU educated, software motivated. �"
    ]
  },
  {
    keywords: ["skills", "tech", "languages", "stack", "knowledge", "know", "code"],
    question: "What are your technical skills?",
    answers: [
      "I speak Python, SQL, and C++ fluently. React is my playground for the frontend, and I'm deep into Flask, ML, and AI infra. 🧠⚡",
      "My tech stack is pretty lit: Python, SQL, C++, React.js, and a whole lot of AI/ML tools like PyTorch and Hugging Face. 🛠️",
      "I'm a polyglot in the dev world. Python for logic, SQL for data, and React for the beauty. It's the ultimate setup. 🚀"
    ]
  },
  {
    keywords: ["sql", "database", "postgres", "mysql", "queries", "data"],
    question: "Do you know SQL?",
    answers: [
      "Bet! 📊 I'm a SQL wizard—joins, window functions, query optimization, you name it. Performance is always the vibe.",
      "SQL is my second language. I love architecting schemas and writing queries that actually make sense of raw data. 📉",
      "For real. I've used SQL in almost all my projects, from predictive analytics to full-stack apps. Databases are my jam. 🥯"
    ]
  },
  {
    keywords: ["ml", "machine", "learning", "ai", "transformer", "hugging", "model"],
    question: "Do you work with Machine Learning?",
    answers: [
      "For real. 🤖 I've built everything from RAG-based chatbots to custom predictive models using scikit-learn and Hugging Face.",
      "ML is a huge part of what I do. I operate where software meets cognition, creating systems that don't just function, but think. 🧠💡",
      "Yup! I've integrated transformer models and built custom analytics pipelines. The future is AI, and I'm here for it. ✨"
    ]
  },
  {
    keywords: ["frontend", "react", "html", "css", "js", "responsive", "design", "ui", "ux"],
    question: "Do you have frontend experience?",
    answers: [
      "Yup! I use React to build interfaces that aren't just functional but feel premium and smooth. Check the UI you're looking at right now! ✨",
      "I'm a fan of clean, dynamic UI. React and Tailwind are my go-tos for building responsive web apps that pop. 🎨",
      "Frontend is where the magic becomes visible. I focus on high-fidelity designs and smooth user experiences. No mid UIs allowed. 🚫"
    ]
  },
  {
    keywords: ["placement", "campus", "bot", "queries", "college"],
    question: "Tell me about your placement chatbot project",
    answers: [
      "It's a 24/7 AI-powered placement wingman. 🎓 Answers queries about companies and trends using a Flask/React stack. Scalable and clutch. 🚀",
      "Built that to help my peers navigate the placement chaos. It uses structured data and NLP to give real-time answers. Total life saver. 💎",
      "The Campus Bot is one of my faves. It's a full-stack solution that makes placement info accessible 24/7. Built with React and Flask. �"
    ]
  },
  {
    keywords: ["fact", "check", "verification", "hallucination", "rag", "accurate"],
    question: "What is your fact checker project?",
    answers: [
      "Think of it as a BS-detector for AI. 🔍 Uses RAG to verify info in real-time. Pure accuracy, no cap.",
      "I built it to stop AI from hallucinating. It cross-references facts using APIs and RAG. Keeping the truth alive in the LLM era. ⚖️",
      "It's an AI chatbot for real-time verification. It improves factual accuracy by 30%—huge for reliable info. 📈"
    ]
  },
  {
    keywords: ["budget", "buddy", "finance", "expense", "spending", "money"],
    question: "What is Smart Budget Buddy?",
    answers: [
      "Your financial glow-up. 💸 An ML-based app that categorizes your spending and predicts future patterns. Pure finance energy.",
      "It's an ML-powered finance app. Categorizes expenses and gives you saving tips so you can stop being broke (kidding, but it helps!). 💰✨",
      "Smart Budget Buddy uses ML to track and predict spending. It's like having a personal accountant who actually knows math. 📉"
    ]
  },
  {
    keywords: ["challenges", "difficulty", "problems", "solved", "hard"],
    question: "What challenges have you faced?",
    answers: [
      "API latency, AI hallucinations, and scaling databases kept me on my toes. Solving those 'impossible' bugs is where the real growth is. 🍳",
      "The hardest part is often making complex systems simple. Balancing performance with user experience is a constant (and fun) challenge. ⚖️",
      "Debugging high-frequency pipelines and ensuring data integrity at scale. It's tough, but that's how we level up. 🔥"
    ]
  },
  {
    keywords: ["hire", "why", "value", "impact", "candidate"],
    question: "Why should we hire you?",
    answers: [
      "I don't just write code; I architect solutions. I learn fast, move faster, and I'm obsessed with delivering measurable impact. 💎",
      "I'm a clutch player. Whether it's optimization or building from scratch, I bring a mix of engineering rigor and creative thinking. 🚀",
      "I'm ready to hit the ground running. I bridge the gap between data science and software engineering. Let's make moves. 📈"
    ]
  },
  {
    keywords: ["contact", "reach", "email", "linkedin", "connect", "message", "talk"],
    question: "How can I contact you?",
    answers: [
      "Slide into my LinkedIn or check the Contact section here. My GitHub is also open for exploration! 📧",
      "You can reach me via the form on this page or LinkedIn. I'm usually pretty quick to respond if the vibes are right. 🔗",
      "Email or LinkedIn works best. Let's chat about tech, projects, or just vibing over code! ✨"
    ]
  }
];

export const CONVERSATION_STARTERS = [
  "Actually, that's a great question! ",
  "Oh, I gotchu! ",
  "Facts. ",
  "Here's the tea: ",
  "Check this out: ",
  "Real talk, ",
  "Wait, let me tell you about that. "
];

export const SMALL_TALK = [
  {
    keywords: ["hi", "hello", "hey", "yo", "sup"],
    answers: ["Yo! I'm Ramanobot. Ready to talk all things Raman? 🤖", "Hey! What's the move? Ask me anything about Raman's work! ✨"]
  },
  {
    keywords: ["how", "are", "you", "doing", "good", "well"],
    answers: ["I'm vibes! Just chilling in the code. How can I help? 😎", "Doing great, just calculating some stuff. What's on your mind? 🧠"]
  },
  {
    keywords: ["thanks", "thank", "cool", "nice", "awesome"],
    answers: ["Anytime! 🚀", "Glad I could help. You're the real one. 💎", "No problem at all! ✨"]
  }
];

export const INITIAL_GREETING = "Yo! I'm Ramanobot, your digital guide to Raman's world. 🤖✨ I'm pretty smart, no cap. What do you want to know?";

export const FALLBACK_RESPONSE = "Hmm, I'm not catching those vibes yet. 🧐 Try asking about my projects, tech stack, or why I'm the perfect hire!";
