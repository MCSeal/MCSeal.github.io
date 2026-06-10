import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section section" id="about" aria-labelledby="about-title">
    <div className="section-inner about-grid">
      <div>
        <p className="section-kicker">About</p>
        <h2 className="section-heading" id="about-title">A developer who came into tech through curiosity, science, and building things.</h2>
      </div>
      <div className="about-card card">
        <p>
          I originally studied Biotechnology and Biology, then kept taking computer science and web development further because I liked the problem solving. That path has made me comfortable learning quickly, breaking problems down, and checking the details that affect real users.
        </p>
        <p>
          My recent work is focused on modern web development, accessible interfaces, React, JavaScript, Node, and full-stack coursework with Java, MySQL, JSP, servlets, Android, Linux, and Git. I’m especially interested in teams that care about usable, maintainable software.
        </p>
      </div>
    </div>
  </section>
);

export default About;
