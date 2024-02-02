import { Field } from 'formik';

function Textarea({
  name = '',
  disabled = false,
  required = false,
  placeholder = '',
  error = '',
}) {
  return (
    <div
      data-scroll
      className={` textarea ${error && ' textarea--error'}`}
    >
      <Field
        as="textarea"
        className=" textarea__field"
        name={name}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Textarea;
