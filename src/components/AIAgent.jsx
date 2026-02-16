import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Terminal, Cpu, User, Sparkles } from 'lucide-react';
import { getAIResponse } from '../lib/gemini';

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Systems online. I am Raman's Core Intelligence. How can I facilitate your inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const suggestions = [
    "Technical Stack",
    "Current Work",
    "Professional Philosophy",
    "Why hire Raman?"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getAIResponse(text);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[3000]">
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-[#0F1115] border border-glass-border flex items-center justify-center text-accent-blue shadow-2xl relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Cpu size={24} className="animate-pulse shadow-[0_0_15px_rgba(79,140,255,0.5)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: 'spring', damping: 25, stiffness: 300 }
            }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            className="fixed inset-0 sm:inset-auto sm:absolute sm:bottom-20 sm:right-0 w-full sm:w-[380px] md:w-[420px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-[#0A0C10] sm:border sm:border-glass-border sm:rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl z-[3001]"
          >
            {/* Header */}
            <div className="p-5 border-b border-glass-border bg-white/5 flex items-center justify-between safe-top">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">Core Intelligence</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-text-secondary uppercase tracking-tighter">System Synchronized</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 relative overflow-hidden bg-[#0A0C10]">
              {/* Cinematic Tech Background */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Perspective Neural Grid */}
                <motion.div
                  animate={{
                    rotateX: [15, 12, 15],
                    rotateY: [-5, 5, -5]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-[0.4]"
                  style={{
                    perspective: '1200px',
                    backgroundImage: `linear-gradient(rgba(79, 140, 255, 0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(79, 140, 255, 0.4) 1.5px, transparent 1.5px)`,
                    backgroundSize: '50px 50px'
                  }}
                />

                {/* Micro-Pulse Grid */}
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(79, 140, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 140, 255, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '10px 10px'
                  }}
                />

                {/* Data Kernels - Using fixed positions to avoid render jumps */}
                <div className="absolute inset-0">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-accent-blue rounded-full blur-[0.5px] animate-[particle-drift_12s_linear_infinite]"
                      style={{
                        left: `${(i * 19) % 100}%`,
                        top: `${(i * 31) % 100}%`,
                        animationDelay: `${i * 1.5}s`,
                        '--tw-translate-x': `${(i % 2 === 0 ? 40 : -40)}px`,
                        '--tw-translate-y': '-200px'
                      }}
                    />
                  ))}
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(79,140,255,0.2)_0%,transparent_80%)]" />

                {/* Scanline Overlay */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="w-full h-24 bg-gradient-to-b from-transparent via-accent-blue/10 to-transparent -translate-y-full animate-[scan_6s_linear_infinite]" />
                </div>
              </div>

              {/* Scrollable Content Layer */}
              <div className="absolute inset-0 overflow-y-auto p-5 scrollbar-none md:scrollbar-thin scrollbar-thumb-glass-border z-10">
                <div className="space-y-6 pt-2">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[90%] sm:max-w-[85%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-accent-blue/10 text-accent-blue' : 'bg-white/5 text-text-secondary shadow-inner'
                          }`}>
                          {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} />}
                        </div>
                        <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                          ? 'bg-accent-blue text-white rounded-tr-none shadow-[0_4px_20px_rgba(79,140,255,0.4)]'
                          : 'bg-white/5 text-text-primary border border-glass-border rounded-tl-none backdrop-blur-md'
                          }`}>
                          {msg.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 items-center bg-white/5 border border-glass-border p-3 rounded-2xl">
                        <div className="flex gap-1.5">
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-5 bg-white/5 border-t border-glass-border space-y-4 safe-bottom">
              {/* Suggestions */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pb-2">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-[10px] px-3.5 py-2 rounded-full border border-glass-border bg-black/40 text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-all uppercase tracking-wider font-mono backdrop-blur-sm"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query system knowledge..."
                  className="w-full bg-black/60 border border-glass-border rounded-2xl py-4 pl-5 pr-14 text-sm text-white placeholder:text-text-secondary focus:outline-none focus:border-accent-blue transition-all font-mono"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-text-secondary uppercase tracking-[0.3em] font-mono opacity-40">
                Neural Protocol // SECURE_LINK
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAgent;
