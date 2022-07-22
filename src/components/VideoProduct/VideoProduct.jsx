/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./VideoProduct.module.scss";

function VideoProduct({ name, brand, price, image, id, addToSelectedProducts }) {
  return (
    <div
      className={styles.videoProduct}
      onClick={() => {
        addToSelectedProducts(id);
      }}
    >
      <div
        className={styles.productImage}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className={styles.productDetails}>
        <p>{`Name: ${name}`}</p>
        <p>{`Brand: ${brand}`}</p>
        <p>{`Price: N${price}`}</p>
      </div>

      <img src="./icons/editIcon.svg" alt="" />
    </div>
  );
}

export default VideoProduct;
