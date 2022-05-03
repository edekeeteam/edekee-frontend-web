// import React from "react";
// import { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import Backdrop from "../../common/components/Backdrop/Backdrop";
import styles from "./VideoModal.module.scss";
// import { ModalContext } from "../../context/ModalContext";
// import { useModalContext } from "../../context/ModalContext";
// import { useContext } from "react";
import VideoContainer from "../VideoContainer/VideoContainer";
// import Product from "../Product/Product";
// import tabs from "../../data/tabsData";
// import Comment from "../Comment/Comment";
// import ProductDetails from "../ProductDetails/ProductDetails";
// import Modal from "../Modal/Modal";
import VidModal from "../VidModal/VidModal";
// import SignUp from "../Modals/SignUp";
// import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";

// const dropIn = {
//   hidden: {
//     scale: 0.8,
//     opacity: 0,
//   },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500,
//     },
//   },
//   exit: {
//     scale: 0,
//     opacity: 0,
//   },
// };
function VideoModal() {
  // const { videoModalTabValue, setVideoModalTabValue } = useContext(ModalContext);
  // const {}
  //   const [value, setValue] = useState(0);
  return (
    <VidModal>
      <VideoContainer />
      <div className={styles.tabSection}>
        <p>ansldsak</p> <p>ansldsak</p> <p>ansldsak</p> <p>ansldsak</p> <p>ansldsak</p>{" "}
        {/* <div
        onClick={(e) => e.stopPropagation()}
        // className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.videoSection}>
          <VideoPlayer />
        </div>

        <VidModal className={styles.tabSection}>
          {videoModalTabValue !== 2 && (
            <div className={styles.tabHeader}>
              {tabs.map((tab, index) => {
                return (
                  <p
                    key={tab.tabHeader}
                    onClick={() => {
                      setVideoModalTabValue(index);
                    }}
                    className={`${styles.tab} ${index === videoModalTabValue && styles.underline}`}
                  >
                    {" "}
                    {tab.tabHeader}
                  </p>
                );
              })}
            </div>
          )}

          <div className={styles.tabBody}>
            {videoModalTabValue === 0 ? (
              <Product />
            ) : videoModalTabValue === 1 ? (
              <Comment />
            ) : videoModalTabValue === 2 ? (
              <ProductDetails />
            ) : (
              ""
            )}
            {/* <SignUp /> */}
        {/* {value === 0 ? (
              <Product />
            ) : value === 1 ? (
              //   <ProductSpecs />
              <Comment />
            )} */}
        {/* </div> */}
        {/* </div>  */}
        {/* </div> */}
      </div>
    </VidModal>
  );
}

export default VideoModal;
