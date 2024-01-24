import { useRef, useState } from 'react';

import { animate } from 'framer-motion';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

const template = {
  title: 'title example',
  text: 'text example',
};

function Tab({ data = template, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const content = useRef();
  const { scroll } = useLocomotiveScroll();

  const animationHandler = (options = {}) => {
    animate(content.current, options, { duration: 0.3 }).then(() => {
      console.log(scroll);
    });
  };
  const toggleTab = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      animationHandler({ height: 0, marginBottom: 0 });
    } else {
      animationHandler({ height: 'auto', marginBottom: 15 });
    }
  };
  return (
    <div className={`tab ${isOpen ? 'tab--active' : ''} ${className}`}>
      <div
        onClick={toggleTab}
        aria-hidden="true"
        className="tab__title"
      >
        <p className="tab__font tab__font--title">
          {data?.title}
        </p>
        <div className="tab__btn">
          <span />
          <span />
        </div>
      </div>
      <div ref={content} className="tab__content">
        <p className="tab__font tab__font--text">
          {data?.text}
        </p>
      </div>
    </div>
  );
}

export default Tab;
