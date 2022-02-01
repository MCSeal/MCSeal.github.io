import React from 'react';
import style from './Header.css';

const Header = () => (
    <header class="main-header">      
        <ul aria-hidden="false">
        <li class="header-nav"><a>Mathew Seal</a></li>
        <li class="header-nav"><a>About</a></li>
        <li class="header-nav"><a>Projects</a></li>
        <li class="header-nav"><a>Contact</a></li>
        <a class="bio-link"  href="https://github.com/MCSeal" target="_blank"><i class="fab fa-github fa-fw"></i></a>
    
        </ul>
    </header>
);

export default Header;