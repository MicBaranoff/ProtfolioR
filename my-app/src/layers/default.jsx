import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function DefaultLayer({ children, className }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        offset: '20%',
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div
        data-scroll-container
        className={`default-layout ${className}`}
        ref={containerRef}
      >
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: 'linear',
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
        <Footer />
      </div>
    </LocomotiveScrollProvider>

  );
}

export default DefaultLayer;
