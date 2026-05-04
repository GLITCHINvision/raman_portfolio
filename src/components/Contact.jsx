import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal as TerminalIcon, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  const socialLinks = [
    { name: 'Email', value: 'ramansharma6201@gmail.com', href: 'mailto:ramansharma6201@gmail.com', icon: Mail, color: 'text-accent-primary' },
    { name: 'GitHub', value: 'GLITCHINvision', href: 'https://github.com/GLITCHINvision', icon: Github, color: 'text-white' },
    { name: 'LinkedIn', value: 'Raman Sharma', href: 'https://www.linkedin.com/in/raman-sharma-71371024a/', icon: Linkedin, color: 'text-accent-secondary' },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="container max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="smart-card bg-[#0A0B0D]/60 backdrop-blur-2xl border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.div variants={item} className="mb-8">
                <h2 className="section-title">Secure Transmission</h2>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tighter">Initiate Sync.</h3>
                <p className="text-secondary leading-relaxed">
                  System open for strategic inquiries, collaboration requests, or architectural discussions. 
                  Direct neural link available via encrypted channels.
                </p>
              </motion.div>

              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={item}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-accent-primary/30 transition-all no-underline group"
                  >
                    <div className={`p-3 rounded-lg bg-black/40 ${link.color} group-hover:scale-110 transition-transform`}>
                      <link.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest">{link.name}</span>
                      <span className="block text-sm font-bold text-white group-hover:text-accent-primary transition-colors">{link.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div variants={item} className="relative">
              <div className="h-full rounded-2xl border border-white/5 bg-black/40 p-8 font-mono text-xs text-secondary leading-relaxed overflow-hidden">
                <div className="flex items-center gap-2 mb-6 text-accent-primary">
                  <TerminalIcon size={14} />
                  <span>COMMUNICATION_PROTOCOL.v4</span>
                </div>
                <div className="space-y-4">
                  <div className="text-white opacity-40">// SYSTEM_LOG: READY</div>
                  <div className="flex gap-3">
                    <span className="text-accent-primary">root@dtu:~$</span>
                    <span className="text-white">ping -c 4 connection_ready</span>
                  </div>
                  <div className="text-secondary">
                    PING connection_ready (127.0.0.1) 56(84) bytes of data.<br/>
                    64 bytes from localhost: icmp_seq=1 ttl=64 time=0.04 ms<br/>
                    64 bytes from localhost: icmp_seq=2 ttl=64 time=0.05 ms<br/>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <button className="flex items-center gap-2 text-accent-primary font-bold uppercase tracking-widest hover:gap-4 transition-all group">
                      Open Direct Link <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-px bg-accent-primary/20 animate-scan"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
