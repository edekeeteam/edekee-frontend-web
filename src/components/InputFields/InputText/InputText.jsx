import { useState } from "react";

import styles from "./InputText.module.scss";

// eslint-disable-next-line react/prop-types
function InputText({ type, label, name, handleChange, value }) {
  const [val, setVal] = useState(() => value);

  function handleInput(e) {
    setVal(e.target.value);
    handleChange(e.target.value);
  }
  //
  // useEffect(() => {
  // 	handleInput(val);
  // }, [setVal]);

  return (
    <div className={`${styles.inputText} global-modal-mb`}>
      <input type={type} value={val} onChange={(e) => handleInput(e)} name={name} />
      <label className={val && `${styles.filled}`} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default InputText;
