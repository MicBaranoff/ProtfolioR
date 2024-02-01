import Input from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';
import Button from 'components/ui/Button';

import { Formik, Form } from 'formik';

import baseSchemas from 'tools/validationRules';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  return (
    <div className="contact-form">
      <Formik
        onSubmit={() => {}}
        validationSchema={baseSchemas.custom}
        initialValues={initialValues}
      >
        <Form className="contact-form__form" action="">
          <Input
            name="firstName"
            type="text"
            required
            placeholder="Your name"
          />

          <Input
            name="email"
            type="email"
            required
            placeholder="Your e-mail"
          />

          <Textarea
            name="message"
            placeholder="Your message"
          />

          <Button
            className="contact-form__button"
            text="SUBMIT"
            icon="arrow-next"
            onClick={() => {}}
          />
        </Form>
      </Formik>
    </div>

  );
}

export default ContactForm;
