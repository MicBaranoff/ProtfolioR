import Tab from 'components/ui/Tab';

import { useState } from 'react';

function Tabs({ data = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`tabs ${className}`}>
      {
          data.map((item, index) => (
            <Tab
              onClickHandler={() => toggleAccordion(index)}
              isOpen={index === openIndex}
              className="tabs__item"
              key={item.id}
              data={item}
            />
          ))
      }
    </div>

  );
}

export default Tabs;
