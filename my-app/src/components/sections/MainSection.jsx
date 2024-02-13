import Button from 'components/ui/Button';

import { useEffect, useRef } from 'react';

import Splitting from 'splitting';
import Link from '../ui/Link';

function MainSection({ className = '', clickHandler = () => {} }) {
  const title = useRef(null);
  const desc = useRef(null);
  const email = useRef(null);
  const lets = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: email.current });
    Splitting({ target: desc.current, by: 'lines' });
    Splitting({ target: lets.current, by: 'lines' });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      className={`main-section ${className}`}
    >
      <div className="container">
        <div className="main-section__title">
          <h1
            ref={title}
            className="main-section__font main-section__font--title"
            data-scroll
            data-scroll-speed="3"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
          >
            Front-end
            <br />
            Developer
          </h1>
          <div
            data-scroll
            data-scroll-speed="2"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
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
            data-scroll
            data-scroll-speed="2"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
            className="main-section__talk"
          >
            <p ref={lets} className="main-section__font main-section__font--subtitle">
              Let’s Talk
            </p>

            <Link
              cRef={email}
              to="/"
              className="main-section__font main-section__font--text"
            >
              senior.mishel@gmail.com
            </Link>
          </div>
          <div
            data-scroll
            data-scroll-speed="1.5"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
            className="main-section__text"
          >
            <p ref={desc} className="main-section__font main-section__font--text">

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
