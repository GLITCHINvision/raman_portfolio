export const PROFILE = {
  name: "Raman Sharma",
  role: "Software Engineer · Data Systems · AI Infrastructure",
  headline: "Engineering the digital nervous systems of tomorrow.",
  intro: [
    "I analyze the chaos of raw data and architect it into clarity. I don't just write code; I build the living, breathing infrastructures that power intelligent decisions.",
    "From optimizing high frequency API pipelines to deploying large-scale RAG models, my work is defined by precision, scalability, and an obsession with the 'Why'.",
    "I operate where software meets cognition creating systems that don't just function, but think."
  ],
  socials: {
    email: "ramansharma6201@gmail.com",
    phone: "+91-8448582306",
    linkedin: "https://www.linkedin.com/in/raman-sharma-71371024a/",
    github: "https://github.com/GLITCHINvision",
    leetcode: "https://leetcode.com/u/hard_code7/",
    codeforces: "https://codeforces.com/profile/_coder_hub7"
  }
};

export const PHILOSOPHY = [
  {
    title: "First Principles",
    desc: "I deconstruct complex systems into their fundamental truths. Instead of relying on analogy or 'best practices' blindly, I rebuild solutions from the ground up to ensure they are theoretically sound and practically efficient."
  },
  {
    title: "Scalability by Design",
    desc: "Code isn't just written; it's architected for growth. I prioritize statelessness, idempotency, and modularity, ensuring that systems I build today can handle the 10x loads of tomorrow without collapsing."
  },
  {
    title: "The Human Element",
    desc: "Technology is a tool for human enhancement. I believe the most 'intelligent' systems are those that fade into the background, providing value precisely when needed while preserving user agency and privacy."
  }
];

export const EXPERIENCE = [
  {
    role: "SDE Intern",
    company: "HCDS Technologies",
    date: "Aug 2025 – Oct 2025",
    desc: "Architected enterprise AI solutions and high-performance microservices.",
    details: [
      "Developed an enterprise grade AI chatbot using Azure Cognitive Services and Bot Framework, handling complex user intents.",
      "Designed and implemented modular microservices using Node.js and Azure Functions, improving system scalability by 35%.",
      "Optimized NLP model integration which resulted in a 25% reduction in API response latency.",
      "Managed data persistence layers using Azure Blob Storage and Cosmos DB for high availability requirements."
    ]
  },
  {
    role: "Co-Founder & Full Stack Developer",
    company: "YeloSoul",
    date: "Dec 2024 – Oct 2025",
    desc: "Led technical development for a secure, high-traffic e-commerce ecosystem.",
    details: [
      "Built a full stack e-commerce platform using the MERN stack, supporting secure JWT authentication and RBAC.",
      "Engineered automated payment processing pipelines and real time order tracking systems, reducing manual overhead by 60%.",
      "Optimized database queries and API response times by 40% through strategic indexing and caching.",
      "Spearheaded UI/UX redesigns and integrated advanced analytics, leading to a significant increase in user retention."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "NayePankh Foundation",
    date: "Nov 2024 – Dec 2024",
    desc: "Leveraged data driven insights to optimize fundraising and engagement strategies.",
    details: [
      "Processed and analyzed multi-year donor datasets using Python (Pandas/NumPy) to reveal hidden engagement patterns.",
      "Designed automated reporting dashboards that provided actionable insights for strategic fundraising decisions.",
      "Improved donor retention outreach effectiveness by 20% through targeted segmentation analysis."
    ]
  }
];

export const PROJECTS = [
  {
    title: "YeloSoul E-commerce Platform",
    tech: "MERN Stack · Vercel · Render",
    desc: "Developed a secure and responsive e-commerce web app with role based access, REST APIs, and product dashboards.",
    link: "https://github.com/GLITCHINvision/yelosoul",
    details: [
      "Developed a secure and responsive e-commerce web app with role based access, REST APIs, and product dashboards.",
      "Integrated Google OAuth and real-time order updates using WebSockets and MongoDB Atlas."
    ]
  },
  {
    title: "Fact-Checker RAG Chatbot",
    tech: "React · Flask · Hugging Face · NewsAPI",
    desc: "Built an AI chatbot for real time fact verification using Retrieval Augmented Generation, improving factual accuracy by 30%.",
    link: "https://factcheck-frontend.vercel.app/",
    details: [
      "Built an AI chatbot for real-time fact verification using Retrieval Augmented Generation.",
      "Improved factual accuracy by 30% through contextual document retrieval.",
      "Added voice input, dark/light modes, and verified only response toggle."
    ]
  },
  {
    title: "Campus Placement Chatbot",
    tech: "React · Flask · Render · Vercel",
    desc: "Developed a full-stack chatbot answering placement queries using structured datasets, supporting 24/7 access.",
    link: "https://campusbot-frontend.onrender.com/",
    details: [
      "Developed a chatbot answering placement queries using structured datasets and filters.",
      "Deployed a full stack application supporting 24/7 access."
    ]
  },
  {
    title: "Data Mesh Analytics Pipeline",
    tech: "Python · PostgreSQL · dbt · Airflow · Docker",
    desc: "Implemented a domain-driven analytics architecture enabling decentralized data ownership and improved analytics turnaround.",
    link: "https://github.com/GLITCHINvision/data_mesh_project-",
    details: [
      "Implemented a domain-driven analytics architecture enabling decentralized data ownership.",
      "Improved scalability and analytics turnaround time."
    ]
  }
];

export const SKILLS = [
  { category: "Languages", skills: ["C", "C++", "Python", "JavaScript", "SQL"] },
  { category: "Frontend", skills: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "Flask", "Django"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "AI / ML", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK"] },
  { category: "Cloud & Tools", skills: ["Azure", "Docker", "Git", "GitHub", "CI/CD", "Render", "Vercel"] }
];

export const EDUCATION = [
  {
    institution: "Delhi Technological University (DTU)",
    date: "2022 – 2026",
    degree: "B.Tech in Electrical Engineering",
    gpa: "CGPA: 6.70 / 10.0",
    details: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Power Systems, Control Systems.",
      "Relevant Projects: Impact of Power Electronics in AI-driven smart grids.",
      "Achievements: Active member of Technical Societies; participated in multiple national-level hackathons (Flipkart Grid 6.0, TATA Imagination)."
    ]
  }
];

export const CERTIFICATIONS = [
  "Microsoft Data Analyst Certificate",
  "Flipkart Grid 6.0 — SDE Track",
  "TATA Imagination Challenge"
];
