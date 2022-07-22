/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
import apiMethods from "../../utils/apiMethods";
import ShopProduct from "../ShopProduct/ShopProduct";
import styles from "./ShopTabContent.module.scss";

function ShopTabContent() {
  const [hasShop] = useState(true);
  const [pinnedProducts, setPinnedProducts] = useState([]);
  // const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");
  const shopId = localStorage.getItem("shopId");
  const userId = localStorage.getItem("userId");
  const productRoute = `/profile/${userId}/shop/${shopId}/category`;

  const fetchPinnedProducts = () => {
    apiMethods
      .get(`/shop/${shopId}/pinned_products`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res);
        setPinnedProducts(res.data.data);

        // setCategories(res.data.data);
        // if (res.data.success) {
        //   const categoryId = res.data.data[0].id;
        //   apiMethods.get(`/shop/${shopId}/subcategory/${categoryId}/product`).then((response) => {
        //     console.log(response);
        //   });
        // }
        // console.log(res.data.data.shop_meta.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPinnedProducts();
  }, []);

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
          {pinnedProducts &&
            pinnedProducts.map((product) => {
              console.log(product);
              return (
                <ShopProduct
                  type="pinned"
                  profileOwner={userId}
                  shop={shopId}
                  details={product}
                  link={productRoute}
                />
              );
            })}
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
