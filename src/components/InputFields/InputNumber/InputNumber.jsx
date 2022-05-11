import styles from "./InputNumber.module.scss";

// eslint-disable-next-line react/prop-types
function InputNumber({ index, itemValue, onAdd, onSubtract, color }) {
  return (
    <div className={`${styles.inputNumber} ${color} ? ${styles.darker} : '`}>
      <button
        disabled={itemValue === 1}
        type="button"
        className={styles.button}
        onClick={() => onSubtract(index)}
      >
        -
      </button>
      <input readOnly type="number" value={itemValue} />
      <button type="button" className={styles.button} onClick={() => onAdd(index)}>
        +
      </button>
    </div>
  );
}

export default InputNumber;
