import React from "react";
import styles from "./ProfileName.module.scss";

// eslint-disable-next-line react/prop-types
export default function ProfileName({ name }) {
  return <p className={styles.profileName}>{name}</p>;
}
