import React from "react";
import styles from "./ProductSpecs.module.scss";
import InputColor from "../inputFields/InputColor/InputColor";
import InputSize from "../inputFields/InputSize/InputSize";
// import InputSize from "../";
import { InputNumber } from "../inputFields";
import Button from "../Button/Button";
import { useAuthContext } from "../../context/AuthContext";
import Modal from "../Modal/Modal";

function ProductSpecs() {
  const sampleColors = [
    {
      color: "green",
    },
    {
      color: "red",
    },
    {
      color: "yellow",
    },
    {
      color: "blue",
    },
    {
      color: "gray",
    },
  ];
  const sampleSize = [
    {
      size: "xl",
    },
    {
      size: "sm",
    },
    {
      size: "lg",
    },
    {
      size: "md",
    },
  ];

  // const { type, signUpEmail, handleInputChange, signUpPassword, handleRegistration } =
  useAuthContext();

  const handleKeyDown = () => {
    // console.log("keydown");
  };

  return (
    <Modal
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
          <InputColor Colors={sampleColors} />
        </div>
        <div className={styles.sizeSection}>
          <p className={styles.sizeHeading}>Size</p>
          <InputSize sizes={sampleSize} />
        </div>
        <div className={styles.quantitySection}>
          <p className={styles.quantityHeading}>Quantity</p>
          <InputNumber />
        </div>
        <div className={styles.buttonSection}>
          <Button size="large" label="Add to cart" bgcolor="white" />
          <Button size="large" label="Buy now" bgcolor="black" />
        </div>
      </div>
    </Modal>
  );
}

export default ProductSpecs;
