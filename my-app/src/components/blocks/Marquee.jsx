function Marquee({ className, text }) {
  return (
    <div className={`marquee ${className}`}>
      <span className="marquee__text marquee__font marquee__font--text">
        { text }
      </span>
      <span className="marquee__text marquee__font marquee__font--text">
        { text }
      </span>
    </div>
  );
}

export default Marquee;
