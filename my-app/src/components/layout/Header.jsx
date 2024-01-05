import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/">
        <span>mb.dev</span>
      </NavLink>
      <div className="header__row">
        <ul className="header__nav">
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/">
              <span className="header__font header__font--link">Home</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/projects">
              <span className="header__font header__font--link">Projects</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/about">
              <span className="header__font header__font--link">About</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className="header__nav-link" to="/contact">
              <span className="header__font header__font--link">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
