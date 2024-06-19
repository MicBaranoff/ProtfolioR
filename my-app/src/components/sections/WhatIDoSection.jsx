import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

import Tabs from 'components/ui/Tabs';

import aboutTabsContent from 'configs/aboutTabsContent';

import { CliPathGsapTL, TextStagGsapTL } from 'tools/gsapTemplates';

function WhatIDoSection({ className = '' }) {
    const title = useRef(null);
    const desc = useRef(null);

    const animationClipText = new CliPathGsapTL('.whatido-section__content', {
        duration: 4,
    });
    const animationTextStag = new TextStagGsapTL('.whatido-section__head-text', {
        stagger: 0.15,
        duration: 2,
    });

    useEffect(() => {
        Splitting({ target: title.current });
        Splitting({ target: desc.current });

        animationClipText.init();
        animationTextStag.init();

        return () => {
            animationClipText.kill();
            animationTextStag.kill();
        };
    }, []);

    return (
      <div
        className={`whatido-section ${className}`}
      >
        <div className="container whatido-section__wrapper">
          <div className="whatido-section__head">
            <div className="whatido-section__head-text">
              <h3
                ref={title}
                className="whatido-section__font whatido-section__font--title"
              >
                What I do
              </h3>
              <p
                ref={desc}
                className="whatido-section__font whatido-section__font--text"
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
