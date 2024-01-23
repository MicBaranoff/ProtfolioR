import Button from 'components/ui/Button';

import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

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
            data-scroll-speed="1"
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
            <a
              ref={email}
              className="main-section__font main-section__font--text"
              href="mailto:senior.mishel@gmail.com"
            >
              senior.mishel@gmail.com
            </a>
          </div>
          <div
            data-scroll
            data-scroll-speed="1.2"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
            className="main-section__text"
          >
            <p ref={desc} className="main-section__font main-section__font--text">
              Hello, I’m Michael, an online product designer focusing on brand identity,
              advertising, and no-code instruments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
