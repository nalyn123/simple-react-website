import { useEffect, useRef, useState } from "react";
import { DropdownProps, DropdownActiveProps } from "./dropdown.interface";

export const useDropdown = (props: DropdownProps) => {
  const [active, setActive] = useState<DropdownActiveProps | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  const onItemClick = (data: DropdownActiveProps) => {
    setActive(data);
    setIsOpen(false);
    props?.onChange?.(data);
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
  return { ref, active, isOpen, onClick, onItemClick };
};
