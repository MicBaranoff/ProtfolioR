import { NavLink } from 'react-router-dom';

import generateRandomGradient from 'tools/helpers';

import exampleImage from 'assets/images/projects/example.png';

function ProjectCard({
  image = exampleImage, title = 'test', text = 'test', link = '/',
}) {
  const randomBackground = generateRandomGradient();

  return (
    <div className="project-card">
      <NavLink to={link} className="project-card__link" />
      <div style={{ background: randomBackground }} className="project-card__banner">
        <img src={image} alt="banner" className="project-card__banner-image" />
      </div>
      <div className="project-card__text">
        <h4 className="project-card__font project-card__font--title">{title}</h4>
        <p className="project-card__font project-card__font--text">{text}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
