import { Field, ErrorMessage as Error } from 'formik';

function Input({
  name = '',
  inputMode = 'text',
  type = '',
  disabled = false,
  required = true,
  placeholder = '',
}) {
  return (
    <div
      className="input"
      data-scroll
    >
      <Field
        className="input__field"
        name={name}
        inputMode={inputMode}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />
      <Error name={name}>
        {(error) => (
          <span
            className="input__font input__font--error"
          >
            { error }
          </span>
        )}
      </Error>
    </div>
  );
}

export default Input;
