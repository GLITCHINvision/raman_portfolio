import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../data';
import { Mail, Github, Linkedin, Briefcase, GraduationCap, Award, Code, Printer, Cpu, Terminal, Database } from 'lucide-react';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-32 px-4 relative overflow-hidden min-h-screen">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="space-y-24"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">{PROFILE.name}</h1>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg md:text-xl font-mono text-accent-primary uppercase tracking-[0.4em]">SYSTEM_ARCHITECT // SDE</p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <a href={`mailto:${PROFILE.socials.email}`} className="flex items-center gap-2 text-secondary hover:text-accent-primary transition-colors no-underline font-mono text-xs uppercase tracking-widest">
                  <Mail size={14} /> {PROFILE.socials.email}
                </a>
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors no-underline font-mono text-xs uppercase tracking-widest">
                  <Github size={14} /> GitHub
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-accent-primary transition-colors no-underline font-mono text-xs uppercase tracking-widest">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 lg:gap-24">
            {/* Main Content */}
            <div className="space-y-24">
              {/* Experience */}
              <motion.div variants={item}>
                <div className="flex items-center gap-4 mb-12">
                  <Briefcase size={28} className="text-accent-primary" />
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">Work History</h2>
                </div>
                <div className="space-y-12 pl-6 border-l border-white/5">
                  {EXPERIENCE.map((job, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-bg-dark border-2 border-accent-primary group-hover:shadow-[0_0_10px_var(--accent-glow)] transition-all"></div>
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">{job.role}</h3>
                        <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">{job.date}</span>
                      </div>
                      <div className="text-accent-primary font-mono text-sm mb-6 uppercase tracking-wider">{job.company}</div>
                      <ul className="space-y-3">
                        {job.details?.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-sm text-secondary leading-relaxed group/item">
                            <span className="text-accent-primary opacity-40 group-hover/item:opacity-100 transition-opacity">>></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div variants={item}>
                <div className="flex items-center gap-4 mb-12">
                  <Terminal size={28} className="text-accent-primary" />
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">System Deployment</h2>
                </div>
                <div className="grid gap-6">
                  {PROJECTS.map((proj, idx) => (
                    <div key={idx} className="smart-card p-8 group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">{proj.title}</h3>
                        <span className="text-[9px] font-mono text-accent-primary border border-accent-primary/30 px-2 py-0.5 rounded uppercase">{proj.tech}</span>
                      </div>
                      <ul className="space-y-2">
                        {proj.details?.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-xs text-secondary opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
                            <span className="text-accent-primary/50">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-24">
              {/* Skills */}
              <motion.div variants={item}>
                <div className="flex items-center gap-4 mb-12">
                  <Cpu size={28} className="text-accent-primary" />
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">Technology Stack</h2>
                </div>
                <div className="space-y-10">
                  {SKILLS.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em] block">{cat.category}</span>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s, i) => (
                          <span key={i} className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-white hover:border-accent-primary/30 transition-all cursor-default">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={item}>
                <div className="flex items-center gap-4 mb-12">
                  <GraduationCap size={28} className="text-accent-primary" />
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">Education</h2>
                </div>
                <div className="space-y-10">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest">{edu.date}</span>
                        <span className="text-xs font-bold text-white">{edu.gpa}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                      <p className="text-sm text-secondary font-mono uppercase tracking-tighter opacity-80">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={item}>
                <div className="flex items-center gap-4 mb-12">
                  <Award size={28} className="text-accent-primary" />
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">Honors</h2>
                </div>
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="flex gap-4 items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/30 group-hover:bg-accent-primary group-hover:scale-150 transition-all"></div>
                      <span className="text-sm text-secondary group-hover:text-white transition-colors">{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-10 right-10 no-print z-50">
        <button
          onClick={handlePrint}
          className="bg-accent-primary text-bg-dark p-5 rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-110 active:scale-95 transition-all group relative"
        >
          <Printer size={24} />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] font-mono text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            Print Protocol // PDF
          </div>
        </button>
      </div>
    </section>
  );
};

export default Resume;
