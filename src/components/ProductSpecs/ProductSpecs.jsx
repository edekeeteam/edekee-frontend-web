import React from "react";
import styles from "./ProductSpecs.module.scss";
// import InputColor from "../InputColor/";
// import InputSize from "../";
import InputNumber from "../InputNumber/InputNumber";
// import Button from "../Button/Button";
import { useAuthContext } from "../../context/AuthContext";

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

  const { type, signUpEmail, handleInputChange, signUpPassword, handleRegistration } =
    useAuthContext();

  const handleKeyDown = () => {
    // console.log("keydown");
  };

  return (
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
          {/* <InputColor Colors={sampleColors} /> */}
        </div>
        {/* <div className={styles.sizeSection}>
          <p className={styles.sizeHeading}>Size</p>
          <InputSize sizes={sampleSize} />
        </div> */}
        <div className={styles.quantitySection}>
          <p className={styles.quantityHeading}>Quantity</p>
          <InputNumber />
        </div>
        {/* <div className={styles.buttonSection}>
          <Button size="large" label="Add to cart" bgcolor="white" />
          <Button size="large" label="Buy now" bgcolor="black" />
        </div> */}

        <div className="form-group">
          <input
            type="text"
            name="signUpEmail"
            onChange={(e) => handleInputChange(e)}
            value={signUpEmail}
            placeholder="Email"
            className="col-md-12 form-input"
          />

          <input
            type="text"
            name="signUpPassword"
            onChange={(e) => handleInputChange(e)}
            value={signUpPassword}
            placeholder="password"
            className="col-md-12 form-input"
          />
          <input
            type="text"
            name="type"
            onChange={(e) => handleInputChange(e)}
            value={type}
            placeholder="type"
            className="col-md-12 form-input"
          />

          <button
            onClick={(e) => {
              handleRegistration(e);
            }}
            type="button"
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecs;
