function Marquee({ className = '', text }) {
    return (
      <div
        id="marquee"
        className={`marquee ${className}`}
      >
        <div>
          <span className="marquee__text marquee__font marquee__font--text">
            {text}
          </span>
          <span className="marquee__text marquee__font marquee__font--text">
            {text}
          </span>
        </div>
      </div>
    );
}

export default Marquee;
