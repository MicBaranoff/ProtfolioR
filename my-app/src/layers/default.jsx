import { memo, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

function DefaultLayer({ children, className = '' }) {
    const location = useLocation();
    const slasher = useRef(null);

    useEffect(() => {
        gsap.to(slasher.current, {
            translateX: '-200vw',
            duration: 1.5,
        });
    }, [location.pathname]);

    return (
      <div>
        <div ref={slasher} className="default-layout__slasher" />
        <div className={`default-layout ${className}`}>
          <div className="default-layout__wrapper">
            {children}
          </div>
        </div>
      </div>
    );
}

export default memo(DefaultLayer);
