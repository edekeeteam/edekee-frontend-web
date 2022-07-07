import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./category.module.scss";
import apiMethods from "../../utils/apiMethods";
import ShopProduct from "../../components/ShopProduct/ShopProduct";
import { useShopContext } from "../../context/ShopContext";

function Category() {
  const { categoryId, shopId } = useParams();
  const [products, setProducts] = useState([]);
  const { categories } = useShopContext();
  // shop/b79bbfca-1c21-4563-ad7f-c1bea[…]8ef16-2ea5-4518-8063-0b7a961b7d5b/product
  console.log(categoryId);
  const fetchCategories = () =>
    apiMethods
      .get(`/shop/${shopId}/subcategory/${categoryId}/product`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res.data.data);
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
      });

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <div>
        {categories.map((category) => (
          <p key={category.id}>category</p>
        ))}
      </div>
      <div className={styles.products}>
        {products.map((product) => (
          <ShopProduct key={product.id} type="product" productDetails={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
