import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

import Tabs from 'components/ui/Tabs';

import aboutTabsContent from 'configs/aboutTabsContent';

function WhatIDoSection({ className = '' }) {
  const title = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: desc.current, by: 'lines' });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-offset="20%"
      className={`whatido-section ${className}`}
    >
      <div className="container whatido-section__wrapper">
        <div className="whatido-section__head">
          <div className="whatido-section__head-text">
            <h3
              ref={title}
              className="whatido-section__font whatido-section__font--title"
              data-scroll
              data-scroll-speed="2"
              data-scroll-delay="0.05"
              data-scroll-offset="10%"
            >
              What I do
            </h3>
            <p
              ref={desc}
              className="whatido-section__font whatido-section__font--text"
              data-scroll
              data-scroll-speed="1.4"
              data-scroll-delay="0.05"
              data-scroll-offset="10%"
            >
              I focus on all things digital and web related.
              With each of my services, my goal is to deliver
              an experience that serves a great purpose.
            </p>
          </div>
        </div>
        <div className="whatido-section__content">
          <Tabs data={aboutTabsContent} />
        </div>
      </div>
    </div>
  );
}

export default WhatIDoSection;
