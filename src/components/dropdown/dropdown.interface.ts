export interface DropdownActiveProps {
  key: number | string;
  value: string;
}

export interface DropdownProps {
  data: DropdownActiveProps[];
  className?: string;
  placeholder?: string;
  onChange?: (data: DropdownActiveProps) => void;
}
