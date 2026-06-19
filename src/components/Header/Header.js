import React from 'react';
import './Header.css';

const Header = () => (
  <header className="site-header">
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="site-logo" href="#home" aria-label="Mathew Seal homepage">
        <span className="site-logo-mark" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" />
        </span>
        <span>Mathew Seal</span>
      </a>
      <ul className="nav-links">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="header-linkedin" href="https://www.linkedin.com/in/mathewseal/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </nav>
  </header>
);

export default Header;
