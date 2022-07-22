/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./productImages.module.scss";
import apiMethods from "../../utils/apiMethods";
// import { useShopContext } from "../../context/ShopContext";
import ShopProductImage from "../../components/ShopProductImage/ShopProductImage";

function ProductImages() {
  // const { productImages } = useShopContext();
  const [productImages, setProductImages] = useState([]);
  const [productData, setProductData] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();

  const fetchProduct = () =>
    apiMethods
      .get(`product/${productId}`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res.data);
        setProductData(res.data.data);
        setProductImages(res.data.data.images);
        // setUsername(res.data.data.userName);
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

  useEffect(() => {
    // console.log(productId);
    fetchProduct();
  }, []);

  return (
    <div className={styles.productImages}>
      <div
        className={styles.backButton}
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="/icons/chevron.svg" alt="" className={styles.backChevron} />
        <p>back</p>
      </div>{" "}
      <div className={styles.heading}>
        <div className={styles.namePrice}>
          <p className={styles.name}>{productData.name}</p>

          <p className={styles.price}>{`N${productData.price}`}</p>
        </div>
      </div>
      <div className={styles.stock}>
        <p>300 items in stock</p>
      </div>
      <div className={styles.descriptionSection}>
        <p className={styles.description}>{productData.description}</p>
      </div>
      <div className={styles.productImagesContent}>
        {productImages.map((image) => (
          // console.log(image.id);
          <ShopProductImage key={image} src={image} />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
