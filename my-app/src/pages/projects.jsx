import Button from 'components/ui/Button';
import ProjectCard from 'components/cards/ProjectCard';
import DefaultLayer from 'layers/default';

import projects from 'configs/projects';

import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

function Projects() {
  const title = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: desc.current, by: 'lines' });
  }, []);

  return (
    <DefaultLayer>
      <div
        data-scroll
        data-scroll-section
        className="projects-page"
      >
        <div className="container">
          <div className="projects-page__main">
            <div className="projects-page__title">
              <h2 ref={title} className="projects-page__font projects-page__font--title">Projects</h2>
            </div>

            <div className="projects-page__desc">
              <p ref={desc} className="projects-page__font projects-page__font--text">
                Here is a collection of some of my works
                <br />
                in the field of web development.
                <br />
                I create interesting and user-friendly websites and browser
                games to enhance your online experience. Look ↓
              </p>

              <div className="projects-page__main-button">
                <Button
                  className=""
                  text="SCROLL DOWN"
                  icon="arrow-down"
                />
              </div>
            </div>

          </div>

          <div className="projects-page__grid">
            {
                    projects.map((project) => (
                      <ProjectCard
                        className="some-projects-section__project"
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        text={project.text}
                        link={project.link}
                        image={project?.image}
                      />
                    ))
                }
          </div>
        </div>
      </div>
    </DefaultLayer>
  );
}

export default Projects;
