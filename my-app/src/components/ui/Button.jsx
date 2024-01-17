import Icon from 'components/ui/Icon';

import buttonTypes from 'configs/buttonTypes';
import { useRef, useState } from 'react';

function Button({
  className, icon, text, type = buttonTypes.simple,
}) {
  const button = useRef();
  const circle = useRef();

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  function handleMouseMove(e) {
    const current = button.current.getBoundingClientRect();
    const movedBlock = circle.current.getBoundingClientRect();
    const left = e.clientX - current.left - (movedBlock.width / 2);
    const top = e.clientY - current.top - (movedBlock.height / 2);
    setMousePosition({ left, top });
  }

  return (
    <button
      onMouseMove={handleMouseMove}
      ref={button}
      type="button"
      className={`${type && `button-default--${type}`} button-default ${className}`}
    >
      <span
        className="button-default__bg"
        style={{ left: MousePosition.left, top: MousePosition.top }}
        ref={circle}
      />
      <span className="button-default__font button-default__font--button">
        { text }
      </span>
      { icon && (
      <Icon
        className="button-default__ico"
        name={icon}
      />
      ) }
    </button>
  );
}

export default Button;
