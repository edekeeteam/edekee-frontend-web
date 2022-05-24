import { useState } from "react";
import { useBuyContext } from "../../../context/BuyContext";
import styles from "./InputSize.module.scss";

// eslint-disable-next-line react/prop-types
function Size({ size, activeSize }) {
  return (
    <div className={`${styles.highlight} ${activeSize === size ? styles.active : ""}`}>
      <div className={styles.size}>
        <input readOnly style={{ opacity: 0 }} type="radio" value={size} name="size" />
        <p>{size}</p>
      </div>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function InputSize({ sizes, handleChange }) {
  const [activeSize, setActiveSize] = useState("");
  // const [setSize] = useState("");
  const { handleSizeChange } = useBuyContext();
  // eslint-disable-next-line react/prop-types

  function onChangeValue(event) {
    setActiveSize(event.target.value);
    // setSize(event.target.value);
    handleChange(event.target.value);
    handleSizeChange(event.target.value);
  }

  return (
    <div className={styles.inputSize} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        sizes.map((size) => (
          // eslint-disable-next-line react/jsx-key
          <Size key={size} activeSize={activeSize} size={size} />
        ))
      }
    </div>
  );
}

export default InputSize;
