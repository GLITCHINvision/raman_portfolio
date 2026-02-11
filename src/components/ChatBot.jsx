import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, MessageCircle } from 'lucide-react';
import { RAMANOBOT_DATA, SMALL_TALK, CONVERSATION_STARTERS, INITIAL_GREETING, FALLBACK_RESPONSE } from '../chatbotData';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: INITIAL_GREETING, id: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const findBestMatch = (query) => {
    const q = query.toLowerCase();

    // Stop words to filter out for better matching
    const stopWords = ['is', 'the', 'a', 'an', 'can', 'you', 'tell', 'me', 'what', 'do', 'have', 'your', 'my', 'any', 'about'];
    const tokens = q.split(/\W+/).filter(t => t.length > 1 && !stopWords.includes(t));

    if (tokens.length === 0 && q.length > 0) tokens.push(q); // Fallback to raw query if all are stop words

    let bestMatch = null;
    let maxScore = 0;

    // Check Small Talk first
    for (const item of SMALL_TALK) {
      let score = 0;
      item.keywords.forEach(kw => {
        if (q.includes(kw)) score++;
      });
      if (score > maxScore) {
        maxScore = score;
        const randomIdx = Math.floor(Math.random() * item.answers.length);
        bestMatch = item.answers[randomIdx];
      }
    }

    if (maxScore > 0) return bestMatch;

    // Check Main Data
    RAMANOBOT_DATA.forEach(item => {
      let score = 0;
      tokens.forEach(token => {
        if (item.keywords.includes(token)) score += 2; // Keyword match
        else if (item.keywords.some(kw => kw.includes(token))) score += 1; // Partial match
      });

      if (score > maxScore) {
        maxScore = score;
        const randomIdx = Math.floor(Math.random() * item.answers.length);
        bestMatch = item.answers[randomIdx];
      }
    });

    if (maxScore > 1) {
      // Add a random conversational starter 30% of the time for "human" feel
      const shouldAddStarter = Math.random() > 0.7;
      if (shouldAddStarter) {
        const starter = CONVERSATION_STARTERS[Math.floor(Math.random() * CONVERSATION_STARTERS.length)];
        return starter + bestMatch;
      }
      return bestMatch;
    }

    return FALLBACK_RESPONSE;
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', text, id: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Dynamic delay based on response length for "human" feel
    setTimeout(() => {
      const response = findBestMatch(text);
      const botMessage = { role: 'bot', text: response, id: Date.now() + 1 };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600 + Math.min(text.length * 10, 1500));
  };

  const quickQuestions = [
    "Who is Raman?",
    "What projects did you build?",
    "Can you code in Python?",
    "Why should I hire you?",
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: { type: 'spring', damping: 20, stiffness: 300 }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[3000]">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center text-white relative z-[3001]"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0F1115]"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-[#0F1115]/95 border border-glass-border rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-glass-border bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue border border-accent-blue/30">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ramanobot</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-500 font-medium uppercase tracking-wider">Online & Smart</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                      ? 'bg-accent-blue text-white rounded-tr-none'
                      : 'bg-white/10 text-gray-200 border border-glass-border rounded-tl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-glass-border flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 5 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-glass-border text-text-secondary hover:bg-white/10 hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-4 border-top border-glass-border bg-white/5 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-glass-border rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-accent-blue transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-accent-blue flex items-center justify-center text-white disabled:opacity-50 transition-opacity"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
