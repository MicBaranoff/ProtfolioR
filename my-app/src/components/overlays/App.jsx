import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AnimatedRoutes from 'components/overlays/AnimatedRoutes';
import CircleScene from 'components/blocks/CircleScene';

import { useEffect, useState } from 'react';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

function App() {
  const [loading, setLoading] = useState(true);
  const { scroll } = useLocomotiveScroll();

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!scroll) return;

    new ResizeObserver(() => {
      scroll?.update();
    }).observe(document.querySelector('[data-scroll-container]'));
  }, [scroll]);

  return (
    <div className="app">
      <CircleScene onLoad={onLoad} />

      {
            !loading ? (
              <>
                <Header />
                <AnimatedRoutes />
                <Footer />
              </>
            ) : (
              <div>loading</div>
            )
        }

    </div>
  );
}

export default App;
