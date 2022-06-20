import React from "react";
import styles from "./VideoProduct.module.scss";

function VideoProduct() {
  return (
    <div className={styles.videoProduct}>
      <div className={styles.productImage} />

      <div className={styles.productDetails}>
        <p>Name: Bag</p>
        <p>Name: Bag</p>
        <p>Name: Bag</p>
      </div>

      <img src="./icons/editIcon.svg" alt="" />
    </div>
  );
}

export default VideoProduct;
