import { NavLink, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import debounce from 'lodash.debounce';

const { REACT_APP_BASE_PATH } = process.env;
function Header() {
  const highlight = useRef();
  const header = useRef();

  const [highlightParams, sethighlightParams] = useState(0);

  const location = useLocation();

  const setHighLightPosition = () => {
    const linkElement = document.querySelector(`[data-path="${location.pathname}"]`);

    const linkRect = linkElement?.getBoundingClientRect();

    console.log(location.pathname);

    if (!linkRect) return;

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
      <NavLink className="header__logo" to={`${REACT_APP_BASE_PATH}`}>
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
              to={`${REACT_APP_BASE_PATH}`}
              data-path={`${REACT_APP_BASE_PATH}`}
            >
              <span className="header__font header__font--link">Home</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to={`${REACT_APP_BASE_PATH}projects`}
              data-path={`${REACT_APP_BASE_PATH}projects`}
            >
              <span className="header__font header__font--link">Projects</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to={`${REACT_APP_BASE_PATH}about`}
              data-path={`${REACT_APP_BASE_PATH}about`}
            >
              <span className="header__font header__font--link">About</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              to={`${REACT_APP_BASE_PATH}contact`}
              data-path={`${REACT_APP_BASE_PATH}contact`}
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
