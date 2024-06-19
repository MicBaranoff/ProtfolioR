import { useEffect, useRef, useState } from 'react';

import { getRandomInt } from 'tools/helpers';

import Splitting from 'splitting';

import { TextStagGsapTL } from 'tools/gsapTemplates';

import throttle from 'lodash.throttle';

function Achieve({
                     className = '', text, image, onHover,
                 }) {
    const [randomInt] = useState(getRandomInt(-30, 30));
    const [selector] = useState(`[data-id="achieve-${randomInt}"]`);

    const title = useRef(null);

    const onHoverHandler = (img) => throttle(() => onHover(img), 100);

    useEffect(() => {
        Splitting({ target: title.current });

        // const animationClipBlock = new CliPathGsapTL(selector, {
        //     duration: 10,
        // });

        const animationTextStag = new TextStagGsapTL(selector, {
            stagger: 0.15,
            duration: 1,
        });

        // animationClipBlock.init();
        animationTextStag.init();

        return () => {
            // animationClipBlock.kill();
            animationTextStag.kill();
        };
    }, [selector]);

    return (
      <div
        onMouseMove={() => onHoverHandler(image)}
        data-id={`achieve-${randomInt}`}
        className={`achieve ${className}`}
      >
        <div className="container achieve__wrapper">
          <div data-id={`achieve-text-${randomInt}`} className="achieve__title">
            <span ref={title} className="achieve__font achieve__font--title">
              {text}
            </span>
          </div>
        </div>
      </div>
    );
}

export default Achieve;
