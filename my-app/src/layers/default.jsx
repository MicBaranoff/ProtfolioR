import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useEffect } from 'react';

function DefaultLayer({ children, className = '' }) {
  const { scroll } = useLocomotiveScroll();
  const enableScroll = () => {
    scroll?.start();
  };
  const disableScroll = () => {
    scroll?.stop();
  };

  useEffect(() => {
    if (!scroll) return;

    new ResizeObserver(() => {
      scroll?.update();
    }).observe(document.querySelector('[data-scroll-container]'));
  }, [scroll]);

  return (
    scroll
      ? (
        <>
          <motion.div
            initial={{
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileInView={{
              x: '-200vw',
              transition: {
                duration: 1.3,
                delay: 0.3,
              },
            }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            className="default-layout__slasher"
          />
          {/* <motion.div */}
          {/*  initial={{ */}
          {/*    opacity: 1, */}
          {/*    transition: { */}
          {/*      duration: 1, */}
          {/*    }, */}
          {/*  }} */}
          {/*  whileInView={{ */}
          {/*    opacity: 0, */}
          {/*    transition: { */}
          {/*      duration: 1, */}
          {/*      delay: 1.3, */}
          {/*    }, */}
          {/*  }} */}
          {/*  exit={{ */}
          {/*    opacity: 0, */}
          {/*  }} */}
          {/*  viewport={{ once: true }} */}
          {/*  className="default-layout__loader" */}
          {/* /> */}
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
        </>
      ) : <div>scroll error</div>
  );
}

export default DefaultLayer;
