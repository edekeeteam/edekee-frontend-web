// import { useState } from "react";
import styles from "./InputText.module.scss";
// eslint-disable-next-line react/prop-types
function InputText({ type, label, name, handleChange, value }) {
  // const [val, setVal] = useState(() => value);
  // function handleInput(e) {
  //   setVal(e.target.value);
  //   handleChange(e.target.value);
  // }

  // useEffect(() => {
  // 	handleInput(val);
  // }, [setVal]);

  return (
    <div className="" style={{ width: "100%" }}>
      <div className={`${styles.inputText} `}>
        <input
          required
          type={type}
          value={value}
          onChange={(e) => handleChange(e)}
          name={name}
          placeholder=""
          autoComplete="off"
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {/* <p>Error Message</p> */}
    </div>
  );
}

export default InputText;
