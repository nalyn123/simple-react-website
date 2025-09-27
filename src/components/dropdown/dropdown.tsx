import "./dropdown.scss";
import { useDropdown } from "./dropdown-model";
import { DropdownProps } from "./dropdown.interface";

const Dropdown = (props: DropdownProps) => {
  const { data, className, placeholder } = props || {};
  const { ref, active, isOpen, onClick, onItemClick } = useDropdown(props);

  return (
    <div ref={ref} className={`dropdown ${className ?? ""}`}>
      <div
        className={`dropdown__active ${isOpen ? "dropdown__active__open" : ""}`}
        onClick={onClick}
      >
        {active?.value ?? placeholder ?? "Select ..."} <i className="arrow"></i>
      </div>
      {isOpen ? (
        <div className="dropdown__menu">
          <ul>
            {data.map((value, index) => (
              <div
                key={index}
                className="dropdown__menu__list"
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
