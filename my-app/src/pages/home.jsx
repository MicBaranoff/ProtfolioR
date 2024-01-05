import DefaultLayer from 'layers/default';
import MainSection from 'components/sections/MainSection';
import SomeProjectsSection from 'components/sections/SomeProjectsSection';
import GoalsSection from 'components/sections/GoalsSection';
import Marquee from 'components/blocks/Marquee';
import TestimonialsSection from 'components/sections/TestimonialsSection';
import ContactSection from 'components/sections/ContactSection';

function Home() {
  return (
    <DefaultLayer>
      <div className="home-page">
        <MainSection />
        <SomeProjectsSection className="home-page__projects" />
        <GoalsSection className="home-page__goals" />
        <Marquee text="Visual design for digital experiences" />
        <TestimonialsSection className="home-page__testimonials" />
        <ContactSection className="home-page__contact" />
      </div>
    </DefaultLayer>
  );
}

export default Home;
