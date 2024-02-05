import Input from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';
import Button from 'components/ui/Button';

import { Formik, Form } from 'formik';

import baseSchemas from 'tools/validationRules';

import { send } from '@emailjs/browser';
import { useState } from 'react';

const initialValues = {
  firstName: '',
  email: '',
  message: '',
};

const SERVICE_ID = process.env.REACT_APP_FORM_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_FORM_PUBLIC_KEY;

function ContactForm({ onSubmit = () => {} }) {
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [error, setError] = useState(null);

  const onSubmitHandler = (values) => {
    setRequestInProgress(true);

    send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then(() => {
        onSubmit();
      }, () => {
        setError('Error, please try again... ❌');
      }).finally(() => {
        setRequestInProgress(false);
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

          <div className="contact-form__form-footer">
            <div className="contact-form__form-result">
              {error
                  && <span className="contact-form__font contact-form__font--error">{error}</span>}
            </div>
            <Button
              className="contact-form__button"
              type="submit"
              text={!requestInProgress ? 'SUBMIT' : 'SENDING'}
              icon={!requestInProgress ? 'arrow-next' : 'loading'}
              disabled={requestInProgress}
            />
          </div>

        </Form>
      </Formik>
    </div>

  );
}

export default ContactForm;
