import PropTypes from "prop-types";
import styles from "../InputColorPicker/InputColorPicker.module.scss";

function InputColorPickerCancelable({ onInputChange, color, onDelete }) {
  return (
    <div className={`${styles.colorPicker} ${styles.cancelable}`}>
      <div className={styles.color} style={{ backgroundColor: color }} />
      <input type="color" value={color} onChange={(e) => onInputChange(e.target.value, color)} />
      <div
        onClick={() => onDelete(color)}
        role="button"
        onKeyDown={() => {
          onDelete(color);
        }}
        tabIndex={0}
      >
        <img src={`${process.env.PUBLIC_URL}/icons/cancel.svg`} alt="" />
      </div>
    </div>
  );
}

InputColorPickerCancelable.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InputColorPickerCancelable;
