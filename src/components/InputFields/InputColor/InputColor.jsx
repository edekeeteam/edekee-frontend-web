import { useState } from "react";
import styles from "./InputColor.module.scss";

// eslint-disable-next-line react/prop-types
function ColorInput({ color, activeColor }) {
  return (
    <div className={`${styles.highlight} ${activeColor === color ? styles.active : ""}`}>
      <div className={styles.color} style={{ backgroundColor: color }}>
        <input readOnly style={{ opacity: 0 }} type="radio" value={color} name="colorName" />
      </div>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function InputColor({ Colors, handleChange }) {
  const [activeColor, setActiveColor] = useState("");
  // eslint-disable-next-line react/prop-types

  function onChangeValue(event) {
    setActiveColor(event.target.value);
    handleChange(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className={styles.inputColor} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        Colors.map((color) => (
          // eslint-disable-next-line react/jsx-key
          <ColorInput key={color.name} activeColor={activeColor} color={color.color} />
        ))
      }
    </div>
  );
}

export default InputColor;
