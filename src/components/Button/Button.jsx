/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
function Button({ size, label, bgcolor, handleClick, loading, successful, btnState, shape }) {
  return (
    <button
      className={`${styles.button} ${size === "large" ? styles.large : ""} ${
        bgcolor === "white" ? styles.bgWhite : bgcolor === "black" ? styles.bgBlack : ""
      } ${successful && styles.bgPurple} ${shape === "square" && styles.square}`}
      disabled={btnState}
      onClick={handleClick}
      type="submit"
    >
      {!loading && !successful ? (
        label
      ) : loading ? (
        <div className={styles.load} />
      ) : successful ? (
        <div className={`${styles.checkmark} ${styles.draw}`} />
      ) : (
        ""
      )}
    </button>
  );
}

Button.defaultProps = {
  loading: false,
  successful: false,
  btnState: false,
};

export default Button;
