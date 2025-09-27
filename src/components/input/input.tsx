import { InputProps } from "./input.interface";
import "./input.scss";

const Input = (props: InputProps) => {
  const { className, register, name = "", required = false, error } = props;
  return (
    <div className="input">
      <input
        {...props}
        {...(register
          ? register(name, { required: required ? `Please enter ${name}` : "" })
          : null)}
        required={false}
        className={`input__input ${className ?? ""}`}
        autoComplete="off"
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
