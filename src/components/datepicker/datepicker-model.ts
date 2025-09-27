import { useEffect, useRef, useState } from "react";

export const useDatePicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

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
  return { ref, isOpen, onClick };
};
