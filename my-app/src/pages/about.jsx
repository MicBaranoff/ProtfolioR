import DefaultLayer from 'layers/default';
import Marquee from 'components/blocks/Marquee';
import WhatIDoSection from 'components/sections/WhatIDoSection';
import AboutMainSection from 'components/sections/AboutMainSection';
import ContactSection from 'components/sections/ContactSection';

function About() {
  return (
    <DefaultLayer>
      <div className="about-page">
        <div className="container">
          <AboutMainSection />
        </div>
        <Marquee text="Front-end dev for digital experiences" />
        <div className="container">
          <WhatIDoSection className="about-page__tabs" />
          <ContactSection className="about-page__contact" />
        </div>
      </div>
    </DefaultLayer>
  );
}

export default About;
