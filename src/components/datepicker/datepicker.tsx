import { useDatePicker } from "./datepicker-model";
import { DatePickerProps } from "./datepicker.interface";
import { DateRangePicker } from "react-date-range";
import styles from "./datepicker.module.scss";
import { useState } from "react";

const DatePicker = (props: DatePickerProps) => {
  const { ref, isOpen, selectionRange, onChange, onClick } =
    useDatePicker(props);
  const { className, placeholder } = props || {};

  return (
    <div ref={ref} className={`${styles["datepicker"]} ${className ?? ""}`}>
      <div
        className={`${styles["datepicker__active"]} ${
          isOpen ? styles["datepicker__active__open"] : ""
        }`}
        onClick={onClick}
      >
        {placeholder ?? "Select Date"}
        <i className={styles["icon"]}></i>
      </div>
      {isOpen ? (
        <div className={styles["datepicker__menu"]}>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={onChange}
            className={styles["datepicker__datepicker"]}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DatePicker;
