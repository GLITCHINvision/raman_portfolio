import React from 'react';
import { PHILOSOPHY } from '../data';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, Layers, ShieldCheck, Zap } from 'lucide-react';

const Philosophy = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  const icons = [Layers, Code2, Rocket];

  return (
    <section id="philosophy" className="py-32 px-4 relative overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="mb-20">
            <h2 className="section-title">Core Principles // Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Architectural Zen.</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((itemData, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="smart-card group p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all duration-500">
                    <Icon size={24} className="text-secondary group-hover:text-accent-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-primary transition-colors">
                    {itemData.title}
                  </h3>
                  
                  <p className="text-secondary leading-relaxed font-mono text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {itemData.desc}
                  </p>

                  {/* Tech Detail Overlay */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-[9px] font-mono text-secondary uppercase tracking-[0.2em]">0{idx + 1} // PROTOCOL</div>
                    <Zap size={12} className="text-accent-primary animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
