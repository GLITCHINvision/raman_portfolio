import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Briefcase, GraduationCap, Calendar, Cpu, Code2, Database, BarChart3, Terminal } from 'lucide-react';
import { EXPERIENCE, SKILLS, EDUCATION, PROFILE } from '../data';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  const skillIcons = {
    "Languages": Code2,
    "Backend & Databases": Database,
    "AI/ML & Data Science": Cpu,
    "Tools & Frameworks": Terminal,
  };

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="mb-20">
            <h2 className="section-title">Identity // Background</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Human. Engineer. Intelligence.</h3>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Bio & Skills */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div variants={item} className="space-y-6">
                <p className="text-xl text-secondary leading-relaxed font-mono">
                  [SYSTEM_BIO] &gt; I am a <span className="text-white font-bold">Software Development Engineer</span> specialized in the synthesis of AI and scalable architecture.
                </p>
                <p className="text-lg text-secondary leading-relaxed opacity-80">
                  My work focuses on bridging the gap between raw data and actionable intelligence. 
                  From architecting production-grade RAG pipelines to optimizing low-latency backend systems, 
                  I build with a focus on precision, scalability, and impact.
                </p>
              </motion.div>

              <motion.div variants={item} className="grid md:grid-cols-2 gap-6 pt-12 border-t border-white/5">
                {SKILLS.map((category, idx) => {
                  const Icon = skillIcons[category.category] || Terminal;
                  return (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-3 text-accent-primary">
                        <Icon size={18} />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{category.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Experience Timeline */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent-primary/50 via-white/5 to-transparent hidden sm:block"></div>
              
              <div className="space-y-12 pl-0 sm:pl-8">
                <motion.div variants={item} className="flex items-center gap-4 text-white">
                  <Briefcase size={24} className="text-accent-primary" />
                  <h4 className="text-xl font-bold tracking-tight uppercase">EXPERIENCE.LOG</h4>
                </motion.div>

                {EXPERIENCE.map((exp, idx) => (
                  <motion.div key={idx} variants={item} className="relative group">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent-primary shadow-[0_0_10px_var(--accent-glow)] z-10 hidden sm:block"></div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono text-secondary uppercase tracking-widest">
                        <span>{exp.date}</span>
                        <span className="text-accent-primary">{exp.company}</span>
                      </div>
                      <h5 className="text-lg font-bold text-white group-hover:text-accent-primary transition-colors">{exp.role}</h5>
                      <p className="text-sm text-secondary leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education - Integrated Smart View */}
          <motion.div variants={item} className="mt-32 pt-20 border-t border-white/5">
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap size={32} className="text-accent-primary" />
              <h4 className="text-2xl font-bold text-white tracking-tight uppercase">Academic Foundation</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="smart-card bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded bg-accent-primary/10 border border-accent-primary/30 text-[10px] font-mono text-accent-primary uppercase tracking-widest">
                      {edu.date}
                    </div>
                    <div className="text-sm font-bold text-white font-mono">{edu.gpa}</div>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-2">{edu.institution}</h5>
                  <p className="text-accent-primary font-mono text-xs uppercase tracking-widest mb-6">{edu.degree}</p>
                  
                  <div className="space-y-2 pt-6 border-t border-white/5">
                    {edu.details?.map((detail, dIdx) => (
                      <div key={dIdx} className="flex gap-3 text-[11px] text-secondary font-mono leading-relaxed group/edu">
                        <span className="text-accent-primary opacity-40 group-hover/edu:opacity-100">&gt;&gt;</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
