import { motion } from "framer-motion";
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
  const dropIn = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

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
      <motion.div
        className={`${styles.vidModalContent} global-vidmodal-width`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown()}
        role="button"
        tabIndex={0}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default VidModal;
