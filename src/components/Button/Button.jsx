import React from "react";
import styles from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
function Button({ size, label, bgcolor, handleClick }) {
  return (
    <div
      className={`${styles.button} ${size === "large" ? styles.large : ""} ${
        bgcolor === "white"
          ? styles.bgWhite
          : bgcolor === "black"
          ? styles.bgBlack
          : ""
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
}

export default Button;
