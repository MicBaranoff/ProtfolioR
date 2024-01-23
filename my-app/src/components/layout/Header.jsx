import { NavLink, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import debounce from 'lodash.debounce';

function Header() {
  const highlight = useRef();
  const header = useRef();

  const [highlightParams, sethighlightParams] = useState(0);

  const location = useLocation();

  const setHighLightPosition = () => {
    const linkElement = document.querySelector(`[data-path="${location.pathname}"]`);

    const linkRect = linkElement.getBoundingClientRect();
    // console.log(highlight.current.parentElement.getBoundingClientRect().left, linkRect.left);

    const offsetX = linkRect.left - highlight.current.parentElement.getBoundingClientRect().left;
    const { width } = linkRect;

    sethighlightParams({
      x: offsetX,
      width,
    });
  };

  window.addEventListener('resize', debounce(setHighLightPosition, 300));

  useEffect(() => {
    setTimeout(setHighLightPosition, 150);
  }, [location]);

  return (
    <header
      data-scroll-section
      className="header"
    >
      <NavLink className="header__logo" to="/">
        <span>mb.dev</span>
      </NavLink>
      <div ref={header} className="header__row">
        <ul className="header__nav">
          <div
            style={{ left: `${highlightParams.x}px`, width: highlightParams.width }}
            ref={highlight}
            className="header__highlighter"
          />
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to="/"
              data-path="/"
            >
              <span className="header__font header__font--link">Home</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to="/projects"
              data-path="/projects"
            >
              <span className="header__font header__font--link">Projects</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to="/about"
              data-path="/about"
            >
              <span className="header__font header__font--link">About</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to="/contact"
              data-path="/contact"
            >
              <span className="header__font header__font--link">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
