import { InputProps } from "./input.interface";
import styles from "./input.module.scss";

const Input = (props: InputProps) => {
  const {
    className,
    register,
    name = "",
    required = false,
    error,
    onChange,
  } = props;
  return (
    <div className={styles["input"]}>
      <input
        {...props}
        {...(register
          ? register(name, { required: required ? `Please enter ${name}` : "" })
          : null)}
        required={false}
        className={`${styles["input__input"]} ${className ?? ""}`}
        autoComplete="off"
        onChange={onChange}
      />
      {error && <span className={styles["input__error"]}>{error}</span>}
    </div>
  );
};

export default Input;
