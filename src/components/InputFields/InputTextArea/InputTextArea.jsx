import styles from "./InputTextArea.module.scss";

// eslint-disable-next-line react/prop-types
function InputTextArea({ name, handleChange, value, label }) {
  return (
    <div>
      <textarea
        cols={100}
        rows={100}
        className={`${styles.inputTextArea}`}
        value={value}
        placeholder={label}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        name={name}
      />
    </div>
  );
}

export default InputTextArea;
