import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    const MAX_TRANSFORM_VALUE = 100;

    useEffect(() => {
        if (!scroll) return;

        console.log(scroll);
        scroll?.on('scroll', (args) => {
            if (!args) return;

            const currentElement = args?.currentElements?.[id];
            const value = Math.ceil((currentElement?.progress || 0) * 100 * 1.5);
            const { direction } = args;

            if (value <= MAX_TRANSFORM_VALUE) setScrollProgress(value);

            if (!currentElement && direction === 'up') setScrollProgress(MAX_TRANSFORM_VALUE);
        }, { passive: false });
    }, [scroll]);

    return (
      <div
        data-scroll
        data-scroll-id={id}
        style={{
                clipPath: `circle(${0 + scrollProgress}% at 50% 50%)`,
            }}
        className={`project-card ${className}`}
      >
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
