import { useEffect, useRef, useState } from "react";
import { DatePickerProps } from "./datepicker.interface";

export const useDatePicker = (props: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  const selectionRange = {
    startDate: start,
    endDate: end,
    key: "selection",
  };

  const onChange = (e: any) => {
    const { startDate, endDate } = e?.selection;
    setStart(startDate);
    setEnd(endDate);
    props?.onChange(e);
  };

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onOutsideClick = (event: MouseEvent | TouchEvent | PointerEvent) => {
    const el = ref.current;
    if (!el || el.contains(event.target as Node)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("touchstart", onOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("touchstart", onOutsideClick);
    };
  }, [ref]);
  return { ref, isOpen, selectionRange, onChange, onClick };
};
