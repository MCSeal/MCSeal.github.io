import React, { useState } from 'react';
import './Projects.css';
import projectsList from '../../data/projectsList.js';

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (projectIndex) => {
    setOpenIndex((current) => (current === projectIndex ? null : projectIndex));
  };

  return (
    <section className="projects-section section" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-heading" id="projects-title">Projects</h2>
        <p className="section-lede">
          A mix of personal web apps and experiments. Click a card to expand the details. The interaction is still an accordion, but now it also works properly with a keyboard and screen readers.
        </p>

        <div className="projects-grid">
          {projectsList.map((project, projectIndex) => {
            const isOpen = openIndex === projectIndex;
            const detailsId = `project-panel-${projectIndex}`;
            const buttonId = `project-button-${projectIndex}`;
            const imageUrl = `${process.env.PUBLIC_URL}/images/${project.picture}`;

            return (
              <article className={`project-card card ${isOpen ? 'is-open' : ''}`} key={project.title}>
                <button
                  className="project-button"
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => toggleProject(projectIndex)}
                >
                  <span
                    className="project-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    aria-hidden="true"
                  />
                  <span className="project-summary">
                    <span className="project-title">{project.title}</span>
                    <span className="project-stack">{project.stack}</span>
                  </span>
                  <span className="project-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  className="project-details"
                  id={detailsId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <p>{project.description}</p>
                  <ul className="project-points">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer" tabIndex={isOpen ? 0 : -1}>View project</a>
                    <a href={project.github} target="_blank" rel="noreferrer" tabIndex={isOpen ? 0 : -1}>View code</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
