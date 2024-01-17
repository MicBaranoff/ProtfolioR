function Marquee({ className, text }) {
  return (
    <div
      data-scroll-section
      id="marquee"
      className={`marquee ${className}`}
    >
      <div
        data-scroll
        data-scroll-target="#marquee"
        data-scroll-speed="10"
        data-scroll-direction="horizontal"
        data-scroll-offset="10%"
      >
        <span className="marquee__text marquee__font marquee__font--text">
          { text }
        </span>
        <span className="marquee__text marquee__font marquee__font--text">
          { text }
        </span>
      </div>
    </div>
  );
}

export default Marquee;
