import { useEffect, useRef, useState } from 'react';
import Splitting from 'splitting';

function TextGoal({ data }) {
  const title = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: text.current, by: 'lines' });
  }, []);

  const section = useRef();
  const circle = useRef();

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  function handleMouseMove(e) {
    const current = section.current.getBoundingClientRect();
    const movedBlock = circle.current.getBoundingClientRect();
    const left = e.clientX - current.left - (movedBlock.width / 2);
    const top = e.clientY - current.top - (movedBlock.height / 2);
    setMousePosition({ left, top });
  }

  function resetMousePosition() {
    setMousePosition({ left: 0, top: 0 });
  }

  return (
    <div
      data-scroll
      data-scroll-offset="20%"
      key={data.id}
      className="text-goal"
      onMouseMove={(ev) => handleMouseMove(ev)}
      onMouseLeave={resetMousePosition}
      ref={section}
    >
      <div
        style={{ transform: `translate(${MousePosition.left}px, ${MousePosition.top}px)` }}
        ref={circle}
        className="text-goal__bg"
      />

      <h3 ref={title} className="text-goal__title text-goal__font text-goal__font--title">
        {data.title}
      </h3>
      <p ref={text} className="text-goal__font text-goal__font--text">
        {data.text}
      </p>
    </div>
  );
}

export default TextGoal;
