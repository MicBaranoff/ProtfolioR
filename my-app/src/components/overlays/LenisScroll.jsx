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

    useEffect(() => {
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }, [lenis]);

    useEffect(() => {
        window.scrollTo(0, 0);

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.killAll();
        };
    }, [location.pathname]);

    return (
      <div>
        {children}
      </div>
    );
}

export default LenisScroll;
