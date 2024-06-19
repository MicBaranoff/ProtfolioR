import Button from 'components/ui/Button';

import { useEffect, useRef } from 'react';

import Splitting from 'splitting';

import { TextStagGsapTL } from 'tools/gsapTemplates';

function ContactSection({ className }) {
    const title = useRef(null);

    const animationTextStag = new TextStagGsapTL('.contact-section__title', {
        stagger: 0.15,
        duration: 2,
    }, {
        start: '90% bottom',
        end: '90% 60%',
    });

    useEffect(() => {
        Splitting({ target: title.current });

        animationTextStag.init();

        return () => {
            animationTextStag.kill();
        };
    }, []);

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

    return (
      <div className={`contact-section ${className}`}>
        <div className="container contact-section__wrapper">
          <div className="contact-section__title">
            <h2
              ref={title}
              className="contact-section__font contact-section__font--title"
            >
              Let’s talk!
            </h2>
          </div>
          <Button
            className="contact-section__button"
            text="senior.mishel@gmail.com"
            icon="arrow-next-top"
            onClick={() => goToLink('mailto:senior.mishel@gmail.com')}
          />
        </div>
      </div>
    );
}

export default ContactSection;
