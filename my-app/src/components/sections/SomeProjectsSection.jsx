import { NavLink } from 'react-router-dom';

import Icon from 'components/ui/Icon';
import ProjectCard from 'components/cards/ProjectCard';

function SomeProjectsSection({ className }) {
  return (
    <div className={`some-projects-section ${className}`}>
      <div className="container">
        <div className="some-projects-section__head">
          <div className="some-projects-section__head-text">
            <h3 className="some-projects-section__font some-projects-section__font--title">
              Projects
            </h3>
            <p className="some-projects-section__font some-projects-section__font--text">
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default SomeProjectsSection;
