import PropTypes from "prop-types";
import styles from "./InputCheckbox.module.scss";

// eslint-disable-next-line react/prop-types
function InputCheckbox({ checked, toggleCheck, name, value }) {
  return (
    <div className={styles.inputCheckbox}>
      <input
        name={name}
        value={value}
        checked={checked}
        onChange={() => toggleCheck()}
        type="checkbox"
      />
      <span className={styles.checkMark} />
    </div>
  );
}

InputCheckbox.propsType = {
  checked: PropTypes.bool.isRequired,
  toggleCheck: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputCheckbox;
