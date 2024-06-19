import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AnimatedRoutes from 'components/overlays/AnimatedRoutes';
import CircleScene from 'components/blocks/CircleScene';
import Loader from 'components/blocks/Loader';

import { useEffect, useState } from 'react';

import isMobile from 'ismobilejs';

const isMobileDevice = isMobile(window.navigator).phone;
const isTabletDevice = isMobile(window.navigator).tablet;

function App() {
    const [loading, setLoading] = useState(true);

    const onLoad = () => setLoading(false);

    useEffect(() => {
        switch (true) {
            case isMobileDevice:
                document.body.classList.add('is-mobile');
                break;
            case isTabletDevice:
                document.body.classList.add('is-tablet');
                break;
            default:
                document.body.classList.add('is-desktop');
        }
    });

    return (
      <div>
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
