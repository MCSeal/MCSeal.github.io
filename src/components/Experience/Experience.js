import React from 'react';
import './Experience.css';
import experienceList from '../../data/experienceList';

// Keeping this one short on purpose - recruiters skim, they don't read
// a wall of bullet points for every job. Three roles, the highlights
// that actually matter, done.
const Experience = () => (
  <section className="experience-section section" id="experience" aria-labelledby="experience-title">
    <div className="section-inner">
      <p className="section-kicker">Experience</p>
      <h2 className="section-heading" id="experience-title">Web development in government</h2>
      <p className="section-lede">
        Three years building and maintaining public-facing federal web properties, where
        WCAG and GOC accessibility standards aren't optional - they're the job.
      </p>

      <ol className="experience-list">
        {experienceList.map((job) => (
          <li className="experience-card card" key={`${job.role}-${job.org}`}>
            <div className="experience-head">
              <div>
                <h3>{job.role}</h3>
                <p className="experience-org">{job.org}</p>
              </div>
              <p className="experience-dates">{job.dates}</p>
            </div>
            <ul className="experience-points">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
