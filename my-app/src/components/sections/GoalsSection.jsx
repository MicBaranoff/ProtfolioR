import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import TextGoal from 'components/blocks/TextGoal';

const data = [
  {
    id: 0,
    title: 'Branding',
    text: 'Collaborating closely, we`ll develop an impactful brand\n'
        + '              identity for your emerging enterprise.\n'
        + '              The full spectrum of brand analysis and design is addressed,\n'
        + '              culminating in a visually stunning,\n'
        + '              evergreen logo concept.',
  },
  {
    id: 1,
    title: 'Branding',
    text: 'Collaborating closely, we`ll develop an impactful brand\n'
        + '              identity for your emerging enterprise.\n'
        + '              The full spectrum of brand analysis and design is addressed,\n'
        + '              culminating in a visually stunning,\n'
        + '              evergreen logo concept.',
  },
  {
    id: 2,
    title: 'Branding',
    text: 'Collaborating closely, we`ll develop an impactful brand\n'
        + '              identity for your emerging enterprise.\n'
        + '              The full spectrum of brand analysis and design is addressed,\n'
        + '              culminating in a visually stunning,\n'
        + '              evergreen logo concept.',
  },
  {
    id: 3,
    title: 'Branding',
    text: 'Collaborating closely, we`ll develop an impactful brand\n'
        + '              identity for your emerging enterprise.\n'
        + '              The full spectrum of brand analysis and design is addressed,\n'
        + '              culminating in a visually stunning,\n'
        + '              evergreen logo concept.',
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
          <h2 ref={title} className="goals-section__font goals-section__font--title">Expertise</h2>
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
