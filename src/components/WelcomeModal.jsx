import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Code, User, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS keys from environment variables
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const WelcomeModal = ({ setRecruiterMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Check if user has already visited (using a new key to reset for everyone)
    const hasVisited = localStorage.getItem('portfolio_visit_v1');
    if (!hasVisited) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRoleSelect = async (role) => {
    setSelectedRole(role);
    setSending(true);

    // Save to local storage so modal doesn't show again
    localStorage.setItem('portfolio_visit_v1', 'true');

    // If recruiter, enable recruiter mode immediately
    if (role === 'Recruiter') {
      setRecruiterMode(true);
    }

    console.log('Attempting to send email...');
    console.log('Service ID:', SERVICE_ID);
    console.log('Template ID:', TEMPLATE_ID);
    console.log('Public Key:', PUBLIC_KEY ? 'Start with ' + PUBLIC_KEY.substring(0, 3) : 'MISSING');

    // Send Email
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            to_email: 'ramansharma6201@gmail.com',
            visitor_type: role,
            timestamp: new Date().toLocaleString(),
          },
          PUBLIC_KEY
        );
        console.log('Email sent successfully!', response.status, response.text);
      } else {
        console.warn('EmailJS keys are missing/undefined. Email not sent.');
        console.warn('Checks:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      if (error.text) console.error('Error details:', error.text);
    } finally {
      setSending(false);
      setTimeout(() => setIsOpen(false), 1500); // Close after brief delay
    }
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 500 } },
    exit: { scale: 0.9, opacity: 0, y: 20 }
  };

  const options = [
    { label: 'Recruiter', icon: Briefcase, color: 'text-accent-blue', borderColor: 'hover:border-accent-blue' },
    { label: 'Tech Enthusiast', icon: Code, color: 'text-emerald-400', borderColor: 'hover:border-emerald-400' },
    { label: 'Job Hunter', icon: User, color: 'text-purple-400', borderColor: 'hover:border-purple-400' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="w-full max-w-md bg-[#0F1115] border border-glass-border rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            variants={modal}
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent-blue/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center">
              {!selectedRole ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2 font-mono">Who is visiting?</h2>
                  <p className="text-text-secondary text-sm mb-8">Help me personalize your experience.</p>

                  <div className="grid gap-4">
                    {options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleRoleSelect(opt.label)}
                        className={`group flex items-center gap-4 p-4 rounded-xl border border-glass-border bg-white/5 transition-all hover:bg-white/10 ${opt.borderColor} text-left`}
                      >
                        <div className={`p-3 rounded-lg bg-black/40 ${opt.color}`}>
                          <opt.icon size={24} />
                        </div>
                        <div>
                          <span className={`block font-bold text-base text-gray-200 group-hover:text-white transition-colors`}>{opt.label}</span>
                          <span className="text-xs text-text-secondary">
                            {opt.label === 'Recruiter' ? 'Enables Recruiter Mode' : 'Explore the portfolio'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-8 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4 text-accent-blue"
                  >
                    <Send size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Welcome!</h3>
                  <p className="text-text-secondary">
                    {selectedRole === 'Recruiter' ? 'Switching to Recruiter Mode...' : 'Enjoy exploring the portfolio!'}
                  </p>
                </div>
              )}
            </div>

            {/* Close button for manual exit */}
            {!selectedRole && (
              <button
                onClick={() => {
                  localStorage.setItem('portfolio_visit_v1', 'true');
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
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
