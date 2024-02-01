import { useRef } from 'react';

function Textarea({
  name = '',
  disabled = false,
  required = false,
  placeholder = '',
  error = '',
}) {
  const textarea = useRef();

  return (
    <div
      data-scroll
      className={` textarea ${error && ' textarea--error'}`}
    >
      <textarea
        ref={textarea}
        className=" textarea__field"
        name={name}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />

      {
                error && (
                <div className=" textarea__footer">
                  <span
                    className=" textarea__font  textarea__font--error"
                  >
                    { error }
                  </span>
                </div>
                )
            }
    </div>
  );
}

export default Textarea;
