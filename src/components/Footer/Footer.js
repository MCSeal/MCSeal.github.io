import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Mathew Seal</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/mathewseal/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/MCSeal" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
