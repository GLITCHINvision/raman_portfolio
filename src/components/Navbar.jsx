import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ recruiterMode, toggleMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (isHome) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow menu to close
    }
  };

  const navLinks = [
    { name: 'About', id: 'about', type: 'section' },
    { name: 'Work', id: 'work', type: 'section' },
    { name: 'Contact', id: 'contact', type: 'section' },
    { name: 'Resume', to: '/resume', type: 'link' },
  ];

  return (
    <nav className="fixed top-0 w-full py-4 backdrop-blur-xl z-[1000] border-b border-glass-white nav-bg">
      <div className="container flex justify-between items-center relative">
        <Link to="/" onClick={() => setIsOpen(false)} className="no-underline uppercase whitespace-nowrap logo font-bold text-sm tracking-widest relative z-[60]">
          RAMAN SHARMA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {isHome ? (
              <>
                {navLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="text-text-secondary no-underline font-mono uppercase transition-colors hover:text-primary text-xs tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
              </>
            ) : (
              <Link to="/" className="text-text-secondary no-underline font-mono uppercase transition-colors hover:text-primary text-xs tracking-widest">Home</Link>
            )}
            <Link
              to="/resume"
              className={`text-xs font-mono uppercase transition-colors tracking-widest ${location.pathname === '/resume' ? 'text-accent-blue font-bold' : 'text-text-secondary hover:text-primary'}`}
            >
              Resume
            </Link>
          </div>

          <button
            onClick={toggleMode}
            className="flex items-center gap-3 cursor-pointer transition-all hover:opacity-80 group"
            aria-label="Toggle Recruiter Mode"
          >
            <div className={`relative w-10 h-5 border border-glass-border rounded-full overflow-hidden transition-all duration-300 ${recruiterMode ? 'bg-accent-blue' : 'bg-bg-dark'}`}>
              <div
                className={`absolute w-3.5 h-3.5 bg-text-primary rounded-full transition-all duration-300 top-[2px] left-[2px] ${recruiterMode ? 'translate-x-[20px]' : 'translate-x-0'}`}
              ></div>
            </div>
            <span className={`font-mono uppercase text-[10px] tracking-widest transition-colors ${recruiterMode ? 'text-accent-blue' : 'text-text-secondary group-hover:text-text-primary'}`}>
              {recruiterMode ? 'RCRTR' : 'STORY'}
            </span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4 relative z-50">
          <button
            onClick={toggleMode}
            className="flex items-center gap-2 relative z-[60] p-2"
            aria-label="Toggle Recruiter Mode"
          >
            <div className={`relative w-10 h-5 border border-glass-border rounded-full overflow-hidden transition-all duration-300 ${recruiterMode ? 'bg-accent-blue' : 'bg-bg-dark'}`}>
              <div
                className={`absolute w-3.5 h-3.5 bg-white rounded-full transition-all duration-300 top-[2px] left-[2px] ${recruiterMode ? 'translate-x-[20px]' : 'translate-x-0'}`}
              ></div>
            </div>
          </button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] flex items-center justify-center w-10 h-10 rounded-full border border-glass-border bg-bg-dark/50 backdrop-blur-md text-text-primary transition-colors hover:border-accent-blue hover:text-accent-blue"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Background Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-[#050505] border-b border-glass-border py-10 px-8 md:hidden overflow-hidden shadow-2xl z-50"
            >
              <div className="flex flex-col gap-8">
                {isHome ? (
                  <>
                    {navLinks.slice(0, 3).map((link) => (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.id);
                        }}
                        className="text-text-primary no-underline font-mono uppercase text-xl tracking-widest border-l-2 border-transparent hover:border-accent-blue pl-6 transition-all hover:pl-8 active:text-accent-blue"
                      >
                        {link.name}
                      </a>
                    ))}
                  </>
                ) : (
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-text-primary no-underline font-mono uppercase text-xl tracking-widest border-l-2 border-transparent hover:border-accent-blue pl-6 transition-all hover:pl-8"
                  >
                    Home
                  </Link>
                )}
                <Link
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className={`no-underline font-mono uppercase text-xl tracking-widest border-l-2 pl-6 transition-all hover:pl-8 ${location.pathname === '/resume' ? 'text-accent-blue border-accent-blue' : 'text-text-primary border-transparent'}`}
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
