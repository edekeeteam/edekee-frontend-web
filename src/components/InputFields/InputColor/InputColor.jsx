import { useState } from "react";
import { useBuyContext } from "../../../context/BuyContext";
import { useProductsContext } from "../../../context/ProductsContext";
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
  const { setColor } = useProductsContext();
  const { handleColorChange } = useBuyContext();

  // eslint-disable-next-line react/prop-types

  function onChangeValue(event) {
    console.log(event.target.value);
    setActiveColor(event.target.value);
    setColor(event.target.value);
    handleChange(event.target.value);
    handleColorChange(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className={styles.inputColor} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        Colors.map((color) => (
          <ColorInput
            key={color.code ? color.code : color}
            activeColor={activeColor}
            color={color.code ? color.code : color}
          />
        ))
      }
    </div>
  );
}

export default InputColor;
