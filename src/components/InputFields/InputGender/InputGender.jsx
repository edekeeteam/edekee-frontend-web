import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputGender.module.scss";

// eslint-disable-next-line react/prop-types,camelcase,no-unused-vars
function Gender({ selectedGender, name, size }) {
  return (
    <div className={`${styles.highlight} ${selectedGender === name ? styles.active : ""}`}>
      <div className={`${styles.size} ${size === "small" ? styles.small : ""}`}>
        <input readOnly style={{ opacity: 0 }} type="radio" value={name} name="gender" />
        {/* eslint-disable-next-line camelcase */}
        <p>{name}</p>
      </div>
    </div>
  );
}

Gender.defualtProps = {
  size: "large",
};

// eslint-disable-next-line react/prop-types
function InputGender({ genders, onChange, gender, size }) {
  const [selectedGender, setSelectedGender] = useState(gender);

  function onChangeValue(event) {
    setSelectedGender(event.target.value);
    onChange(event.target.value, selectedGender);
  }

  return (
    <div className={styles.inputCategory} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        genders.map((gen) => (
          <Gender key={gen} name={gen} size={size} selectedGender={selectedGender} />
        ))
      }
    </div>
  );
}

InputGender.propTypes = {
  onChange: PropTypes.func.isRequired,
  genders: PropTypes.arrayOf(String).isRequired,
  gender: PropTypes.string,
  size: PropTypes.string,
};

InputGender.defaultProps = {
  size: "large",
  gender: "",
};

export default InputGender;
