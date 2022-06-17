/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./PackageCard.module.scss";

function PackageCard({ price, benefits, index, onDelete }) {
  return (
    <div className={styles.packageCard}>
      <img
        src="./icons/previewCancelBtn.svg"
        alt=""
        className={styles.cancel}
        onClick={() => {
          onDelete(index);
        }}
      />
      <div className={styles.plan}>Exclusive</div>
      <div className={styles.price}>
        <p>
          N{price}/<span className={styles.nightText}>Night</span>
        </p>
      </div>
      <div className={styles.benefits}>
        <p className={styles.benefitsHeading}>Benefits</p>
        <ul>
          <li>{benefits}</li>

          {/* <li>Pool access</li>
          <li>Pool access</li>
          <li>Pool access</li>
          <li>Pool access</li>
          <li>Pool access</li>
          <li>Pool access</li>
          <li>Pool access</li> */}
        </ul>
      </div>
    </div>
  );
}

export default PackageCard;
