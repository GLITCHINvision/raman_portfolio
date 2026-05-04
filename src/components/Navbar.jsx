import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Zap, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isSynced }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (isHome) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Sync', id: 'iq-test' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full transition-all duration-500 z-[1000] ${scrolled ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container px-4 md:px-6 flex justify-between items-center relative">
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3 no-underline">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${isSynced ? 'bg-accent-primary border-accent-primary shadow-[0_0_15px_var(--accent-glow)]' : 'bg-white/5 border-white/10'}`}>
              <Cpu size={20} className={isSynced ? 'text-bg-dark' : 'text-white'} />
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold text-white tracking-tighter uppercase leading-none">Raman Sharma</span>
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-500 ${isSynced ? 'text-accent-primary' : 'text-secondary'}`}>
                {isSynced ? 'System Synchronized' : 'Uncalibrated Core'}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary hover:text-accent-primary transition-colors no-underline"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/resume" 
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary hover:text-accent-primary transition-colors no-underline"
            >
              Resume
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-mono tracking-widest transition-all duration-500 ${isSynced ? 'bg-accent-primary/10 border-accent-primary text-accent-primary shadow-[0_0_15px_var(--accent-glow)]' : 'bg-white/5 border-white/10 text-secondary'}`}>
              {isSynced ? <Zap size={12} className="animate-pulse" /> : <Radio size={12} />}
              {isSynced ? 'NODE_SYNC: OK' : 'NODE_SYNC: OFFLINE'}
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 rounded-xl border border-white/5 bg-white/5 text-white flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 p-4 lg:hidden"
            >
              <div className="smart-card bg-[#08090A]/95 backdrop-blur-3xl border-accent-primary/20 p-8 space-y-6 shadow-2xl">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="block text-2xl font-bold text-white no-underline hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-white no-underline hover:text-accent-primary transition-colors"
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
