import Button from 'components/ui/Button';

import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

function MainSection({ className = '' }) {
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
          <h1 ref={title} className="main-section__font main-section__font--title">
            Front-end
            <br />
            Developer
          </h1>
          <div className="main-section__button">
            <Button
              className=""
              text="SCROLL DOWN"
              icon="arrow-down"
            />
          </div>
        </div>
        <div className="main-section__footer">
          <div className="main-section__talk">
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
          <div className="main-section__text">
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
