import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

import TextGoal from 'components/blocks/TextGoal';

import { TextStagGsapTL } from 'tools/gsapTemplates';

import goalsContent from 'configs/goalsContent';

function GoalsSection({ className }) {
    const title = useRef(null);
    const subtitle = useRef(null);
    const text = useRef(null);

    const animationTextStag = new TextStagGsapTL('.goals-section__title', {
        stagger: 0.15,
        duration: 2,
    });

    useEffect(() => {
        Splitting({ target: title.current });
        Splitting({ target: subtitle.current });
        Splitting({ target: text.current, by: 'lines' });

        animationTextStag.init();

        return () => {
            animationTextStag.kill();
        };
    }, []);

    return (
      <div
        className={`goals-section ${className}`}
      >
        <div className="container">
          <div className="goals-section__title">
            <h2
              ref={title}
              className="goals-section__font goals-section__font--title"
            >
              Expertise
            </h2>
          </div>
          <div className="goals-section__grid">
            {
                        goalsContent.map((item) => (
                          <TextGoal key={item.id} data={item} />
                        ))
                    }
          </div>
        </div>
      </div>
    );
}

export default GoalsSection;
