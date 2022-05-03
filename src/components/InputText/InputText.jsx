import styles from "./InputText.module.scss";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputText({ type, label, name, handleChange, value }) {
  // const [value, setValue] = useState("");

  // function handleChange(e) {
  //   setValue(e.target.value);
  // }

  return (
    <div className={`${styles.inputText} global-modal-mb`}>
      <input type={type} value={value} onChange={handleChange} name={name} />
      <label className={value && `${styles.filled}`} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default InputText;
