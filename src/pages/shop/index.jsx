import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiMethods from "../../utils/apiMethods";
import ShopProduct from "../../components/ShopProduct/ShopProduct";
import styles from "./shop.module.scss";

function Shop() {
  const { shopId } = useParams();
  const [categories, setCategories] = useState([]);

  const fetchCategories = () =>
    apiMethods
      .get(`/shop/${shopId}/subcategories`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res.data.data);
        setCategories(res.data.data);
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
      });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.shopContentWrapper}>
      {categories &&
        categories.map((category) => {
          console.log(category);
          return <ShopProduct />;
        })}
    </div>
  );
}

export default Shop;
