import React from 'react';
import { CheckCircleIcon, ChipIcon } from "@heroicons/react/solid";
import style from './Skills.css';
import { skillList } from '../../data/skills'

const Skills = () => (
    <div class="skills-contact">
      <div class="skills">
        <div class="section-inner">
          <h2>Technical Skills & Technologies</h2>
          <ul>
            <br />
            <div class="skill-list">
            
              {skillList.map((skill) => (
                
                <div key={skill} class="skill-item">
                  <CheckCircleIcon class="checkmark" />
                  <span>

                    {skill}
                  </span>  
                </div>
              ))}
            </div>
          </ul>
          
        </div>
      </div>
      <div class="contact">
          
          <div class="section-inner">
            <h2> Contact</h2>
            <br />Mathew Seal
            <br />MathewCSeal@gmail.com
            <br /> <a href="https://github.com/MCSeal" target="_blank">Github</a>
          </div>
        </div>
    </div>
);

export default Skills;