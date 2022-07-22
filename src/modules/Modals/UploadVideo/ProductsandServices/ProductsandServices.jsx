/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import VideoProduct from "../../../../components/VideoProduct/VideoProduct";
import SearchProduct from "../SearchProduct/SearchProduct";
import apiMethods from "../../../../utils/apiMethods";
import { useUploadContext } from "../../../../context/UploadContext";
import styles from "./ProductsandServices.module.scss";

function ProductsandServices({ nextStep, prevStep }) {
  const { source } = useUploadContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);
  // const [allProducts, setAllProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productContent, setProductContent] = useState("presentProducts");

  const searchProducts = (value) => {
    console.log("x");
    if (value !== "") {
      apiMethods
        .get(`/product?s=${value}`)
        .then((res) => {
          console.log(res.data.data);
          setSearchedProducts(res.data.data);
          setProductContent("searchedProducts");
          // setAllProducts(res.data.data);

          // console.log(res.data.data.shop_meta.id);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchedProducts([]);
      console.log("searchTerm is empty");
    }
  };

  const addToSelectedProducts = (id) => {
    const newSelectedProducts = searchedProducts.filter((product) => product.id === id);
    console.log(newSelectedProducts);
    // setSelectedProducts((prev) => [...prev, newSelectedProducts]);
    setSelectedProducts([...selectedProducts, ...newSelectedProducts]);
    console.log(selectedProducts);

    setProductContent("presentProducts");
    setShowSearch(false);
    setSearchTerm("");
    setSearchedProducts([]);
  };

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  const handleChange = (e) => {
    setSearchedProducts([]);
    setSearchTerm(e.target.value);
    console.log(e.target.value);
    searchProducts(e.target.value);
  };

  const handleAddNewProduct = () => {
    setProductContent("searchedProducts");
    setShowSearch(true);

    const el2 = inputRef;
    console.log(el2);

    // console.log(inputRef);
  };

  return (
    <div className={styles.productandServices}>
      <ModalHeader prevStep={prevStep} nextStep={nextStep} />
      <div className={styles.contentWrapper}>
        <div className={styles.videoSection}>
          <video src={source} style={{ height: "100%", width: "100%" }} controls>
            <track kind="captions" />
          </video>
        </div>
        <p className={styles.productsSection}>
          <p className={styles.allProducts}>All products</p>
          {!showSearch ? (
            <div
              className={styles.addNewProduct}
              onClick={() => {
                handleAddNewProduct();
              }}
            >
              <span className={styles.plusSign}>+</span> Add New Product
            </div>
          ) : (
            // <div className={styles.searchBox} ref={inputRef}>
            //   <input
            //     id="searchInput"
            //     name="searchInput"
            //     type="text"
            //     placeholder="Search"
            //     className={styles.searchInput}
            //     value={searchTerm}
            //     onBlur={() => {
            //       setShowSearch(false);
            //       // setProductContent("selectedProducts");
            //       console.log("blurred");
            //     }}
            //     onChange={(e) => {
            //       handleChange(e);
            //     }}
            //   />
            //   <div
            //     className={styles.searchIcon}
            //     onClick={() => {
            //       searchProducts();
            //     }}
            //   >
            //     <img src="./icons/searchIcon.svg" alt="" />
            //   </div>
            // </div>
            <SearchProduct
              searchTerm={searchTerm}
              setShowSearch={setShowSearch}
              handleChange={handleChange}
              searchProducts={searchProducts}
            />
          )}
          {productContent === "presentProducts" ? (
            <div style={{ border: "1px solid red" }}>
              {selectedProducts &&
                selectedProducts.map((product) => (
                  <VideoProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    image={product.primaryImage}
                  />
                ))}
            </div>
          ) : (
            <div style={{ border: "1px solid green" }}>
              {searchedProducts &&
                searchedProducts.map((product) => (
                  <VideoProduct
                    addToSelectedProducts={addToSelectedProducts}
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    image={product.primaryImage}
                  />
                ))}
            </div>
          )}
        </p>
      </div>
    </div>
  );
}

export default ProductsandServices;
