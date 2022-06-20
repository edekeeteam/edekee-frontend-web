/* eslint-disable no-nested-ternary */
import React from "react";
import styles from "./ShopProduct.module.scss";

function ShopProduct() {
  const type = "category";

  return (
    <div className={styles.shopProduct}>
      {type === "pinned" ? (
        <img src="/icons/pinIcon.svg" className={styles.pinIcon} alt="" />
      ) : (
        <img src="/icons/optionsIcon.svg" className={styles.optionsIcon} alt="" />
      )}
      <div className={styles.badge}>
        <div className={styles.badgeWrapper}>
          <div className={styles.right}>
            <p className={styles.productName}>
              {type === "pinned" ? "Pinned" : type === "category" ? "category" : ""}
            </p>
            {type === "pinned" ? (
              <span className={styles.stockCount}> 300 items in stock</span>
            ) : (
              ""
            )}
          </div>
          <div className={styles.left}>
            {type === "pinned" ? (
              <img src="/icons/boost.svg" alt="" className={styles.boostIcon} />
            ) : type === "category" || type === "product" ? (
              <img src="/icons/whiteChevron.svg" alt="" className={styles.whiteChevron} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;
