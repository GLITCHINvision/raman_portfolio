import React from 'react';

const Footer = ({ recruiterMode }) => {
  return (
    <footer className="backdrop-blur-xl border-bottom py-6 bg-bg-dark mt-auto">
      <div className="container text-center py-4">
        <p className="text-text-secondary font-mono uppercase tracking-widest text-sm">
          &copy; {new Date().getFullYear()} Raman Sharma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
