import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

function AboutMainSection() {
  const title = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      className="about-main-section"
    >
      <div className="about-main-section__title">
        <h3
          className=" about-main-section__font about-main-section__font--title"
          ref={title}
        >
          Hello! I`m Michael Baranov, a front-end developer from
          Odessa, Ukraine with more than 4 years of experience. I love challenges and
          interesting, complex projects. I develop interactive web applications
          and browser games at Develup and also as a freelancer. I am proficient
          in JavaScript, Vue, React, and other tools for creating cool projects.
          Ready to bring your next idea to life.
          Let`s make the web world brighter together!
        </h3>
      </div>
    </div>
  );
}

export default AboutMainSection;
