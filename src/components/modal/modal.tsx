import { createRef, forwardRef, useImperativeHandle, useState } from "react";
import { ModalRef, DataProps } from "./modal.interface";
import styles from "./modal.module.scss";
import { CloseViolet } from "@assets/images";

const Modal = forwardRef<ModalRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<DataProps[]>([]);

  const show = (data: DataProps) => {
    setIsOpen(true);
    setContent((prev) => [...prev, data]);
  };

  const hide = (id?: string) => {
    const newContent = content.filter((value) => value?.id !== id);
    setIsOpen(false);
    setContent(newContent);
  };

  const onClick = (e: any) => {
    if (e.target.classList.contains("modal")) {
      hide();
    }
  };

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  if (!isOpen && !content) return null;

  return content?.map((value, index) => (
    <div key={index} className={styles["modal"]} onClick={onClick}>
      <div className={styles["modal__content"]}>
        <button
          className={styles["modal__content__close"]}
          onClick={() => hide()}
        >
          <img src={CloseViolet} alt="close" />
        </button>
        <div className={styles["modal__content__content"]}>
          {value?.component}
        </div>
      </div>
    </div>
  ));
});

const modalRef = createRef<ModalRef>();

export const show = (data: DataProps) => {
  if (modalRef.current) {
    modalRef.current.show(data);
  }
};

export const hide = (id?: string) => {
  if (modalRef.current) {
    modalRef.current.hide(id);
  }
};

export const ModalProvider = () => <Modal ref={modalRef}></Modal>;
