import { useEffect, useRef } from 'react';

import Splitting from 'splitting';
import { motion } from 'framer-motion';
import { textStagGsap } from 'tools/gsapTemplates';

import Button from 'components/ui/Button';

function SuccessPopup({ onHide }) {
    const title = useRef(null);
    const desc = useRef(null);

    useEffect(() => {
        Splitting({ target: title.current });
        Splitting({ target: desc.current });

        textStagGsap('.success-popup__title');
        textStagGsap('.success-popup__text');
    }, []);

    return (
      <motion.div
        className="success-popup"
        initial={{
                opacity: 0,
            }}
        whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            }}
        exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="success-popup__wrapper">
            <div className="success-popup__title">
              <h3
                ref={title}
                className="success-popup__font success-popup__font--title"
              >
                SUCCESS!
                <br />
                MESSAGE SENT.
              </h3>
            </div>
            <div className="success-popup__text">
              <p
                ref={desc}
                className="success-popup__font success-popup__font--text"
              >
                I will get back to you as soon as possible!
              </p>
            </div>

            <Button
              className="success-popup__button"
              type="submit"
              text="UNDERSTAND"
              icon="arrow-next"
              onClick={() => onHide()}
            />
          </div>
        </div>
      </motion.div>
    );
}

export default SuccessPopup;
