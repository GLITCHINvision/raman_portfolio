import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 relative overflow-hidden bg-bg-dark">
      <div className="container max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-secondary font-mono uppercase tracking-[0.3em] text-[10px]">
            &copy; {new Date().getFullYear()} RAMAN_SHARMA // SYSTEM_INTEGRITY: OK
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
            <span className="text-[9px] font-mono text-secondary uppercase tracking-widest opacity-50">Local Node Active</span>
          </div>
        </div>

        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'LeetCode'].map((link) => (
            <span key={link} className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em] hover:text-accent-primary transition-colors cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
