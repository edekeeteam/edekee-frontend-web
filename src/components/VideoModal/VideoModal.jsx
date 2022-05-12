/* eslint-disable no-nested-ternary */
// import React from "react";
import { useState } from "react";
// import { motion } from "framer-motion";
// import Backdrop from "../../common/components/Backdrop/Backdrop";
import styles from "./VideoModal.module.scss";
// import { ModalContext } from "../../context/ModalContext";
// import { useModalContext } from "../../context/ModalContext";
// import { useContext } from "react";
import VideoViewContainer from "../VideoViewContainer/VideoViewContainer";
import Product from "../Product/Product";
import tabs from "../../data/tabsData";
import Comment from "../Comment/Comment";
import ProductDetails from "../ProductDetails/ProductDetails";
import VidModal from "../VidModal/VidModal";
// import Modal from "../Modal/Modal";
// import VidModal from "../VidModal/VidModal";
// import SignUp from "../Modals/SignUp";
// import ProductSpecs from "../ProductSpecs";
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
  const [videoModalTabValue, setVideoModalTabValue] = useState(0);
  // const {}
  //   const [value, setValue] = useState(0);

  return (
    <VidModal>
      <VideoViewContainer
        setVideoModalTabValue={setVideoModalTabValue}
        src="https://edge.tikicdn.com/data/hls/902297/1/3/1478/manifest.m3u8"
      />
      <div className={styles.tabSection}>
        <div className={styles.tabHeader}>
          {tabs.map((tab, index) => (
            <button
              key={tab.tabHeader}
              onClick={() => {
                setVideoModalTabValue(index);
              }}
              className={`${styles.tab} ${index === videoModalTabValue && styles.underline}`}
              type="button"
              // onKeyDown={handleKeyDown()}
              // role="button"
              // tabIndex={0}
            >
              {" "}
              {tab.tabHeader}
            </button>
          ))}
        </div>
        <div className={styles.tabBody}>
          {videoModalTabValue === 0 ? (
            <Product />
          ) : videoModalTabValue === 1 ? (
            <ProductDetails />
          ) : videoModalTabValue === 2 ? (
            <Comment />
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
        </div>
      </div>
    </VidModal>
  );
}

export default VideoModal;
