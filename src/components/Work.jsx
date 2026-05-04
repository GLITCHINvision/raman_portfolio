import React from 'react';
import { PROJECTS } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Globe, Cpu } from 'lucide-react';

const Work = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <section id="work" className="py-32 px-4 relative overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="mb-20">
            <h2 className="section-title">Case Studies // Repositories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Selected Architecture.</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="smart-card group h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    {project.tech.split('·').slice(0, 2).map((t, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-secondary uppercase tracking-widest">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                  <Cpu size={16} className="text-secondary opacity-20 group-hover:text-accent-primary group-hover:opacity-100 transition-all" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-secondary leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-secondary">
                      <Code2 size={12} />
                      <span>{project.tech.split('·').length} MODULES</span>
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-white hover:bg-accent-primary hover:text-bg-dark transition-all"
                  >
                    ACCESS_LOG <ExternalLink size={14} />
                  </a>
                </div>

                {/* Technical Backdrop */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none font-mono text-[60px] font-black leading-none uppercase select-none group-hover:opacity-[0.05] transition-opacity">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
