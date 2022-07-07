/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
import ShopProduct from "../ShopProduct/ShopProduct";
import styles from "./ShopTabContent.module.scss";

function ShopTabContent() {
  const [hasShop] = useState(true);

  // const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");
  const shopId = localStorage.getItem("shopId");
  const userId = localStorage.getItem("userId");

  const products = 5;
  return (
    <div className={styles.shopTabContainer}>
      <Link
        to={`/profile/${userId}/shop/${shopId}`}
        className={styles.viewShop}
        // onClick={() => {
        //   navigate(`shop/${shopId}`);
        // }}
      >
        <p className={styles.viewShopText}>View Shop </p>
        <span>
          <img src="/icons/rightChevron.svg" className={styles.rightChevron} alt="" />
        </span>
      </Link>
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
          <ShopProduct type="pinned" />
          <ShopProduct type="pinned" />
          <ShopProduct type="pinned" />
          <ShopProduct type="pinned" />
          <ShopProduct type="pinned" />

          <ShopProduct type="pinned" />
        </div>
      ) : !products ? (
        <div>
          <p>You have no products</p>
          <p>View Shop</p>
        </div>
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
}

export default ShopTabContent;
