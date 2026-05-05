import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE } from '../data';
import { Terminal, Shield, Zap, Activity } from 'lucide-react';

const Hero = ({ recruiterMode, isSynced }) => {
  const [typedHeadline, setTypedHeadline] = useState('');
  const fullHeadline = PROFILE.headline;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedHeadline(fullHeadline.slice(0, i));
      i++;
      if (i > fullHeadline.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000 ${isSynced ? 'bg-accent-primary/5' : 'bg-accent-secondary/5'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-1000 ${isSynced ? 'bg-accent-secondary/5' : 'bg-accent-primary/5'}`} />
      </div>

      <motion.div
        className="container relative z-10 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1">
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <div className={`px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-500 ${isSynced ? 'border-accent-primary text-accent-primary' : 'border-glass-border text-secondary'}`}>
                {isSynced ? <Zap size={10} className="animate-pulse" /> : <Activity size={10} />}
                {isSynced ? 'Neural Sync Active' : 'System Standby'}
              </div>
              <div className="h-px w-8 bg-glass-border"></div>
              <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">v4.0.2 // Core</span>
            </motion.div>

            <motion.h1 
              variants={item}
              className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter"
            >
              <span className="text-white">Engineering</span> <br />
              <span className={`transition-colors duration-1000 ${isSynced ? 'text-accent-primary' : 'text-accent-secondary'}`}>Intelligence.</span>
            </motion.h1>

            <motion.div variants={item} className="mb-10 min-h-[3rem]">
              <p className="text-xl md:text-2xl text-secondary font-mono leading-relaxed max-w-2xl">
                {typedHeadline}
                <span className="inline-block w-2 h-6 ml-1 bg-accent-primary animate-pulse"></span>
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a href="#iq-test" className={`px-8 py-4 rounded-xl font-bold text-sm transition-all duration-500 flex items-center gap-2 ${isSynced ? 'bg-accent-primary text-bg-dark neon-pulse' : 'bg-white text-bg-dark hover:bg-accent-primary'}`}>
                <Terminal size={18} />
                INITIALIZE SYNC
              </a>
              <a href="#work" className="px-8 py-4 rounded-xl border border-glass-border font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-2">
                PROJECTS.LOG
              </a>
            </motion.div>
          </div>

          {/* Smart System Status Side Panel */}
          <motion.div 
            variants={item}
            className="lg:w-80 w-full"
          >
            <div className="smart-card p-6 bg-white/[0.02] border-white/5 backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-secondary mb-2 uppercase tracking-widest">
                    <span>Architecture</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: '100%' }} 
                      transition={{ duration: 2 }}
                      className="h-full bg-accent-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-secondary mb-2 uppercase tracking-widest">
                    <span>Performance</span>
                    <span>{isSynced ? '99.9%' : '84.2%'}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: isSynced ? '99.9%' : '84.2%' }} 
                      transition={{ duration: 2 }}
                      className={`h-full transition-colors duration-1000 ${isSynced ? 'bg-accent-primary' : 'bg-accent-secondary'}`}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-glass-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">Uptime</p>
                      <p className="text-sm font-bold text-white">99.99%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">Security</p>
                      <p className="text-sm font-bold text-white">ENABLED</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/5 font-mono text-[9px] text-secondary leading-tight uppercase tracking-tighter">
                  [SYSTEM_READY] &gt; Raman Sharma // SDE <br/>
                  [LOCATION] &gt; New Delhi, IN <br/>
                  [STATUS] &gt; Open for Innovation
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-glass-border to-transparent" />
    </section>
  );
};

export default Hero;
