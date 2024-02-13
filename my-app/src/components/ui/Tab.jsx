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
      data-scroll
      onClick={onClickHandler}
      aria-hidden="true"
      className={`tab ${className}`}
    >
      <div className={`${isOpen ? 'tab--active' : ''}`}>
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
          {/* eslint-disable-next-line react/no-danger */}
          <p dangerouslySetInnerHTML={{ __html: data?.text }} className="tab__font tab__font--text" />
        </div>
      </div>
    </div>
  );
}

export default Tab;
