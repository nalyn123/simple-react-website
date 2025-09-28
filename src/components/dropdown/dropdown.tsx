import styles from "./dropdown.module.scss";
import { useDropdown } from "./dropdown-model";
import { DropdownProps } from "./dropdown.interface";

const Dropdown = (props: DropdownProps) => {
  const { data, className, placeholder } = props || {};
  const { ref, active, isOpen, onClick, onItemClick } = useDropdown(props);

  return (
    <div ref={ref} className={`${styles["dropdown"]} ${className}`}>
      <div
        className={`${styles["dropdown__active"]} ${
          isOpen ? styles["dropdown__active__open"] : ""
        }`}
        onClick={onClick}
      >
        {active?.value ?? placeholder ?? "Select ..."}{" "}
        <i className={styles["arrow"]}></i>
      </div>
      {isOpen ? (
        <div className={styles["dropdown__menu"]}>
          <ul>
            {data.map((value, index) => (
              <div
                key={index}
                className={styles["dropdown__menu__list"]}
                onClick={() => onItemClick(value)}
              >
                {value?.value}
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
