import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Locomotive({ children }) {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
      }}
      onLocationChange={(scroll) => {
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }}
      location={pathname}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        data-scroll-container
        ref={containerRef}
      >
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
}

export default Locomotive;
