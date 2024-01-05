import { ReactSVG } from 'react-svg';

import getIcon from 'tools/iconsSetter';

function Icon({ className, name }) {
  return (
    <ReactSVG
      className={className}
      src={getIcon(name)}
    />
  );
}

export default Icon;
