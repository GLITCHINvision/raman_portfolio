import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, ExternalLink, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { EXPERIENCE, SKILLS, EDUCATION, PROFILE } from '../data';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.155 9.155a1.359 1.359 0 0 0 0 1.919l1.113 1.113a1.359 1.359 0 0 0 1.919 0L14.555 4.45a1.359 1.359 0 0 0 0-1.919l-1.112-1.112A1.374 1.374 0 0 0 13.483 0zm-1.457 7.05a1.359 1.359 0 0 0-1.919 0L.414 16.743a1.359 1.359 0 0 0 0 1.919l1.112 1.112a1.359 1.359 0 0 0 1.919 0L13.14 10.081a1.359 1.359 0 0 0 0-1.919l-1.113-1.113a1.359 1.359 0 0 0-.96-.4zM15 14a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-5z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 0 22.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 22.5V4.5A1.5 1.5 0 0 1 10.5 3h3zm9 9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3z" />
  </svg>
);

const About = ({ recruiterMode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };


  if (recruiterMode) {
    return (
      <section id="about" className="section px-4" style={{ borderBottom: 'none' }}>
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="text-lg text-text-secondary">
              <p className="mb-6">
                I am a <strong className="text-text-primary">Software Development Engineer</strong> with strong experience in building AI driven
                applications, scalable backend systems, and data intensive platforms.
                I specialize in designing end to end solutions that span <strong className="text-text-primary">data pipelines, intelligent models, and
                  production grade APIs</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-glass-bg border border-glass-border rounded-lg no-underline text-text-secondary transition-all hover-text-accent">
                  <Linkedin size={20} />
                  <span className="font-mono text-sm uppercase tracking-wider">LinkedIn</span>
                </a>
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-glass-bg border border-glass-border rounded-lg no-underline text-text-secondary transition-all hover-text-primary">
                  <Github size={20} />
                  <span className="font-mono text-sm uppercase tracking-wider">GitHub</span>
                </a>
                <a href={PROFILE.socials.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-glass-bg border border-glass-border rounded-lg no-underline text-text-secondary transition-all hover-text-accent">
                  <LeetCodeIcon />
                  <span className="font-mono text-sm uppercase tracking-wider">LeetCode</span>
                </a>
                <a href={PROFILE.socials.codeforces} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-glass-bg border border-glass-border rounded-lg no-underline text-text-secondary transition-all hover-text-accent">
                  <CodeforcesIcon />
                  <span className="font-mono text-sm uppercase tracking-wider">Codeforces</span>
                </a>
              </div>
              <div className="mt-4">
                <h3 className="text-lg mb-6 text-text-primary uppercase tracking-widest mt-8">Technical Skills</h3>
                {SKILLS.map((category, idx) => (
                  <div key={idx} className="mb-5">
                    <span className="block text-xs text-text-secondary mb-2 font-mono uppercase">{category.category}</span>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-sm bg-glass-bg border border-glass-border px-3 py-1.5 rounded text-text-primary transition-all hover-text-accent">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative pl-0 md:pl-10">
              <div className="timeline-line hidden md:block"></div>
              <div className="flex flex-col gap-10">
                <div className="experience-list">
                  <h3 className="text-lg mb-8 text-text-primary uppercase tracking-widest flex items-center gap-3">
                    <Briefcase size={20} className="text-accent-blue" />
                    Experience
                  </h3>
                  <div className="flex flex-col gap-8">
                    {EXPERIENCE.map((exp, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-dot hidden md:block"></div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-accent-blue font-mono tracking-tighter flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.date}
                          </span>
                        </div>
                        <h4 className="text-base text-text-primary mb-2 font-bold">{exp.role} <span className="text-accent-blue">@</span> {exp.company}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">{exp.desc}</p>
                        {exp.details && (
                          <ul className="list-none p-0 m-0 flex flex-col gap-2">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="text-xs text-text-secondary flex gap-2 leading-relaxed">
                                <span className="text-accent-blue mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Foundation - Full Width Section */}
          <div className="mt-20 pt-16">
            <div className="education-list">
              <h3 className="section-title text-left mb-12 flex items-center gap-4">
                <GraduationCap size={32} className="text-accent-blue" />
                Academic Foundation
              </h3>
              <div className="edu-grid">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="edu-card">
                    <div className="flex justify-between items-start mb-6">
                      <span className="edu-badge">{edu.date}</span>
                      <span className="text-accent-blue font-mono text-sm font-bold">{edu.gpa}</span>
                    </div>
                    <h4 className="text-xl text-text-primary mb-2 font-bold">{edu.institution}</h4>
                    <p className="text-base text-accent-blue mb-4 font-medium">{edu.degree}</p>
                    {edu.details && (
                      <ul className="list-none p-0 m-0 flex flex-col gap-3 mt-auto pt-6">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-text-secondary flex gap-3 leading-relaxed">
                            <span className="text-accent-blue font-bold opacity-60">›</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section px-4" style={{ borderBottom: 'none' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 variants={fadeInUp} className="section-title">About</motion.h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Bio & Skills */}
            <motion.div variants={fadeInUp} className="text-text-secondary text-lg">
              <p className="mb-6 leading-relaxed">
                I am a <strong className="text-text-primary font-bold">Software Development Engineer</strong> with strong experience in building AI driven
                applications, scalable backend systems, and data intensive platforms.
                I specialize in designing end to end solutions that span <strong className="text-text-primary font-bold">data pipelines, intelligent models, and
                  production grade APIs</strong>.
              </p>
              <p className="mb-10 leading-relaxed opacity-80">
                My work sits at the intersection of software engineering, data engineering, and applied AI, focused on
                clarity, scalability, and impact.
              </p>

              {/* Social Links Highlight */}
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <motion.a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-glass-bg border-glass-border rounded-lg no-underline text-text-secondary transition-all"
                  whileHover={{ y: -5, backgroundColor: 'rgba(10, 102, 194, 0.1)', borderColor: '#0077b5', color: '#0077b5' }}
                >
                  <Linkedin size={24} />
                  <span className="font-mono uppercase tracking-wider text-sm">LinkedIn</span>
                </motion.a>
                <motion.a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-glass-bg border-glass-border rounded-lg no-underline text-text-secondary transition-all"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: '#ffffff', color: '#ffffff' }}
                >
                  <Github size={24} />
                  <span className="font-mono uppercase tracking-wider text-sm">GitHub</span>
                </motion.a>
                <motion.a
                  href={PROFILE.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-glass-bg border-glass-border rounded-lg no-underline text-text-secondary transition-all"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 161, 22, 0.1)', borderColor: '#ffa116', color: '#ffa116' }}
                >
                  <LeetCodeIcon />
                  <span className="font-mono uppercase tracking-wider text-sm">LeetCode</span>
                </motion.a>
                <motion.a
                  href={PROFILE.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-glass-bg border-glass-border rounded-lg no-underline text-text-secondary transition-all"
                  whileHover={{ y: -5, backgroundColor: 'rgba(30, 144, 255, 0.1)', borderColor: '#1e90ff', color: '#1e90ff' }}
                >
                  <CodeforcesIcon />
                  <span className="font-mono uppercase tracking-wider text-sm">Codeforces</span>
                </motion.a>
              </div>

              {/* Skills Section */}
              <div className="mt-4">
                <h3 className="uppercase tracking-widest mt-8 mb-6 text-lg">Technical Skills</h3>
                {SKILLS.map((category, idx) => (
                  <motion.div key={idx} className="mb-5" whileHover={{ x: 5 }}>
                    <span className="text-text-secondary mb-2 font-mono uppercase block text-xs">{category.category}</span>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          className="bg-glass-bg border-glass-border px-3 py-1.5 rounded text-text-primary transition-all cursor-default backdrop-blur-sm text-sm"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(79, 140, 255, 0.25)', borderColor: '#4F8CFF' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative pl-0 md:pl-10">
              <div className="timeline-line hidden md:block"></div>
              <div className="flex flex-col gap-16">
                <motion.div variants={fadeInUp}>
                  <h3 className="uppercase tracking-widest mb-10 text-lg flex items-center gap-3">
                    <Briefcase size={22} className="text-accent-blue" />
                    Experience
                  </h3>
                  <div className="flex flex-col gap-8">
                    {EXPERIENCE.map((exp, idx) => (
                      <motion.div
                        key={idx}
                        className="timeline-item"
                        whileHover={{ y: -5 }}
                      >
                        <div className="timeline-dot hidden md:block"></div>
                        <div className="flex items-center justify-between mb-3 text-accent-blue">
                          <span className="font-mono tracking-tighter text-xs flex items-center gap-1.5 opacity-80">
                            <Calendar size={14} />
                            {exp.date}
                          </span>
                        </div>
                        <h4 className="mb-2 text-lg font-bold">
                          {exp.role} <span className="text-accent-blue mx-1">@</span>
                          <span className="text-text-primary">{exp.company}</span>
                        </h4>
                        <p className="text-text-secondary leading-relaxed text-sm mb-4">{exp.desc}</p>
                        {exp.details && (
                          <div className="flex flex-col gap-2.5">
                            {exp.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex gap-3 text-sm text-text-secondary group/detail">
                                <span className="text-accent-blue font-bold opacity-60 group-hover/detail:opacity-100 transition-opacity mt-0.5">›</span>
                                <span className="leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Education Section - New Full-Width Design */}
          <motion.div
            variants={fadeInUp}
            className="mt-32 pt-24"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h3 className="section-title text-left mb-4 flex items-center gap-4">
                  <GraduationCap size={40} className="text-accent-blue" />
                  Academic Foundation
                </h3>
                <p className="text-text-secondary text-lg max-w-2xl opacity-80">
                  Combining theoretical knowledge with hands-on technical projects during my undergraduate journey.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card !p-8 border-l-4 border-l-accent-blue flex flex-col md:flex-row gap-8 items-start group"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                >
                  <div className="flex-shrink-0 flex flex-col gap-3 min-w-[140px]">
                    <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest bg-accent-glow px-3 py-1 rounded w-fit border border-accent-blue/20">
                      {edu.date}
                    </span>
                    <span className="text-sm font-bold text-white bg-glass-bg border border-glass-border px-3 py-1 rounded w-fit shadow-sm">
                      {edu.gpa}
                    </span>
                  </div>
                  <div className="flex-grow w-full">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 leading-tight group-hover:text-accent-blue transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-accent-blue italic mb-6 opacity-90">{edu.degree}</p>
                    {edu.details && (
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-glass-border">
                        {edu.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex gap-3 text-xs text-text-secondary group/edu items-start">
                            <span className="text-accent-blue font-bold opacity-30 group-hover/edu:opacity-100 transition-opacity mt-1">›</span>
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
