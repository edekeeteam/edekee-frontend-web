import styles from "./InputTextArea.module.scss";

// eslint-disable-next-line react/prop-types
function InputTextArea({ name, handleChange, value, label, height }) {
  return (
    <div>
      <textarea
        cols={100}
        rows={100}
        className={`${styles.inputTextArea}`}
        value={value}
        placeholder={label}
        onChange={(e) => {
          handleChange(e);
        }}
        name={name}
        style={{ height: `${height}px` }}
      />
    </div>
  );
}

InputTextArea.defaultProps = {
  height: 100,
};

export default InputTextArea;
