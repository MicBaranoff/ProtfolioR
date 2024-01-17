import { useRef, useEffect, useState } from 'react';

import Swiper, { EffectFade, Autoplay } from 'swiper';

import testimonials from 'configs/testimonials';

Swiper.use([Autoplay, EffectFade]);

const swiperConfig = {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  grabCursor: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
};

function TestimonialsSection({ className }) {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  console.log(swiper);

  useEffect(() => {
    setSwiper(new Swiper(swiperRef.current, swiperConfig));
  }, []);

  return (
    <div className={`testimonials-section ${className}`}>
      <div className="container">
        <div className="testimonials-section__title">
          <h2 className="testimonials-section__font testimonials-section__font--title">
            Testimonials
          </h2>
        </div>

        <div className="testimonials-section__slider swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">

            {testimonials.map((item) => (
              <div key={item.id} className="swiper-slide">
                <div className="testimonials-section__slide ">
                  <div className="testimonials-section__slide-main">
                    <p className="testimonials-section__font testimonials-section__font--main">
                      {item.text}
                    </p>
                  </div>
                  <div className="testimonials-section__slide-who">
                    <p className="testimonials-section__font testimonials-section__font--subtitle">{item.author}</p>
                    <p className="testimonials-section__font testimonials-section__font--text">{item.pos}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
