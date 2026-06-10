import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className='hero section' id='home' aria-labelledby='hero-title'>
    <div className='hero-inner section-inner'>
      <div className='hero-copy'>
        <p className='section-kicker'>Web developer portfolio</p>
        <h1 id='hero-title'>
          I build practical web apps with clean interfaces and accessible front
          ends.
        </h1>
        <p className='hero-lede'>
          Hi, I’m Mathew Seal. I’m a web developer with a science background and
          hands-on experience building React, JavaScript, Node, and Java-based
          applications. I care about interfaces that are clear, maintainable,
          and usable for real people.
        </p>
        <div className='button-row hero-actions' aria-label='Portfolio actions'>
          <a className='button' href='#projects'>
            View projects
          </a>
          <a className='button button--secondary' href='#contact'>
            Contact me
          </a>
          <a
            className='button button--secondary'
            href='https://github.com/MCSeal'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
      <aside className='hero-card card' aria-label='Portfolio highlights'>
        <img
          className='hero-avatar'
          src='https://pbs.twimg.com/profile_images/1293597689578430470/aCWj91ia_400x400.jpg'
          alt='Mathew Seal'
        />
        <div>
          <h2>Open to web developer roles</h2>
          <p>
            Focused on front-end development, full-stack web development,
            accessibility-focused projects, and practical programming roles that
            use modern web technologies.
          </p>
        </div>
        <ul className='hero-tags' aria-label='Key strengths'>
          <li>React</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Node</li>
          <li>WCAG</li>
        </ul>
      </aside>
    </div>
  </section>
);

export default Hero;
