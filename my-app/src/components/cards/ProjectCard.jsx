import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { generateRandomGradient } from 'tools/helpers';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

import exampleImage from 'assets/images/projects/example.png';

function ProjectCard({
  id = null,
  image = exampleImage,
  title = 'test',
  text = 'test',
  link = '/',
  className,
}) {
  const [randomBackground] = useState(generateRandomGradient());
  const [scrollProgress, setScrollProgress] = useState(null);

  const { scroll } = useLocomotiveScroll();

  scroll?.on('scroll', (args) => {
    setScrollProgress(args?.currentElements?.[id]?.progress);
    // console.log(args.currentElements[id]);
  });

  return (
    <div
      data-scroll
      data-scroll-id={id}
      data-scroll-offset="-100%"
      className={`project-card ${className}`}
    >
      {scrollProgress}
      <NavLink to={link} className="project-card__link" />
      <div style={{ background: randomBackground }} className="project-card__banner">
        <img
          data-scroll=""
          data-scroll-speed="1"
          data-scroll-position="center"
          data-scroll-delay="0.05"
          data-scroll-offset="10%"
          src={image}
          alt="banner"
          className="project-card__banner-image"
        />
      </div>
      <div className="project-card__text">
        <h4 className="project-card__font project-card__font--title">{title}</h4>
        <p className="project-card__font project-card__font--text">{text}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
