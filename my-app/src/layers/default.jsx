import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useEffect } from 'react';

function DefaultLayer({ children, className = '' }) {
  const { scroll } = useLocomotiveScroll();
  const enableScroll = () => {
    scroll.start();
  };
  const disableScroll = () => {
    scroll.stop();
  };

  useEffect(() => {
    new ResizeObserver(() => {
      scroll?.update();
    }).observe(document.querySelector('[data-scroll-container]'));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      onAnimationStart={disableScroll}
      onAnimationComplete={enableScroll}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      className={`default-layout ${className}`}
    >
      <div className="default-layout__wrapper">
        {children}
      </div>
    </motion.div>
  );
}

export default DefaultLayer;
