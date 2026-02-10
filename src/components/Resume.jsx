import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../data';
import { Mail, Phone, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Calendar, Award, Code, Printer, Download } from 'lucide-react';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.155 9.155a1.359 1.359 0 0 0 0 1.919l1.113 1.113a1.359 1.359 0 0 0 1.919 0L14.555 4.45a1.359 1.359 0 0 0 0-1.919l-1.112-1.112A1.374 1.374 0 0 0 13.483 0zm-1.457 7.05a1.359 1.359 0 0 0-1.919 0L.414 16.743a1.359 1.359 0 0 0 0 1.919l1.112 1.112a1.359 1.359 0 0 0 1.919 0L13.14 10.081a1.359 1.359 0 0 0 0-1.919l-1.113-1.113a1.359 1.359 0 0 0-.96-.4zM15 14a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-5z" />
  </svg>
);

const Resume = ({ recruiterMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handlePrint = () => {
    window.print();
  };

  if (recruiterMode) {
    return (
      <section id="resume" className="section px-4 pt-4rem bg-white text-black min-h-screen">
        <div className="container max-w-screen-md mx-auto print:p-0">
          <div className="flex justify-end mb-8 no-print">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-text-primary text-bg-dark rounded font-medium transition-all hover:bg-opacity-90"
            >
              <Printer size={18} /> Print / Download PDF
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-black">{PROFILE.name}</h1>
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-gray-600 text-sm font-medium">
              <a href={`mailto:${PROFILE.socials.email}`} className="hover:text-black transition-colors">{PROFILE.socials.email}</a>
              <span>{PROFILE.socials.phone}</span>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="uppercase tracking-widest mb-4 font-bold text-sm border-b border-black pb-1">Professional Summary</h2>
            <p className="text-gray-800 leading-relaxed text-sm">
              Software Development Engineer with strong experience in building <strong>AI-driven applications, scalable backend systems, and data-intensive platforms</strong>.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="uppercase tracking-widest mb-4 font-bold text-sm border-b border-black pb-1">Work Experience</h2>
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-black font-bold text-base">{job.company}</h3>
                  <span className="text-gray-600 font-mono text-xs">{job.date}</span>
                </div>
                <div className="text-gray-700 mb-2 italic text-sm">{job.role}</div>
                <ul className="text-gray-800 ml-5 list-disc text-sm leading-relaxed">
                  {job.details && job.details.map((detail, dIdx) => (
                    <li key={dIdx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="uppercase tracking-widest mb-4 font-bold text-sm border-b border-black pb-1">Key Projects</h2>
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-black font-bold text-base">{proj.title}</h3>
                  <span className="text-gray-600 text-xs font-mono uppercase">{proj.tech}</span>
                </div>
                <ul className="text-gray-800 ml-5 list-disc text-sm leading-relaxed">
                  {proj.details && proj.details.map((detail, dIdx) => (
                    <li key={dIdx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="uppercase tracking-widest mb-4 font-bold text-sm border-b border-black pb-1">Technical Skills</h2>
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
              {SKILLS.map((skill, idx) => (
                <React.Fragment key={idx}>
                  <strong className="text-black">{skill.category}:</strong>
                  <span className="text-gray-800">{skill.skills.join(", ")}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="uppercase tracking-widest mb-4 font-bold text-sm border-b border-black pb-1">Education</h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="mb-4 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-black font-bold text-base">{edu.institution}</h3>
                  <span className="text-gray-600 font-mono text-xs">{edu.date}</span>
                </div>
                <div className="text-gray-700 text-sm">{edu.degree} | <strong>{edu.gpa}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Story Mode (RecruiterMode = false)
  return (
    <section id="resume" className="section px-4 pt-10rem">
      <div className="container max-w-screen-lg mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp} className="text-center relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-glow rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <h1 className="text-5xl md:text-7xl mb-6 logo font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="text-text-secondary text-lg md:text-xl font-mono mb-8 opacity-80 uppercase tracking-widest">
              Software Development Engineer
            </p>
            <div className="flex justify-center flex-wrap gap-6 items-center">
              {[
                { icon: <Mail size={18} />, label: "Email", href: `mailto:${PROFILE.socials.email}`, color: "hover:text-accent-blue" },
                { icon: <Github size={18} />, label: "GitHub", href: PROFILE.socials.github, color: "hover:text-white" },
                { icon: <Linkedin size={18} />, label: "LinkedIn", href: PROFILE.socials.linkedin, color: "hover:text-accent-blue" },
                { icon: <LeetCodeIcon />, label: "LeetCode", href: PROFILE.socials.leetcode, color: "hover:text-yellow-500" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-text-secondary transition-all ${link.color} group`}
                >
                  <span className="transition-transform group-hover:scale-110">{link.icon}</span>
                  <span className="text-xs uppercase font-mono tracking-widest">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-center text-2xl mb-8">Executive Summary</h2>
            <p className="text-text-secondary text-lg leading-relaxed italic opacity-90">
              "Software Development Engineer with strong experience in building <strong className="text-text-primary">AI-driven applications, scalable backend systems, and data-intensive platforms</strong>.
              I operate where software meets cognition—creating systems that don't just function, but think."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-16 items-start">
            {/* Left Column: Experience & Projects */}
            <div className="space-y-20">
              {/* Experience */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl mb-10 text-text-primary uppercase tracking-widest flex items-center gap-4">
                  <Briefcase size={24} className="text-accent-blue" />
                  Experience
                </h3>
                <div className="relative pl-0 md:pl-8 space-y-12">
                  <div className="timeline-line hidden md:block"></div>
                  {EXPERIENCE.map((job, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot hidden md:block"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <h4 className="text-lg font-bold text-text-primary">
                          {job.role} <span className="text-accent-blue mx-1">@</span> {job.company}
                        </h4>
                        <span className="text-xs font-mono text-accent-blue bg-accent-glow px-3 py-1 rounded-full w-fit">
                          {job.date}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {job.details && job.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-sm text-text-secondary leading-relaxed group">
                            <span className="text-accent-blue font-bold opacity-40 group-hover:opacity-100 transition-opacity mt-1">›</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl mb-10 text-text-primary uppercase tracking-widest flex items-center gap-4">
                  <Code size={24} className="text-accent-blue" />
                  Featured Systems
                </h3>
                <div className="grid gap-6">
                  {PROJECTS.map((proj, idx) => (
                    <div key={idx} className="glass-card group hover:border-accent-blue transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                          {proj.title}
                        </h4>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue bg-accent-glow px-2 py-1 rounded">
                          {proj.tech}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {proj.details && proj.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-xs text-text-secondary leading-relaxed">
                            <span className="text-accent-blue opacity-40">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Skills & Certs */}
            <div className="space-y-20">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl mb-10 text-text-primary uppercase tracking-widest flex items-center gap-4">
                  <Award size={24} className="text-accent-blue" />
                  Stack
                </h3>
                <div className="space-y-6">
                  {SKILLS.map((cat, idx) => (
                    <div key={idx} className="group">
                      <span className="block text-[10px] uppercase font-mono tracking-[0.2em] text-text-secondary mb-3 group-hover:text-accent-blue transition-colors">
                        {cat.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s, i) => (
                          <span key={i} className="text-xs bg-glass-bg border border-glass-border px-3 py-1.5 rounded-sm text-text-primary hover:border-accent-blue transition-colors cursor-default">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl mb-10 text-text-primary uppercase tracking-widest flex items-center gap-4">
                  <Award size={24} className="text-accent-blue" />
                  Honors & Certs
                </h3>
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="flex gap-4 items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Full Width Academic Foundation */}
          <motion.div variants={fadeInUp} className="pt-10">
            <h3 className="section-title text-left mb-12 flex items-center gap-4">
              <GraduationCap size={32} className="text-accent-blue" />
              Academic Foundation
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card !p-8 border-l-4 border-l-accent-blue flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col gap-3 min-w-[140px]">
                    <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest bg-accent-glow px-3 py-1 rounded w-fit">
                      {edu.date}
                    </span>
                    <span className="text-sm font-bold text-white bg-glass-bg border border-glass-border px-3 py-1 rounded w-fit shadow-sm">
                      {edu.gpa}
                    </span>
                  </div>
                  <div className="flex-grow w-full">
                    <h4 className="text-2xl font-bold text-text-primary mb-2 leading-tight">{edu.institution}</h4>
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
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="fixed bottom-10 right-10 no-print">
        <button
          onClick={handlePrint}
          className="bg-accent-blue text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all group relative"
          aria-label="Download PDF"
        >
          <Printer size={24} />
          <span className="absolute bottom-full right-0 mb-4 bg-glass-bg border border-glass-border px-3 py-1 rounded text-[10px] uppercase font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Print / Save as PDF
          </span>
        </button>
      </div>
    </section>
  );
};

export default Resume;
