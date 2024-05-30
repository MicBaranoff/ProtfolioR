import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import AnimatedRoutes from 'components/overlays/AnimatedRoutes';
import CircleScene from 'components/blocks/CircleScene';
import Loader from 'components/blocks/Loader';

import { useState } from 'react';

import isMobile from 'ismobilejs';

const isMobileDevice = isMobile(window.navigator).phone;
const isTabletDevice = isMobile(window.navigator).tablet;

function App() {
    const [loading, setLoading] = useState(true);

    const onLoad = () => setLoading(false);

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
