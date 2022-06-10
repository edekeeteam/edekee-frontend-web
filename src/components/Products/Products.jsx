/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useProductsContext } from "../../context/ProductsContext";
import Product from "../Product/Product";
import styles from "./Products.module.scss";

function Products({ setVideoModalTabValue }) {
  const { products } = useProductsContext();

  // console.log(products);
  return (
    <div className={styles.products}>
      {products.data ? (
        products.data.map((product) => {
          if (product) {
            return (
              <Product key={uuidv4()} product={product} changeVideoTab={setVideoModalTabValue} />
            );
          }
        })
      ) : (
        <div className={styles.noProductsWrapper}>
          <span className={styles.noProducts}>No products found</span>
        </div>
      )}
    </div>
  );
}

export default Products;
