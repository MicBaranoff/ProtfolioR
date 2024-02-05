import Icon from 'components/ui/Icon';

import buttonTypes from 'configs/buttonTypes';

import { useRef, useState } from 'react';

import { motion } from 'framer-motion';

function Button({
  className,
  icon,
  text,
  modifier = buttonTypes.simple,
  onClick = () => {},
  type = 'button',
  disabled = false,
}) {
  const button = useRef();
  const circle = useRef();

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  function handleMouseMove(e) {
    const current = button.current?.getBoundingClientRect();
    const movedBlock = circle.current?.getBoundingClientRect();
    const left = e.clientX - current.left - (movedBlock.width / 2);
    const top = e.clientY - current.top - (movedBlock.height / 2);
    setMousePosition({ left, top });
  }

  return (
    <motion.button
      ref={button}
      type={type}
      className={`${modifier && `button-default--${modifier}`} button-default ${className}`}
      disabled={disabled}
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: { delay: 0.6 },
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
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
    </motion.button>
  );
}

export default Button;
