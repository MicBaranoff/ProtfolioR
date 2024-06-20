import Lenis from 'lenis';
import { useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 3,
});

const lenisContext = createContext(lenis);

export const useLenis = () => useContext(lenisContext);

function LenisScroll({ children }) {
    const location = useLocation();

    const refreshScroll = (kill = true) => {
        lenis.scrollTo(0, {
            immediate: true,
            force: true,
        });

        ScrollTrigger.refresh();

        if (kill) ScrollTrigger.killAll();
    };

    useEffect(() => {
        lenis.on('scroll', ScrollTrigger.update);

        window.addEventListener('resize', () => {
            ScrollTrigger.update();

            refreshScroll(false);
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }, [lenis]);

    useEffect(() => () => {
        setTimeout(() => {
            refreshScroll();
        }, 0);
    }, [location.pathname]);

    return (
      <div>
        {children}
      </div>
    );
}

export default LenisScroll;
