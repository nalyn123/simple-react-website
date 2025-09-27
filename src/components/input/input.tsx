import { InputProps } from "./input.interface";
import "./input.scss";

const Input = (props: InputProps) => {
  const { type, placeholder } = props;
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder ?? "Please enter"}
    />
  );
};

export default Input;
