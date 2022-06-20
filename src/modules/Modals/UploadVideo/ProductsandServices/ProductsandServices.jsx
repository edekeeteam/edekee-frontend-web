/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import VideoProduct from "../../../../components/VideoProduct/VideoProduct";
import { useUploadContext } from "../../../../context/UploadContext";
import styles from "./ProductsandServices.module.scss";

function ProductsandServices({ nextStep, prevStep }) {
  const { source } = useUploadContext();
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className={styles.productandServices}>
      <ModalHeader prevStep={prevStep} nextStep={nextStep} />
      <div className={styles.contentWrapper}>
        <div className={styles.videoSection}>
          <video src={source} style={{ height: "100%", width: "100%" }} controls>
            <track kind="captions" />
          </video>
        </div>
        <p className={styles.productsSection}>
          <p className={styles.allProducts}>All products</p>
          {showSearch ? (
            <div
              className={styles.addNewProduct}
              onClick={() => {
                setShowSearch(false);
              }}
            >
              <span className={styles.plusSign}>+</span> Add New Product
            </div>
          ) : (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                onBlur={() => {
                  setShowSearch(true);
                }}
              />
              <div className={styles.searchIcon}>
                <img src="./icons/searchIcon.svg" alt="" />
              </div>
            </div>
          )}

          <div>
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
            <VideoProduct />
          </div>
        </p>
      </div>
    </div>
  );
}

export default ProductsandServices;
