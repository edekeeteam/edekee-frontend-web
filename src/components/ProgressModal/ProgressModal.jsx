/* eslint-disable react/prop-types */
import React from "react";

import styles from "./ProgressModal.module.scss";

function ProgressModal({ percentage }) {
  return (
    <div className={styles.progressModal}>
      <p>Creating Shop</p>
      <img
        className={styles.overlayImage}
        src={`${process.env.PUBLIC_URL}/icons/edekeeLogoPurple.svg`}
        alt=""
      />
      <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
      <p>{`${percentage}%`}</p>
    </div>
  );
}

export default ProgressModal;
