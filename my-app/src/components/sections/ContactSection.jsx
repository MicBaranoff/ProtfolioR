import Button from 'components/ui/Button';

import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

function ContactSection({ className }) {
  const title = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-offset="30%" className={`contact-section ${className}`}>
      <div className="container contact-section__wrapper">
        <div className="contact-section__title">
          <h2
            ref={title}
            className="contact-section__font contact-section__font--title"
            data-scroll
            data-scroll-speed="2"
            data-scroll-delay="0.05"
            data-scroll-offset="30%"
          >
            Let’s talk!
          </h2>
        </div>
        <Button
          className="contact-section__button"
          text="senior.mishel@gmail.com"
          icon="arrow-next-top"
        />
      </div>
    </div>
  );
}

export default ContactSection;
