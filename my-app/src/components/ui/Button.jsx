import Icon from 'components/ui/Icon';

function Button({
  className, icon, text, type = 'simple',
}) {
  return (
    <button type="button" className={`${type && `button-default--${type}`} button-default ${className}`}>
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
