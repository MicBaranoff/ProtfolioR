import Button from 'components/ui/Button';
import Link from 'components/ui/Link';

import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

import { textStagGsap, cliPathGsap } from 'tools/gsapTemplates';

function MainSection({
                         className = '', clickHandler = () => {
    },
                     }) {
    const title = useRef(null);
    const desc = useRef(null);
    const email = useRef(null);
    const lets = useRef(null);

    useEffect(() => {
        Splitting({ target: title.current });
        Splitting({ target: email.current });
        Splitting({ target: desc.current, by: 'lines' });
        Splitting({ target: lets.current });

        textStagGsap('.main-section__title');
        textStagGsap('.main-section__email');
        textStagGsap('.main-section__talk-title');
        cliPathGsap('.main-section__text');
    }, []);

    return (
      <div
        className={`main-section ${className}`}
      >
        <div className="container">
          <div className="main-section__title">
            <h1
              ref={title}
              className="main-section__font main-section__font--title"
            >
              Front-end
              <br />
              Developer
            </h1>
            <div
              className="main-section__button"
            >
              <Button
                text="SCROLL DOWN"
                icon="arrow-down"
                onClick={clickHandler}
              />
            </div>
          </div>
          <div className="main-section__footer">
            <div
              className="main-section__talk"
            >
              <p
                ref={lets}
                className="main-section__font main-section__font--subtitle main-section__talk-title"
              >
                Let’s Talk
              </p>

              <Link
                cRef={email}
                to="/"
                className="main-section__font main-section__font--text main-section__email"
              >
                senior.mishel@gmail.com
              </Link>
            </div>
            <div
              className="main-section__text"
            >
              <p className="main-section__font main-section__font--text">

                Hello, I`m Michael, a frontend developer.
                <br />
                I craft engaging and responsive
                web projects using the latest technologies and best practices.
                Ready to bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainSection;
