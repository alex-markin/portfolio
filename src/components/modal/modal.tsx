// импорт библиотек и хуков
import ReactDOM from "react-dom";

// импорт стейтов
import { useDispatch } from "../../services/hooks/redux-hooks";
import { modalSlice } from "../../services/store/slices/modalSlice";

// импорт стилей
import styles from "./modal.module.css";

// импорт компонентов
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const dispatch = useDispatch();

  if (!modalRoot) {
    console.log("modalRoot is null");
    return null;
  }


  const onClose = () => {
    dispatch(modalSlice.actions.toggleModal());
  };

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        {children}
        <button className={styles.close} onClick={onClose}></button>
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
}
