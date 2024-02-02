import Input from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';
import Button from 'components/ui/Button';

import { Formik, Form } from 'formik';

import baseSchemas from 'tools/validationRules';

import { send } from '@emailjs/browser';

const initialValues = {
  firstName: '',
  email: '',
  message: '',
};

const SERVICE_ID = process.env.REACT_APP_FORM_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_FORM_PUBLIC_KEY;

function ContactForm() {
  const onSubmitHandler = (values) => {
    send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="contact-form">
      <Formik
        onSubmit={(values) => onSubmitHandler(values)}
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
            type="submit"
            text="SUBMIT"
            icon="arrow-next"
          />
        </Form>
      </Formik>
    </div>

  );
}

export default ContactForm;
