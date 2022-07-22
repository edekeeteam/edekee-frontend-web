/* eslint-disable react/prop-types */

import React from "react";
import styles from "./ShopProductImage.module.scss";

function ShopProductImage({ src }) {
  return (
    <div
      className={styles.shopProductImage}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img src="/icons/optionsIcon.svg" className={styles.optionsIcon} alt="" />
    </div>
  );
}

export default ShopProductImage;
