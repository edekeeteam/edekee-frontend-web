import { motion } from "framer-motion";
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
      <motion.div
        className={`${styles.modalContent} global-modal-width`}
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

export default NewModal;
