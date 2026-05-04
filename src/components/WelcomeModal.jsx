import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Code, User, Send, ShieldCheck, Zap, Activity } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const WelcomeModal = ({ setRecruiterMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('portfolio_visit_v3');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRoleSelect = async (role) => {
    setSelectedRole(role);
    setSending(true);
    localStorage.setItem('portfolio_visit_v3', 'true');

    if (role === 'Recruiter') {
      setRecruiterMode(true);
    }

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            to_email: 'ramansharma6201@gmail.com',
            visitor_type: role,
            timestamp: new Date().toLocaleString(),
          },
          PUBLIC_KEY
        );
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setSending(false);
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  const options = [
    { label: 'Recruiter', icon: Briefcase, color: 'text-accent-primary', sub: 'Enable Executive Summary' },
    { label: 'Engineer', icon: Code, color: 'text-accent-secondary', sub: 'View Architecture Docs' },
    { label: 'Guest', icon: User, color: 'text-secondary', sub: 'General Exploration' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center px-4 bg-[#08090A]/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="smart-card w-full max-w-md bg-[#0A0B0D]/90 border-accent-primary/20 p-8 shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              {!selectedRole ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight font-mono">VISITOR_AUTH</h2>
                      <p className="text-[10px] text-secondary uppercase tracking-widest font-mono">Personalization Protocol</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleRoleSelect(opt.label)}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-accent-primary/30 transition-all text-left relative overflow-hidden"
                      >
                        <div className={`p-3 rounded-lg bg-black/40 ${opt.color} group-hover:scale-110 transition-transform`}>
                          <opt.icon size={20} />
                        </div>
                        <div>
                          <span className="block font-bold text-sm text-white">{opt.label}</span>
                          <span className="text-[10px] font-mono text-secondary uppercase tracking-tighter">{opt.sub}</span>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <Zap size={14} className="text-accent-primary" />
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 rounded-full border-2 border-dashed border-accent-primary/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-accent-primary">
                      {sending ? <Activity size={32} className="animate-pulse" /> : <Send size={32} />}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Access Granted.</h3>
                  <p className="text-sm font-mono text-secondary uppercase tracking-widest">
                    Initializing {selectedRole.toUpperCase()}_PROFILE...
                  </p>
                </div>
              )}
            </div>

            {!selectedRole && (
              <button
                onClick={() => {
                  localStorage.setItem('portfolio_visit_v3', 'true');
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 p-2 text-secondary hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
