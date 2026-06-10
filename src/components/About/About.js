import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section section" id="about" aria-labelledby="about-title">
    <div className="section-inner about-grid">
      <div>
        <p className="section-kicker">About</p>
        <h2 className="section-heading" id="about-title">A developer with a practical approach to clean, usable software.</h2>
      </div>
      <div className="about-card card">
        <p>
          I bring a mix of web development, scientific training, and analytical problem solving to the projects I work on. My background taught me to break down complex problems, test assumptions, and pay attention to the small details that affect the final result.
        </p>
        <p>
          My current focus is modern web development: React, JavaScript, accessible interfaces, Node, Java, MySQL, Git, and responsive front-end work. I’m interested in teams that value thoughtful implementation, clear communication, and software that is easy to use and maintain.
        </p>
      </div>
    </div>
  </section>
);

export default About;
