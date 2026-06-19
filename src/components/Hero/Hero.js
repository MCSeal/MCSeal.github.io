import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className='hero section' id='home' aria-labelledby='hero-title'>
    <div className='hero-inner section-inner'>
      <div className='hero-copy'>
        <p className='section-kicker'>Web developer</p>
        <h1 id='hero-title'>
          I build accessible, standards-compliant web applications.
        </h1>
        <p className='hero-lede'>
          Hi, I’m Mathew Seal. I’m a web developer with three years building
          and maintaining federal web properties for the Government of Canada,
          working in JavaScript, Java, Drupal, and React under WCAG and GOC
          accessibility standards. I care about interfaces that hold up under
          real compliance requirements, not just ones that look clean in a demo.
        </p>
        <div className='button-row hero-actions' aria-label='Portfolio actions'>
          <a className='button' href='#experience'>
            View experience
          </a>
          <a className='button button--secondary' href='#projects'>
            View projects
          </a>
          <a className='button button--secondary' href='#contact'>
            Contact me
          </a>
        </div>
      </div>
      <aside className='hero-card card' aria-label='Portfolio highlights'>
        {/* TODO(Mathew): drop your own photo in src/data/images and point
            this at it. Using a plain initials badge for now instead of a
            broken stock URL - don't want a placeholder pretending to be
            a real photo. */}
        <div className='hero-avatar' role='img' aria-label='Mathew Seal'>MS</div>
        <div>
          <h2>Open to web developer roles</h2>
          <p>
            Three years of hands-on experience building accessible, standards-compliant
            web applications for federal government clients, plus full-stack project
            work in React, Node, and Java.
          </p>
        </div>
        <ul className='hero-tags' aria-label='Key strengths'>
          <li>JavaScript</li>
          <li>Java</li>
          <li>WCAG</li>
          <li>React</li>
          <li>Drupal</li>
        </ul>
      </aside>
    </div>
  </section>
);

export default Hero;
