import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import WelcomeModal from './components/WelcomeModal';
import AIAgent from './components/AIAgent';
import IQGame from './components/IQGame';
import { AnimatePresence, motion } from 'framer-motion';

// Main App Component
function App() {
  const [isSynced, setIsSynced] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(() => {
    return localStorage.getItem('recruiterMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('recruiterMode', recruiterMode);
  }, [recruiterMode]);

  const toggleMode = () => setRecruiterMode(!recruiterMode);

  return (
    <Router>
      <div className={`min-h-screen relative transition-colors duration-1000 ${isSynced ? 'bg-bg-card' : 'bg-bg-dark'}`}>
        <div className="fixed inset-0 pointer-events-none z-0 data-grid opacity-20"></div>
        
        {/* Intelligence Glow */}
        <AnimatePresence>
          {isSynced && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.05)_0%,transparent_70%)]"
            />
          )}
        </AnimatePresence>

        <WelcomeModal setRecruiterMode={setRecruiterMode} />
        <Navbar isSynced={isSynced} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero isSynced={isSynced} />
              <About />
              <Philosophy />
              <Work />
              
              {/* Intelligence Section */}
              <section id="iq-test" className="py-32 px-4 relative">
                <div className="container max-w-4xl text-center mb-16">
                  <h2 className="section-title justify-center">Cognitive Verification</h2>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">Are you compatible with this system?</h3>
                  <p className="text-secondary max-w-xl mx-auto">
                    Solve the neural pattern to synchronize with the core intelligence and unlock full system performance.
                  </p>
                </div>
                <IQGame onComplete={() => setIsSynced(true)} />
              </section>

              <Contact />
            </main>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
        <AIAgent />
      </div>
    </Router>
  );
}

export default App;
