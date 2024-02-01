import DefaultLayer from 'layers/default';
import ContactForm from 'components/forms/ContactForm';
import Link from 'components/ui/Link';
import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

function Contact() {
  const title1 = useRef(null);
  const title2 = useRef(null);

  useEffect(() => {
    Splitting({ target: title1.current });
    Splitting({ target: title2.current });
  }, []);

  return (
    <DefaultLayer>
      <div className="contact-page">
        <div className="container">
          <div
            data-scroll
            data-scroll-section
            className="contact-page__wrapper"
          >
            <div className="contact-page__form">
              <h4
                ref={title2}
                className="contact-page__font contact-page__font--subtitle"
              >
                SEND ME A MESSAGE:
              </h4>
              <ContactForm />
            </div>
            <div className="contact-page__links">
              <h4
                ref={title1}
                className="contact-page__font contact-page__font--subtitle"
              >
                Social links:
              </h4>

              <Link
                className="contact-page__link"
                to="https://t.me/m1100001001b"
              >
                telegram
              </Link>
              <br />
              <Link
                className="contact-page__link"
                to="https://www.linkedin.com/in/michael-baranov-1997dev/"
              >
                linkedin
              </Link>
              <br />
              <Link
                className="contact-page__link"
                to="https://www.instagram.com/michaelbaranoff"
              >
                instagram
              </Link>
              <br />
              <Link
                className="contact-page__link contact-page__link--email"
                to="mailto:senior.mishel@gmail.com"
              >
                senior.mishel@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayer>
  );
}

export default Contact;
