import { ReactNode } from "react";

export interface ModalRef {
  show: (data: DataProps) => void;
  hide: (id?: string) => void;
}

export interface DataProps {
  id?: string;
  component?: ReactNode;
}
