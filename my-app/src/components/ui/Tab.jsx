import { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';

const template = {
  title: 'title example',
  text: 'text example',
};

function Tab({
  data = template,
  className = '',
  onClickHandler = () => {},
  isOpen = false,
}) {
  const content = useRef();

  const animationHandler = (options = {}) => {
    animate(content.current, options, { duration: 0.3 });
  };

  useEffect(() => {
    if (!isOpen) {
      animationHandler({ height: 0, marginBottom: 0 });
    } else {
      animationHandler({ height: 'auto', marginBottom: 15 });
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClickHandler}
      aria-hidden="true"
      className={`tab ${isOpen ? 'tab--active' : ''} ${className}`}
    >
      <div
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
