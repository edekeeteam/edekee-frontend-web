import React, { useContext } from "react";
import styles from "./Product.module.scss";
// import { VideoModalContext } from "../../context/VideoModalContext";
import { ModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function Product() {
  // const { setCurrentModal } = useContext(VideoModalContext);

  const { setVideoModalTabValue } = useContext(ModalContext);

  const handleKeyDown = () => {
    // console.log("keydown");
  };
  return (
    <div
      className={styles.product}
      onClick={() => {
        setVideoModalTabValue(2);
      }}
      onKeyDown={handleKeyDown()}
      role="button"
      tabIndex="-1"
    >
      <div className={styles.productWrapper}>
        <div className={styles.productLeft}>
          <div className={styles.profilePicture} />
        </div>

        <div className={styles.productRight}>
          <div className={styles.productRightText}>
            <p className={styles.productMainText}>Winter Jacket N25k</p>
            <p className={styles.productSecondaryText}>Corporate shoe </p>
          </div>
          <div>
            <img src="./icons/heartIcon.svg" alt="" className={styles.heartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
