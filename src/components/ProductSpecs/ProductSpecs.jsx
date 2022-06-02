import React from "react";
import styles from "./ProductSpecs.module.scss";
import { InputColor, InputSize, InputNumber } from "../InputFields";
// import InputSize from "../inputFields/InputSize";
// import InputSize from "../";
// import { InputNumber } from "../inputFields";
import Button from "../Button/Button";
// import { useAuthContext } from "../../context/AuthContext";
import NewModal from "../NewModal/NewModal";
import { useBuyContext } from "../../context/BuyContext";
import { useModalContext } from "../../context/ModalContext";
import { useProductsContext } from "../../context/ProductsContext";

function ProductSpecs() {
  // const sampleColors = [
  //   {
  //     color: "green",
  //   },
  //   {
  //     color: "red",
  //   },
  //   {
  //     color: "yellow",
  //   },
  //   {
  //     color: "blue",
  //   },
  //   {
  //     color: "gray",
  //   },
  // ];
  // const sampleSize = [
  //   {
  //     size: "xl",
  //   },
  //   {
  //     size: "sm",
  //   },
  //   {
  //     size: "lg",
  //   },
  //   {
  //     size: "md",
  //   },
  // ];

  const { handleColorChange, handleSizeChange, quantity, handleQuantityChange, addToCart } =
    useBuyContext();
  const { setModalValue } = useModalContext();
  const { productDetails } = useProductsContext();
  const { properties } = productDetails;
  console.log(properties);
  //  size, setSize, quantity, setQuantity,
  const handleKeyDown = () => {
    // console.log("keydown");
  };

  const handleAdd = (index) => {
    console.log(properties.colors);
    handleQuantityChange(quantity + index);
    // console.log(quantity);
  };
  const handleSubtract = (index) => {
    handleQuantityChange(quantity - index);
    // console.log(quantity);
  };

  // const changeColor = () => {
  //   setColor();
  // };

  return (
    <NewModal>
      <div
        className={styles.productSpecs}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown()}
        role="button"
        tabIndex="-1"
      >
        <div className={styles.productSpecsWrapper}>
          <div className={styles.colorsSection}>
            <p className={styles.colorsHeading}>Colors</p>
            <InputColor Colors={properties.color} handleChange={handleColorChange} />
          </div>
          <div className={styles.sizeSection}>
            <p className={styles.sizeHeading}>Size</p>
            <InputSize sizes={properties.size} handleChange={handleSizeChange} />
          </div>
          <div className={styles.quantitySection}>
            <p className={styles.quantityHeading}>Quantity</p>
            <InputNumber itemValue={quantity} onAdd={handleAdd} onSubtract={handleSubtract} />
          </div>
          <div className={styles.buttonSection}>
            <Button
              size="large"
              label="Add to cart"
              bgcolor="black"
              handleClick={() => {
                addToCart();
              }}
            />
            <Button
              size="large"
              label="Buy now"
              bgcolor="white"
              handleClick={() => {
                console.log("change");
                setModalValue("paymentmodal");
              }}
            />
          </div>
        </div>
      </div>
    </NewModal>
  );
}

export default ProductSpecs;
