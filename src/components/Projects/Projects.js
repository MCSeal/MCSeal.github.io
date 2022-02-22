import React, { useState } from 'react';
import style from './Projects.css';
import projectsList from '../../data/projectsList.js';
import { animated, useSprings } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);

  const projs = useSprings(
    projectsList.length,
    projectsList.map((item, i) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1.0,
      transform: 'translateY(0px)',
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? '100%' : '0%',
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: '0%',
      },
    }))
  );

  return (
    <div class="title-box" id="projects">
      <h2>Projects</h2>
      <div class="projects-box">
        {projs.map(
          (
            { opacity, transform, overlayOpacity, textOpacity, textHeight },
            i
          ) => (
            <animated.div
              class="projects-animated"
              onClick={() => {
                setIndex(i);
                setIsDelayed(false);
              }}
              key={i}
            >
              <animated.div
                class="projects-animated projects-animated__box"
                style={{
                  backgroundImage: `url(${projectsList[i].picture})`,
                  opacity,
                  transform,
                }}
              >
                <animated.div
                  class="TitleWrapper"
                  style={{ opacity: overlayOpacity }}
                >
                  <h2>{projectsList[i].title}</h2>
                </animated.div>
              </animated.div>
              <animated.div class="text-wrapper" style={{ height: textHeight }}>
                <animated.div
                  class="projects-animated__box"
                  style={{ opacity: textOpacity }}
                >
                  <animated.div
                    class="projects-title__parent"
                    fontSize={3}
                    fontWeight={2}
                  >
                    <a href={projectsList[i].link} target="_blank">
                      <h2>{projectsList[i].title}</h2>
                    </a>
                    <a href={projectsList[i].github} target="_blank">
                      <FontAwesomeIcon
                        class="projects-title__child"
                        icon={faGithub}
                      />
                    </a>
                  </animated.div>
                  {projectsList[i].description}
                </animated.div>
              </animated.div>
            </animated.div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
