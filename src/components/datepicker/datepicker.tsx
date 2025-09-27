import { useDatePicker } from "./datepicker-model";
import { DatePickerProps } from "./datepicker.interface";
import { DateRangePicker } from "react-date-range";
import "./datepicker.scss";

const DatePicker = (props: DatePickerProps) => {
  const { ref, isOpen, onClick } = useDatePicker();
  const { className, placeholder } = props;

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  return (
    <div ref={ref} className={`datepicker ${className ?? ""}`}>
      <div
        className={`datepicker__active ${
          isOpen ? "datepicker__active__open" : ""
        }`}
        onClick={onClick}
      >
        {placeholder ?? "Select Date"}
        <i className="icon"></i>
      </div>
      {isOpen ? (
        <div className="datepicker__menu">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={props?.onChange}
            className="datepicker__datepicker"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DatePicker;
