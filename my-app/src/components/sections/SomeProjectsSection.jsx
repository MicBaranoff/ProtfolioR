import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Splitting from 'splitting';

import Icon from 'components/ui/Icon';

import ProjectCard from 'components/cards/ProjectCard';

import projects from 'configs/projects';

const { REACT_APP_BASE_PATH } = process.env;

function SomeProjectsSection({ className, innerRef }) {
  const title = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: desc.current, by: 'lines' });
  }, []);

  return (
    <div
      ref={innerRef}
      data-scroll
      data-scroll-section
      data-scroll-offset="20%"
      className={`some-projects-section ${className}`}
    >
      <div className="container">
        <div className="some-projects-section__head">
          <div className="some-projects-section__head-text">
            <h3
              ref={title}
              className="some-projects-section__font some-projects-section__font--title"
              data-scroll
              data-scroll-speed="2"
              data-scroll-delay="0.05"
              data-scroll-offset="10%"
            >
              Projects
            </h3>
            <p
              ref={desc}
              className="some-projects-section__font some-projects-section__font--text"
              data-scroll
              data-scroll-speed="1.4"
              data-scroll-delay="0.05"
              data-scroll-offset="10%"
            >
              As a seasoned creator of contemporary,
              user-friendly web designs and digital solutions,
              I aim to assist you in constructing the brand of your fantasies.
            </p>
          </div>
          <div className="some-projects-section__head-button">
            <NavLink
              className="some-projects-section__link"
              to={`${REACT_APP_BASE_PATH}projects`}
            >
              <span className="some-projects-section__font some-projects-section__font--link">
                More projects
              </span>
              <Icon className="some-projects-section__link-ico" name="arrow-next" />
            </NavLink>
          </div>
        </div>

        <div className="some-projects-section__grid">
          {
            projects.slice(0, 2).map((project) => (
              <ProjectCard
                className="some-projects-section__project"
                key={project.id}
                id={project.id}
                title={project.title}
                text={project.text}
                link={`${REACT_APP_BASE_PATH}projects${project.link}`}
                image={project?.images?.[0]}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SomeProjectsSection;
