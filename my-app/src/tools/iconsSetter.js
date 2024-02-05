import arrowDown from 'assets/images/icons/buttons/arrow-down.svg';
import arrowNext from 'assets/images/icons/buttons/arrow-next.svg';
import arrowNextTop from 'assets/images/icons/buttons/arrow-next-top.svg';
import loading from 'assets/images/icons/buttons/loading.svg';

const iconsConfig = {
  'arrow-down': arrowDown,
  'arrow-next': arrowNext,
  'arrow-next-top': arrowNextTop,
  loading,
};

const getIcon = (name) => iconsConfig[name];

export default getIcon;
