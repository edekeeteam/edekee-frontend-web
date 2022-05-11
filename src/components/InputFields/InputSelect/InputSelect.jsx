import styles from "./InputSelect.module.scss";

function InputSelect() {
  return (
    <div className={`${styles.inputSelect} global-modal-mb`}>
      <select
        className={`${styles.formInput} ${styles.width100} ${styles.inputContainer}`}
        name="country"
      >
        <option value="Ngn"> NGN </option>
      </select>
    </div>
  );
}

export default InputSelect;
