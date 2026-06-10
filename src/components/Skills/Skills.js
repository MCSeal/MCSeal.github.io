import React from 'react';
import './Skills.css';
import { skillGroups } from '../../data/skills';

const Skills = () => (
  <section className="skills-section section" id="skills" aria-labelledby="skills-title">
    <div className="section-inner">
      <p className="section-kicker">Skills</p>
      <h2 className="section-heading" id="skills-title">Technical skills</h2>
      <p className="section-lede">
        I’m strongest in front-end web development, with enough backend and coursework experience to work across a small application and communicate well with a team.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-card card" key={group.title} aria-labelledby={`skill-${group.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <h3 id={`skill-${group.title.replace(/\s+/g, '-').toLowerCase()}`}>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
