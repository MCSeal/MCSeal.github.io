import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section section" id="about" aria-labelledby="about-title">
    <div className="section-inner about-grid">
      <div>
        <p className="section-kicker">About</p>
        <h2 className="section-heading" id="about-title">A developer who treats accessibility as a requirement, not an afterthought.</h2>
      </div>
      <div className="about-card card">
        <p>
          I've spent the past three years building and maintaining public-facing web
          properties for the Government of Canada, where every page has to meet WCAG
          and GOC accessibility standards before it ships. That work shaped how I
          approach everything else: clean markup, real semantics, and interfaces that
          hold up for users who rely on a keyboard or a screen reader, not just ones
          who look good in a screenshot.
        </p>
        <p>
          Day to day I work in JavaScript, Java, React, Node, and Drupal, with a science
          background that taught me to test assumptions and check the details that
          actually break things in production. I'm interested in teams that take
          accessibility and maintainability seriously and want software that's built
          to last past launch day.
        </p>
      </div>
    </div>
  </section>
);

export default About;
