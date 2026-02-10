import React from 'react';
import { PROJECTS } from '../data';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Work = ({ recruiterMode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (recruiterMode) {
    return (
      <section id="work" className="section px-4">
        <div className="container max-w-screen-lg">
          <h2 className="section-title">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="glass-card flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                <p className="text-accent-blue font-mono text-xs uppercase tracking-widest mb-4">{project.tech}</p>
                <p className="text-text-secondary text-base leading-relaxed mb-6 flex-grow">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline font-medium border-bottom pb-1 hover-text-accent transition-all inline-block w-fit">
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="section px-4">
      <div className="container max-w-screen-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 variants={fadeInUp} className="section-title text-center">Selected Work</motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="glass-card flex flex-col group"
                whileHover={{ y: -6, borderColor: 'var(--accent-blue)' }}
              >
                <div className="text-accent-blue uppercase font-mono mb-4 text-sm tracking-wide">
                  {project.tech}
                </div>
                <h3 className="font-mono text-xl mb-2 transition-colors group-hover-text-accent">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-base mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary no-underline font-medium transition-colors hover-text-accent flex items-center gap-2 text-sm"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
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
