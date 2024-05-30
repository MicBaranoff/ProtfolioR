import DefaultLayer from 'layers/default';
import MainSection from 'components/sections/MainSection';
import SomeProjectsSection from 'components/sections/SomeProjectsSection';
import GoalsSection from 'components/sections/GoalsSection';
import Marquee from 'components/blocks/Marquee';
import ContactSection from 'components/sections/ContactSection';
import AchievesSection from 'components/sections/AchievesSection';

import { useRef } from 'react';

function Home() {
    const projectsSection = useRef();

    const scrollTo = (section) => {
        console.log(section);
        // if (!section.current) return;

        // scroll?.scrollTo(section.current, {
        //   offset: 300,
        //   duration: 3 * 1000,
        // });
    };

    return (
      <DefaultLayer>
        <div className="home-page ">
          <MainSection clickHandler={() => scrollTo(projectsSection)} className="home-page__main" />
          <SomeProjectsSection innerRef={projectsSection} className="home-page__projects" />
          <Marquee text="Front-end dev for digital experiences" />
          <GoalsSection className="home-page__goals" />
          <AchievesSection className="home-page__testimonials" />
          <ContactSection className="home-page__contact" />
        </div>
      </DefaultLayer>
    );
}

export default Home;
