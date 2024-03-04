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
            <Link to="https://t.me/m1100001001b" className="footer__font footer__font--text">Telegram</Link>
            <Link to="https://www.instagram.com/michaelbaranoff" className="footer__font footer__font--text">Instagram</Link>
            <Link to="https://www.linkedin.com/in/michael-baranov-1997dev/" className="footer__font footer__font--text">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
