import PropTypes from "prop-types";
import styles from "./ValueCancelable.module.scss";

function ValueCancelable({ value, onDelete, unit }) {
  return (
    <div className={` ${styles.cancelable}`}>
      <p>
        {value} {unit}
      </p>
      <div
        onClick={() => onDelete(value)}
        role="button"
        onKeyDown={() => {
          onDelete(value);
        }}
        tabIndex={0}
      >
        <img src={`${process.env.PUBLIC_URL}/icons/cancel.svg`} alt="" />
      </div>
    </div>
  );
}

ValueCancelable.propTypes = {
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  unit: PropTypes.string,
};

ValueCancelable.defaultProps = {
  unit: "",
};

export default ValueCancelable;
