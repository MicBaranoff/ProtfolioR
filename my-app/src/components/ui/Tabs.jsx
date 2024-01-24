import Tab from 'components/ui/Tab';

function Tabs({ data = [], className = '' }) {
  return (
    <div className={`tabs ${className}`}>
      {
          data.map((item) => (
            <Tab className="tabs__item" key={item.id} data={item} />
          ))
      }
    </div>

  );
}

export default Tabs;
