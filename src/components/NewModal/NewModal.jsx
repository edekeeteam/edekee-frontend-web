import { motion } from "framer-motion";
import styles from "./NewModal.module.scss";
import styles2 from "../ImageSlider/ImageSlider.module.scss";

import { useModalContext } from "../../context/ModalContext";
// import { useAuthContext } from "../../context/AuthContext";
import { usePopupContext } from "../../context/PopupContext";

// eslint-disable-next-line react/prop-types
function NewModal({ children }) {
  const { isModalOpen, setIsModalOpen } = useModalContext();
  // const { setErrors } = useAuthContext();

  const { togglePopup, handleAction } = usePopupContext();
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

  function handleCancelUpload() {
    // setIsModalOpen()
    togglePopup();
    handleAction(setIsModalOpen);
  }

  return (
    <div
      className={`${styles.modalbackdrop} ${isModalOpen && styles.show}`}
      // onClick={() => {
      //   setIsModalOpen(false);
      //   setErrors({});
      //   // setBtnState(false)
      // }}
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
        <div
          style={{
            position: "absolute",
            right: "-50px",
            top: "-50px",
            // marginTop: "-40px",
            // marginRight: "-40px",
            backgroundColor: "#322F37",
          }}
          className={`${styles2.iconBackground}`}
          onKeyDown={() => {
            handleCancelUpload();
          }}
          onClick={() => {
            handleCancelUpload();
          }}
          role="button"
          tabIndex={0}
        >
          <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          {/* <p style={{ color: "#fff", fontSize: "30px" }}>show</p> */}
        </div>
        {children}
      </motion.div>
    </div>
  );
}

export default NewModal;
