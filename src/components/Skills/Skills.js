import React from 'react';
import { CheckCircleIcon, ChipIcon } from '@heroicons/react/solid';
import style from './Skills.css';
import { skillList } from '../../data/skills';

const Skills = () => (
  <div class="skills-contact" id="skills">
    <div class="skills">
      <div class="section-inner__skills">
        <h2>Technical Skills & Technologies</h2>
        <ul>
          <br />
          <div class="skill-list">
            {skillList.map((skill) => (
              <div key={skill} class="skill-item">
                <CheckCircleIcon class="checkmark" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
