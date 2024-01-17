import { useEffect, useRef, useState } from 'react';

import { getRandomInt } from 'tools/helpers';

import Splitting from 'splitting';

function Achieve({ className = '', text, image }) {
  const [RandomInt, setRandomInt] = useState(null);

  const title = useRef(null);

  useEffect(() => {
    setRandomInt(getRandomInt(-30, 30));

    Splitting({ target: title.current });
  }, []);

  return (
    <div data-scroll data-scroll-offset="30%" className={`achieve ${className}`}>
      <div className="container achieve__wrapper">
        <div className="achieve__title">
          <span ref={title} className="achieve__font achieve__font--title">
            {text}
          </span>
        </div>
      </div>
      <div className="achieve__img" style={{ rotate: `${RandomInt}deg` }}>
        <img src={image} alt="img" />
      </div>
    </div>
  );
}

export default Achieve;
