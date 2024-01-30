import Achieve from 'components/blocks/Achieve';

import ReactImage from 'assets/images/achieves/react.png';
import VueImage from 'assets/images/achieves/vue.png';
import ThreeImage from 'assets/images/achieves/three.png';
import PixiImage from 'assets/images/achieves/pixijs.svg';
import GsapImage from 'assets/images/achieves/gsap.png';
import { useRef, useState } from 'react';

function AchievesSection({ className = '' }) {
  const section = useRef();
  const circle = useRef();

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  function handleMouseMove(e) {
    const current = section.current?.getBoundingClientRect();
    const movedBlock = circle.current?.getBoundingClientRect();
    const left = e.clientX - current.left - (movedBlock.width / 2);
    const top = e.clientY - current.top - (movedBlock.height / 2);
    setMousePosition({ left, top });
  }

  return (
    <div
      data-scroll-section
      onMouseMove={(ev) => handleMouseMove(ev)}
      ref={section}
      className={`achieves-section ${className}`}
    >
      <div
        style={{ left: MousePosition.left, top: MousePosition.top }}
        ref={circle}
        className="achieves-section__bg"
      />
      <Achieve text="Vue.js / Nuxt.js" image={VueImage} />
      <Achieve text="React.js" image={ReactImage} />
      <Achieve text="Three.js" image={ThreeImage} />
      <Achieve text="Pixi.js" image={PixiImage} />
      <Achieve text="Gsap" image={GsapImage} />
    </div>
  );
}

export default AchievesSection;
