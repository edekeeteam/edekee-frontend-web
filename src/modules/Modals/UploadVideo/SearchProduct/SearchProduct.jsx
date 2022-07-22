/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect } from "react";
import styles from "../ProductsandServices/ProductsandServices.module.scss";

function SearchProduct({ setShowSearch, searchTerm, handleChange, searchProducts }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const el = inputRef;
    el.current.focus();
    console.log(el);
  }, []);
  return (
    <div className={styles.searchBox}>
      <input
        ref={inputRef}
        name="searchInput"
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchTerm}
        onBlur={() => {
          setShowSearch(false);
          // setProductContent("selectedProducts");
          console.log("blurred");
        }}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div
        className={styles.searchIcon}
        onClick={() => {
          searchProducts();
        }}
      >
        <img src="./icons/searchIcon.svg" alt="" />
      </div>
    </div>
  );
}

export default SearchProduct;
