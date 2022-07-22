/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./category.module.scss";
import apiMethods from "../../utils/apiMethods";
import ShopProduct from "../../components/ShopProduct/ShopProduct";
import { useShopContext } from "../../context/ShopContext";

function Category() {
  const navigate = useNavigate();
  const { userId, categoryId, shopId } = useParams();
  const [products, setProducts] = useState([]);
  const { categories } = useShopContext();
  const [username, setUsername] = useState("");

  // shop/b79bbfca-1c21-4563-ad7f-c1bea[…]8ef16-2ea5-4518-8063-0b7a961b7d5b/product
  console.log(categoryId);
  const fetchCategories = () =>
    apiMethods
      .get(`/shop/${shopId}/subcategory/${categoryId}/product`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res);
        setProducts(res.data.data);
        // setCategories(res.data.data);
        // if (res.data.success) {
        //   const categoryId = res.data.data[0].id;
        //   apiMethods.get(`/shop/${shopId}/subcategory/${categoryId}/product`).then((response) => {
        //     console.log(response);
        //   });
        // }
        // console.log(res.data.data.shop_meta.id);
      })
      .then((response) => {
        console.log(response);
        console.log(categories);
      });

  const fetchUser = () =>
    apiMethods
      .get(`user/${userId}`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res);
        setUsername(res.data.data.userName);
        //  setProducts(res.data.data);
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
        //  console.log(categories);
      });

  const productRoute = `/profile/${userId}/shop/${shopId}/category/${categoryId}/product`;

  useEffect(() => {
    fetchCategories();
    fetchUser();
  }, []);
  return (
    <div>
      <div className={styles.headingSection}>
        <div
          className={styles.backButton}
          onClick={() => {
            navigate(`/profile/${userId}/shop/${shopId}`);
          }}
        >
          <img src="/icons/chevron.svg" alt="" className={styles.backChevron} />
          <p>back</p>
        </div>
        {username && <p className={styles.headingText}>{`${username}'s fashion shop`}</p>}
      </div>
      <div className={styles.categorySection}>
        {/* {[0, 1, 2].map((category) => ( */}
        {categories.map((category) => (
          <div className={styles.category}>
            <div
              key={category.id}
              className={`${styles.categoryBtn} ${styles.selected}`}
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.products}>
        {products.map((product) => (
          <ShopProduct
            key={product.id}
            type="product"
            details={product}
            profileOwner={userId}
            link={productRoute}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
