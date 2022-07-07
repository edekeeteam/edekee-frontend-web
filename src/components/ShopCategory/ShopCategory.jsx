/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ShopCategory.module.scss";

function ShopCategory({ type, details, productDetails }) {
  const navigate = useNavigate();
  // const type = "category";
  const { userId, shopId } = useParams();

  // console.log(params);

  const handleClick = () => {
    if (type === "category") {
      navigate(`/profile/${userId}/shop/${shopId}/category/${details.id}`);
    } else if (type === "product") {
      navigate(
        `/profile/${userId}/shop/${shopId}/category/${details.id}/product/${productDetails.id}`
      );
    }
  };

  return (
    <div
      className={styles.shopProduct}
      onClick={() => {
        handleClick();
      }}
    >
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

export default ShopCategory;
