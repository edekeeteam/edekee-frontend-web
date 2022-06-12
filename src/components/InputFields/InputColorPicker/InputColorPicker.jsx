import PropTypes from "prop-types";
import styles from "./InputColorPicker.module.scss";

function InputColorPicker({ onInputKeyUp }) {
  return (
    <div className={styles.colorPicker}>
      <img src={`${process.env.PUBLIC_URL}/icons/color-picker.svg`} alt="" />
      <input type="color" onKeyUp={(e) => onInputKeyUp(e.target.value)} />
    </div>
  );
}

InputColorPicker.propTypes = {
  onInputKeyUp: PropTypes.func.isRequired,
};

export default InputColorPicker;
