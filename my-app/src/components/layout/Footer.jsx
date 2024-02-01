import Link from 'components/ui/Link';

function Footer() {
  return (
    <footer data-scroll-section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__font footer__font--text">
            2024 © — Odessa.Ukraine.
          </p>

          <div className="footer__links">
            <Link to="/" className="footer__font footer__font--text">Dribbble</Link>
            <Link to="/" className="footer__font footer__font--text">Instagram</Link>
            <Link to="/" className="footer__font footer__font--text">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
