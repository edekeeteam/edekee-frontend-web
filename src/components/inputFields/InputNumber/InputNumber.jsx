import styles from "./InputNumber.module.scss";

// eslint-disable-next-line react/prop-types
function InputNumber({ item, itemValue, onAdd, onSubtract }) {
  return (
    <div className={styles.inputNumber}>
      <button type="button" className={styles.button} onClick={() => onSubtract(item)}>
        -
      </button>
      <input readOnly type="number" value={itemValue} />
      <button type="button" className={styles.button} onClick={() => onAdd(item)}>
        +
      </button>
    </div>
  );
}

export default InputNumber;
