import styles from "./VidModal.module.scss";
import { useModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function VidModal({ children }) {
  const { isModalOpen, setIsModalOpen } = useModalContext();
  const handleKeyDown = () => {
    // console.log('');
  };
  return (
    <div
      className={`${styles.modalbackdrop} ${isModalOpen && styles.show}`}
      onClick={() => {
        setIsModalOpen(false);
      }}
      onKeyDown={handleKeyDown()}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.vidModalContent} global-vidmodal-width`}
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

export default VidModal;
