import propTypes from "prop-types";
import styles from "./InputSelect.module.scss";

// eslint-disable-next-line react/prop-types
function InputSelect({ name, options, handleChange }) {
  return (
    <div className={`${styles.inputSelect}`}>
      <select
        className={`${styles.formInput}`}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">{name}</option>
        {options &&
          // eslint-disable-next-line react/prop-types
          options.map((option) => <option value={option.name}> {option.name}</option>)}
      </select>
    </div>
  );
}

InputSelect.propsType = {
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(Object).isRequired,
};

export default InputSelect;
