/* eslint-disable no-nested-ternary */
import React from "react";
import Shimmer from "../Shimmer/Shimmer";
import styles from "./Skeleton.module.scss";

// eslint-disable-next-line react/prop-types
function Skeleton({ type }) {
  return (
    <div className={styles.skeletonWrapper}>
      <div
        className={`${styles.skeleton} ${
          type === "video" ? styles.video : type === "interest" ? styles.interest : ""
        }`}
      />

      <Shimmer />
    </div>
  );
}

export default Skeleton;
