import Button from 'components/ui/Button';

function ContactSection({ className }) {
  return (
    <div className={`contact-section ${className}`}>
      <div className="container contact-section__wrapper">
        <div className="contact-section__title">
          <h2 className="contact-section__font contact-section__font--title">
            Let’s talk!
          </h2>
        </div>
        <Button
          className="contact-section__button"
          text="senior.mishel@gmail.com"
          icon="arrow-next-top"
        />
      </div>
    </div>
  );
}

export default ContactSection;
