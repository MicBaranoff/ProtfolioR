import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { generateRandomGradient } from 'tools/helpers';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CliPathGsapTL } from 'tools/gsapTemplates';

import exampleImage from 'assets/images/projects/example.png';

// import { CliPathGsapTL } from 'tools/gsapTemplates';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({
                         id = null,
                         image = exampleImage,
                         title = 'test',
                         text = 'test',
                         link = '/',
                         className,
                     }) {
    const [randomBackground] = useState(generateRandomGradient());

    const uniqueId = `project-card-${id}-${Math.random()}`;
    const selector = `[data-id="${uniqueId}`;
    const animation = new CliPathGsapTL(selector);

    useEffect(() => {
        // TODO: refactor this
        setTimeout(() => {
            animation.init();
        }, 100);

        return () => {
            animation.kill();
        };
    }, []);

    return (
      <div
        data-id={uniqueId}
        className={`project-card ${className}`}
      >
        <NavLink to={link} className="project-card__link" />
        <div style={{ background: randomBackground }} className="project-card__banner">
          <img
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
