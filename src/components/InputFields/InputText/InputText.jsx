// import { useState } from "react";
import styles from "./InputText.module.scss";
// eslint-disable-next-line react/prop-types
function InputText({ type, label, name, handleChange, value }) {
  return (
    <div className="" style={{ width: "100%" }}>
      <div className={`${styles.inputText} `}>
        <input
          required
          type={type}
          value={value}
          onChange={(e) => handleChange(e)}
          name={name}
          autoComplete="off"
        />
        <label className={`${value ? styles.active : ""}`} htmlFor={name}>
          {label}
        </label>
      </div>
      {/* <p>Error Message</p> */}
    </div>
  );
}

export default InputText;
