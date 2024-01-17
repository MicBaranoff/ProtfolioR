import DefaultLayer from 'layers/default';
import MainSection from 'components/sections/MainSection';
import SomeProjectsSection from 'components/sections/SomeProjectsSection';
import GoalsSection from 'components/sections/GoalsSection';
import Marquee from 'components/blocks/Marquee';
import ContactSection from 'components/sections/ContactSection';
import AchievesSection from 'components/sections/AchievesSection';
import { useEffect, useState } from 'react';

function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  });

  return (
    <DefaultLayer className={`${(ready && 'is-ready') || ''}`}>
      <div className="home-page ">
        <MainSection className="home-page__main" />
        <SomeProjectsSection className="home-page__projects" />
        <Marquee text="Visual design for digital experiences" />
        <GoalsSection className="home-page__goals" />
        <AchievesSection className="home-page__testimonials" />
        <ContactSection className="home-page__contact" />
      </div>
    </DefaultLayer>
  );
}

export default Home;
