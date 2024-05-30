import { useEffect, useRef } from 'react';

import Splitting from 'splitting';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import Button from 'components/ui/Button';

const { REACT_APP_BASE_PATH } = process.env;

function SuccessPopup() {
    const title = useRef(null);
    const desc = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        Splitting({ target: title.current });
        Splitting({ target: desc.current, by: 'lines' });
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
        exit={{ opacity: 0 }}
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
              text="HOME PAGE"
              icon="arrow-next"
              onClick={() => navigate(`${REACT_APP_BASE_PATH}`)}
            />
          </div>
        </div>
      </motion.div>
    );
}

export default SuccessPopup;
