import { useEffect, useState } from "react";
import styles from "./InputText.module.scss";

// eslint-disable-next-line react/prop-types
function InputText({ type = "text", label, handleInput }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    handleInput(value);
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles.inputText}>
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && `${styles.filled}`} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}

export default InputText;
