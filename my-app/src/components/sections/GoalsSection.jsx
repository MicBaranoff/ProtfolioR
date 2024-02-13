import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import TextGoal from 'components/blocks/TextGoal';

const data = [
  {
    id: 0,
    title: 'User Interface (UI)',
    text: 'Crafting intuitive and visually appealing user interfaces'
        + ' that enhance user experience and drive engagement. '
        + 'From wireframing to prototyping, I specialize in creating '
        + 'interfaces that are both functional and aesthetically pleasing.',
  },
  {
    id: 1,
    title: 'User Experience (UX)',
    text: 'Implementing user-centered design principles to create '
        + 'seamless and enjoyable experiences for website visitors. Through'
        + ' thorough research and empathy-driven design, I ensure that '
        + 'every interaction leaves a positive impression.',
  },
  {
    id: 2,
    title: 'Frontend Development',
    text: 'Building responsive and interactive websites with clean, '
        + 'efficient code. Leveraging modern frontend technologies '
        + ', I develop websites that '
        + 'are not only visually stunning but also performant and accessible.',
  },
  {
    id: 3,
    title: 'Collaboration',
    text: 'Working closely with clients to understand their vision and goals,'
        + ' I collaborate to bring their ideas to life. By maintaining open'
        + ' communication and iterating based on feedback, I ensure that the'
        + ' final product exceeds expectations.',
  },
];

function GoalsSection({ className }) {
  const title = useRef(null);
  const subtitle = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    Splitting({ target: title.current });
    Splitting({ target: subtitle.current });
    Splitting({ target: text.current, by: 'lines' });
  }, []);

  return (
    <div
      data-scroll-section
      data-scroll-offset="20%"
      className={`goals-section ${className}`}
    >
      <div className="container">
        <div data-scroll className="goals-section__title">
          <h2
            ref={title}
            className="goals-section__font goals-section__font--title"
            data-scroll
            data-scroll-speed="1.5"
            data-scroll-delay="0.05"
            data-scroll-offset="10%"
          >
            Expertise
          </h2>
        </div>
        <div className="goals-section__grid">
          {
            data.map((item) => (
              <TextGoal key={item.id} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default GoalsSection;
