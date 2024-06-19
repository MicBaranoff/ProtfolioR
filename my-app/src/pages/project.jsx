import DefaultLayer from 'layers/default';
import Button from 'components/ui/Button';
import { NavLink, useParams } from 'react-router-dom';
import Icon from 'components/ui/Icon';

import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { textStagGsap, cliPathGsap } from 'tools/gsapTemplates';

import projects from 'configs/projects';

const { REACT_APP_BASE_PATH } = process.env;

function Project() {
    const { projectId } = useParams();

    const title = useRef(null);
    const desc = useRef(null);

    const projectData = projects.find(
        (item) => item.id === projectId,
    );

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

    useEffect(() => {
        Splitting({ target: title.current });

        textStagGsap('.project-page__title');
        cliPathGsap('.project-page__desc');
    }, []);

    return (
      <DefaultLayer>
        <div
          className="project-page"
        >
          <div className="container">
            <div className="project-page__title">
              <NavLink
                to={`${REACT_APP_BASE_PATH}projects`}
                className="project-page__back"
              >
                <Icon className="project-page__back-ico" name="arrow-next" />
              </NavLink>
              <h2 ref={title} className="project-page__font project-page__font--title">
                {projectData?.title}
              </h2>
            </div>

            <div className="project-page__desc">
              <p ref={desc} className="project-page__font project-page__font--text">
                {projectData?.text}
              </p>
            </div>

            <div className="project-page__gallery">
              {
                            projectData?.images.map((img) => (
                              <img
                                data-scroll=""
                                data-scroll-speed="2"
                                data-scroll-position="center"
                                data-scroll-delay="0.05"
                                data-scroll-offset="-10%"
                                key={`img${Math.random()}`}
                                className="project-page__image"
                                src={img}
                                alt=""
                              />
                            ))
                        }
            </div>

            <div className="project-page__button">
              <Button
                className=""
                text="GO TO WEBSITE"
                icon="arrow-next-top"
                onClick={() => goToLink(projectData?.url)}
              />
            </div>
          </div>
        </div>
      </DefaultLayer>
    );
}

export default Project;
