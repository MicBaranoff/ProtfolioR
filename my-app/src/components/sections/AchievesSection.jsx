import Achieve from 'components/blocks/Achieve';

import ReactImage from 'assets/images/achieves/react.png';
import VueImage from 'assets/images/achieves/vue.png';
import ThreeImage from 'assets/images/achieves/three.png';
import PixiImage from 'assets/images/achieves/pixijs.svg';
import GsapImage from 'assets/images/achieves/gsap.png';
import { useRef, useState } from 'react';

const achievesData = [
    {
        name: 'ReactImage',
        image: ReactImage,
        text: 'React.js',
    },
    {
        name: 'VueImage',
        image: VueImage,
        text: 'Vue.js / Nuxt.js',
    },
    {
        name: 'ThreeImage',
        image: ThreeImage,
        text: 'Three.js',
    },
    {
        name: 'PixiImage',
        image: PixiImage,
        text: 'Pixi.js',
    },
    {
        name: 'GsapImage',
        image: GsapImage,
        text: 'Gsap',
    },
];

function AchievesSection({ className = '' }) {
    const section = useRef();
    const circle = useRef();

    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    });
    const [currentImage, setCurrentImage] = useState(null);

    function handleMouseMove(e) {
        const current = section.current?.getBoundingClientRect();
        const movedBlock = circle.current?.getBoundingClientRect();
        const left = e.clientX - current.left - (movedBlock.width / 2);
        const top = e.clientY - current.top - (movedBlock.height / 2);
        setMousePosition({ left, top });
    }

    const hoverHandler = (image) => {
        if (image === currentImage) return;

        setCurrentImage(image);
    };

    return (
      <div
        onMouseMove={(ev) => handleMouseMove(ev)}
        ref={section}
        className={`achieves-section ${className}`}
      >
        <div
          style={{ left: MousePosition.left, top: MousePosition.top }}
          ref={circle}
          className="achieves-section__bg"
        />
        <div
          className="achieves-section__img"
          style={{ transform: `translate(${MousePosition.left}px, ${MousePosition.top}px)` }}
        >
          <img
            className="achieves-section__img-pic"
            src={currentImage}
            alt=""
          />
        </div>

        {
                achievesData.map((achieve) => (
                  <Achieve
                    key={achieve.name + 2}
                    onHover={hoverHandler}
                    text={achieve.text}
                    image={achieve.image}
                  />
                ))
            }
      </div>
    );
}

export default AchievesSection;
