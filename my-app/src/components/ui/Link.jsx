function Link({ className = '', to = '', children }) {
  return (
    <a
      className={`link ${className}`}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <span>{children}</span>
    </a>
  );
}

export default Link;
