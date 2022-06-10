import styles from "./Modal.module.scss";
import { useModalContext } from "../../context/ModalContext";
import { useAuthContext } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
function Modal({ children }) {
  const { isModalOpen, setIsModalOpen } = useModalContext();
  const { setErrors, setBtnState } = useAuthContext();

  // if (isModalOpen) {
  //   document.body.style.overflowY = "hidden";
  // } else {
  //   document.body.style.overflowY = "scroll";
  // }

  const handleKeyDown = () => {};

  return (
    <div
      className={`${styles.modalBackdrop} ${isModalOpen && styles.show}`}
      onClick={() => {
        setIsModalOpen(false);
        setErrors({});
        setBtnState(false);
      }}
      onKeyDown={handleKeyDown()}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.modalContent}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown()}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
