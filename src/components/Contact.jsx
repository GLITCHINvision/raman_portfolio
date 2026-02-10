import React from 'react';
import { PROFILE } from '../data';

import { motion } from 'framer-motion';

const Contact = ({ recruiterMode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  if (recruiterMode) {
    return (
      <section id="contact" className="section px-4">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="flex flex-col gap-4 md:gap-6">
            <a href={`mailto:${PROFILE.socials.email}`} className="text-lg md:text-xl text-text-secondary no-underline transition-colors duration-300 hover:text-accent-blue break-all">{PROFILE.socials.email}</a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-text-secondary no-underline transition-colors duration-300 hover:text-accent-blue">LinkedIn</a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-text-secondary no-underline transition-colors duration-300 hover:text-accent-blue">GitHub</a>
            <a href={PROFILE.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-text-secondary no-underline transition-colors duration-300 hover:text-accent-blue">LeetCode</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section px-4">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          <motion.h2 variants={itemVariant} className="section-title">Contact</motion.h2>
          <div className="flex flex-col gap-6">
            <motion.a variants={itemVariant} href={`mailto:${PROFILE.socials.email}`} className="text-xl text-text-secondary no-underline transition-colors hover-text-accent" whileHover={{ x: 10 }}>
              {PROFILE.socials.email}
            </motion.a>
            <motion.a variants={itemVariant} href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl text-text-secondary no-underline transition-colors hover-text-accent" whileHover={{ x: 10 }}>
              LinkedIn
            </motion.a>
            <motion.a variants={itemVariant} href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-xl text-text-secondary no-underline transition-colors hover-text-accent" whileHover={{ x: 10 }}>
              GitHub
            </motion.a>
            <motion.a variants={itemVariant} href={PROFILE.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-xl text-text-secondary no-underline transition-colors hover-text-accent" whileHover={{ x: 10 }}>
              LeetCode
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
