/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ShopProduct from "../ShopProduct/ShopProduct";
import styles from "./ShopTabContent.module.scss";

function ShopTabContent() {
  const [hasShop] = useState(true);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const products = 5;
  return (
    <div className={styles.shopTabContainer}>
      <div
        className={styles.viewShop}
        onClick={() => {
          navigate(`/profile/${userId}/shop`);
        }}
      >
        <p className={styles.viewShopText}>View Shop </p>
        <span>
          <img src="/icons/rightChevron.svg" className={styles.rightChevron} alt="" />
        </span>
      </div>
      {!hasShop ? (
        <div className={styles.emptyShop}>
          <p className="global-text-20 global-modal-mb">Build your shop</p>
          <p className="global-text-12 global-modal-mb">
            Create your shop and recieve orders from videos across the web.
          </p>

          <Button label="Lets go" bgcolor="white" size="small" />
        </div>
      ) : products ? (
        <div className={styles.shopContentWrapper}>
          <ShopProduct />
          <ShopProduct />
          <ShopProduct />
          <ShopProduct />
          <ShopProduct />

          <ShopProduct />
        </div>
      ) : !products ? (
        <div>
          <p>You have no products</p>
          <p>View Shop</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShopTabContent;
