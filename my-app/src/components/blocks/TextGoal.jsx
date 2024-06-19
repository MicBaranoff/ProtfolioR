import { useEffect, useRef } from 'react';

// import isMobile from 'ismobilejs';

import { CliPathGsapTL } from 'tools/gsapTemplates';

// const isMobileDevice = isMobile(window.navigator).any;

function TextGoal({ data }) {
    const section = useRef();
    // const circle = useRef();

    const selector = `[data-id="text-goal-${data.id}"]`;

    const animationClipText = new CliPathGsapTL(selector, {
        duration: 4,
    });

    // const [MousePosition, setMousePosition] = useState({
    //     left: 0,
    //     top: 0,
    // });
    //
    // function handleMouseMove(e) {
    //     if (isMobileDevice) return;
    //
    //     const current = section.current?.getBoundingClientRect();
    //     const movedBlock = circle.current?.getBoundingClientRect();
    //     const left = e.clientX - current.left - (movedBlock.width / 2);
    //     const top = e.clientY - current.top - (movedBlock.height / 2);
    //     setMousePosition({ left, top });
    // }

    // function resetMousePosition() {
    //     setMousePosition({ left: 0, top: 0 });
    // }

    useEffect(() => {
        animationClipText.init();

        return () => {
            animationClipText.kill();
        };
    }, []);

    return (
      <div
        key={data.id}
        data-id={`text-goal-${data.id}`}
        className="text-goal"
        ref={section}
      >
        {/* <div */}
        {/*  style={{ transform: `translate(${MousePosition.left}px, ${MousePosition.top}px)` }} */}
        {/*  ref={circle} */}
        {/*  className="text-goal__bg" */}
        {/* /> */}

        <h3 className="text-goal__title text-goal__font text-goal__font--title">
          {data.title}
        </h3>
        <p className="text-goal__font text-goal__font--text">
          {data.text}
        </p>
      </div>
    );
}

export default TextGoal;
