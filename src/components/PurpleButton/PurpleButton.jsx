import React from "react";
import styles from "./PurpleButton.module.scss";

// eslint-disable-next-line react/prop-types
function PurpleButton({ label, handleClick }) {
  const handleKeydown = () => {};
  return (
    <div
      className={`${styles.purpleButton} `}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {
        handleKeydown();
      }}
    >
      {label}
    </div>
  );
}

export default PurpleButton;
