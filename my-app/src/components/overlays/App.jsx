import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AnimatedRoutes from 'components/overlays/AnimatedRoutes';
import CircleScene from 'components/blocks/CircleScene';
import Loader from 'components/blocks/Loader';

import { useEffect, useState } from 'react';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

import isMobile from 'ismobilejs';

const isMobileDevice = isMobile(window.navigator).phone;
const isTabletDevice = isMobile(window.navigator).tablet;

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
      <div className={`app ${isMobileDevice ? 'is-mobile' : ''} ${isTabletDevice ? 'is-tablet' : ''}`}>
        <CircleScene onLoad={onLoad} />

        {
                !loading ? (
                  <>
                    <Header />
                    <AnimatedRoutes />
                    <Footer />
                  </>
                ) : (
                  <Loader />
                )
            }

      </div>
    );
}

export default App;
