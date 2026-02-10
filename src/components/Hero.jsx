import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';

const Hero = ({ recruiterMode }) => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  if (recruiterMode) {
    return (
      <section className="section px-4" style={{ paddingTop: '220px' }}>
        <div className="container max-w-screen-md flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-accent-blue font-mono text-sm font-bold tracking-widest block mb-4 uppercase">EXECUTIVE SUMMARY</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-text-primary block leading-tight">{PROFILE.name} — {PROFILE.role}</h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
            Software Engineer specializing in <strong className="text-text-primary font-bold">AI driven applications</strong> and <strong className="text-text-primary font-bold">scalable backend systems</strong>.
            History of delivering high impact projects (30% accuracy boost in RAG pipelines, 40% API optimization).
            Ready to architect production grade intelligence for your team.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <a href={`mailto:${PROFILE.socials.email}`} className="text-accent-blue no-underline font-medium border-bottom pb-1 hover-text-primary transition-all text-sm md:text-base">
              {PROFILE.socials.email}
            </a>
            <span className="text-text-secondary opacity-50 hidden md:inline">•</span>
            <span className="text-text-secondary text-sm">Feel free to contact me for opportunities.</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-negative">
        <div className="orb animate-float top-negative-100 left-negative-100" style={{ width: 'clamp(200px, 40vw, 400px)', height: 'clamp(200px, 40vw, 400px)', backgroundColor: '#1e40af', opacity: 0.4 }}></div>
        <div className="orb animate-float bottom-10 right-negative-50" style={{ width: 'clamp(150px, 30vw, 300px)', height: 'clamp(150px, 30vw, 300px)', backgroundColor: '#3b82f6', opacity: 0.3, animationDelay: '-3s' }}></div>
      </div>

      <motion.div
        className="relative z-10 w-full text-left container"
        style={{ maxWidth: '800px' }}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.span
          variants={fadeInUp}
          className="text-accent-blue uppercase font-mono mb-6 block text-sm tracking-widest"
        >
          {PROFILE.role}
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="headline font-medium tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          {PROFILE.headline.split(" ").slice(0, 2).join(" ")}<br />
          {PROFILE.headline.split(" ").slice(2).join(" ")}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-text-secondary font-light mb-10 text-lg leading-relaxed"
          style={{ maxWidth: '600px' }}
        >
          {PROFILE.intro.join(" ")}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
          <a href="#work" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
