function Link({
  className = '', to = '', cRef, children,
}) {
  return (
    <a
      className={`link ${className}`}
      href={to}
      ref={cRef}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <span>{children}</span>
    </a>
  );
}

export default Link;
