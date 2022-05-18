import styles from "./VidModal.module.scss";
import { useModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function VidModal({ children }) {
  const { isVidModalOpen, setIsVidModalOpen, setModalValue, isModalOpen } = useModalContext();

  // if (isVidModalOpen) {
  //   document.body.style.overflowY = "hidden";
  // } else {
  //   document.body.style.overflowY = "scroll";
  // }
  const handleKeyDown = () => {
    // console.log('');
  };
  return (
    <div
      className={`${styles.modalbackdrop} ${isVidModalOpen && styles.show}`}
      onClick={() => {
        setModalValue("");
        setIsVidModalOpen(false);
        console.log(isVidModalOpen);
        console.log(isModalOpen);
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
