import styles from "./NewModal.module.scss";
import { useModalContext } from "../../context/ModalContext";
import { useAuthContext } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
function NewModal({ children }) {
  const { isModalOpen, setIsModalOpen } = useModalContext();
  const { setErrors } = useAuthContext();
  // if (isModalOpen) {
  //   document.body.style.overflowY = "hidden";
  // } else {
  //   document.body.style.overflowY = "scroll";
  // }

  const handleKeyDown = () => {};

  return (
    <div
      className={`${styles.modalbackdrop} ${isModalOpen && styles.show}`}
      onClick={() => {
        setIsModalOpen(false);
        setErrors({});
        // setBtnState(false)
      }}
      onKeyDown={handleKeyDown()}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.modalContent} global-modal-width`}
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

export default NewModal;
