import Button from 'components/ui/Button';

function MainSection() {
  return (
    <div className="main-section">
      <div className="container">
        <div className="main-section__title">
          <h1 className="main-section__font main-section__font--title">
            Websites&
            <br />
            Branding
          </h1>
          <Button
            className="main-section__button"
            text="SCROLL DOWN"
            icon="arrow-down"
            type="light"
          />
        </div>
        <div className="main-section__footer">
          <div className="main-section__talk">
            <p className="main-section__font main-section__font--subtitle">
              Let’s Talk
            </p>
            <a
              className="main-section__font main-section__font--text"
              href="mailto:senior.mishel@gmail.com"
            >
              senior.mishel@gmail.com
            </a>
          </div>
          <div className="main-section__text">
            <p className="main-section__font main-section__font--text">
              Hello, I’m Joey, an online product designer focusing on brand identity,
              advertising, and no-code instruments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
