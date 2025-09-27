import { useDatePicker } from "./datepicker-model";
import { DatePickerProps } from "./datepicker.interface";
import { DateRangePicker } from "react-date-range";
import "./datepicker.scss";
import { useState } from "react";

const DatePicker = (props: DatePickerProps) => {
  const { ref, isOpen, selectionRange, onChange, onClick } =
    useDatePicker(props);
  const { className, placeholder } = props || {};

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
            onChange={onChange}
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
