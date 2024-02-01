import * as Yup from 'yup';

const regx = {
  name: /^[а-яА-Яa-zA-z]{2,20}$/,
};
const firstName = Yup.string()
  .matches(regx.name, 'Field name is not valid')
  .required('Field is required');

const email = Yup.string()
  .email('Invalid email')
  .required('Field is required');

const baseSchemas = {
  custom: Yup.object().shape({
    firstName,
    email,
  }),
};

export default baseSchemas;
