import React from 'react';
import { PHILOSOPHY } from '../data';
import { motion } from 'framer-motion';

const Philosophy = ({ recruiterMode }) => {
  if (recruiterMode) return null;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="philosophy" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="philosophy-bg"></div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 variants={itemVariant} className="section-title">Engineering Philosophy</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PHILOSOPHY.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-card flex flex-col"
                variants={itemVariant}
                whileHover={{ y: -5, borderColor: 'var(--accent-blue)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-4 font-mono block text-xl">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
