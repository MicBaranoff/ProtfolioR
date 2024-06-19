import DefaultLayer from 'layers/default';
import MainSection from 'components/sections/MainSection';
import SomeProjectsSection from 'components/sections/SomeProjectsSection';
import GoalsSection from 'components/sections/GoalsSection';
import Marquee from 'components/blocks/Marquee';
import ContactSection from 'components/sections/ContactSection';
// import AchievesSection from 'components/sections/AchievesSection';

import { useLenis } from 'components/overlays/LenisScroll';

import { useRef } from 'react';

function Home() {
    const projectsSection = useRef();

    const lenisScroll = useLenis();

    const scrollTo = (section) => {
        if (!section.current) return;

        lenisScroll?.scrollTo(section.current, {
            offset: -100,
            duration: 5,
        });
    };

    return (
      <DefaultLayer>
        <div className="home-page ">
          <MainSection clickHandler={() => scrollTo(projectsSection)} className="home-page__main" />
          <SomeProjectsSection innerRef={projectsSection} className="home-page__projects" />
          <Marquee text="Front-end dev for digital experiences" />
          <GoalsSection className="home-page__goals" />
          {/* <AchievesSection className="home-page__testimonials" /> */}
          <ContactSection className="home-page__contact" />
        </div>
      </DefaultLayer>
    );
}

export default Home;
