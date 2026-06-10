import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Mathew Seal</p>
      <a href="https://github.com/MCSeal" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
