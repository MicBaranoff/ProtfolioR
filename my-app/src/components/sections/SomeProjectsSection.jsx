import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Splitting from 'splitting';

import Icon from 'components/ui/Icon';

import ProjectCard from 'components/cards/ProjectCard';

import projects from 'configs/projects';

function SomeProjectsSection({ className }) {
  const title = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: desc.current, by: 'lines' });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-offset="20%"
      className={`some-projects-section ${className}`}
    >
      <div className="container">
        <div className="some-projects-section__head">
          <div className="some-projects-section__head-text">
            <h3 ref={title} className="some-projects-section__font some-projects-section__font--title">
              Projects
            </h3>
            <p ref={desc} className="some-projects-section__font some-projects-section__font--text">
              As a seasoned creator of contemporary,
              user-friendly web designs and digital solutions,
              I aim to assist you in constructing the brand of your fantasies.
            </p>
          </div>
          <div className="some-projects-section__head-button">
            <NavLink className="some-projects-section__link" to="/">
              <span className="some-projects-section__font some-projects-section__font--link">More</span>
              <Icon className="some-projects-section__link-ico" name="arrow-next" />
            </NavLink>
          </div>
        </div>

        <div className="some-projects-section__grid">
          {
            projects.slice(0, 4).map((project) => (
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
  );
}

export default SomeProjectsSection;
