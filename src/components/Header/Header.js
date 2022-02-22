import React from 'react';
import style from './Header.css';

const Header = () => (
  <header class="main-header">
    <ul aria-hidden="false">
      <li class="header-nav">
        <a href="#home">Mathew Seal</a>
      </li>
      <li class="header-nav">
        <a href="#about">About</a>
      </li>
      <li class="header-nav">
        <a href="#projects">Projects</a>
      </li>
      <li class="header-nav">
        <a href="#skills">Skills</a>
      </li>
      <li class="header-nav">
        <a href="#contact">Contact</a>
      </li>
      <a class="bio-link" href="https://github.com/MCSeal" target="_blank">
        <i class="fab fa-github fa-fw"></i>
      </a>
    </ul>
  </header>
);

export default Header;
