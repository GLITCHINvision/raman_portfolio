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

// Main App Component
function App() {
  const [recruiterMode, setRecruiterMode] = useState(() => {
    return localStorage.getItem('recruiterMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('recruiterMode', recruiterMode);
    if (recruiterMode) {
      document.body.classList.add('recruiter-mode');
    } else {
      document.body.classList.remove('recruiter-mode');
    }
  }, [recruiterMode]);

  const toggleMode = () => setRecruiterMode(!recruiterMode);

  return (
    <Router>
      <div className="min-h-screen relative">
        <StarBackground />
        <div className="fixed inset-0 pointer-events-none z-0 grid-background animate-grid-move"></div>
        <WelcomeModal setRecruiterMode={setRecruiterMode} />
        <Navbar recruiterMode={recruiterMode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero recruiterMode={recruiterMode} />
              <About recruiterMode={recruiterMode} />
              <Philosophy recruiterMode={recruiterMode} />
              <Work recruiterMode={recruiterMode} />
              <Contact recruiterMode={recruiterMode} />
            </main>
          } />
          <Route path="/resume" element={<Resume recruiterMode={recruiterMode} />} />
        </Routes>
        <Footer recruiterMode={recruiterMode} />
        <AIAgent />
      </div>
    </Router>
  );
}

export default App;
