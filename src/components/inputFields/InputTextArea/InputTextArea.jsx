import styles from "./InputTextArea.module.scss";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputTextArea({ name, handleChange, value }) {
  // const [value, setValue] = useState("");

  // function handleChange(e) {
  //   setValue(e.target.value);
  // }

  return (
    <div>
      <textarea
        cols={100}
        rows={100}
        className={`${styles.inputTextArea} global-modal-mb`}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
}

export default InputTextArea;

//
// import { useEffect, useState } from "react";
// import styles from "./InputTextArea.module.scss";
//
// // eslint-disable-next-line react/prop-types
// function InputTextArea({ type = "text", label, handleInput }) {
//   const [value, setValue] = useState("");
//
//   useEffect(() => {
//     handleInput(value);
//   }, [value]);
//
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//
//   return (
//     <div className={styles.inputText}>
//       <input type={type} value={value} onChange={handleChange} />
//       <label className={value && `${styles.filled}`} htmlFor={label}>
//         {label}
//       </label>
//     </div>
//   );
// }
//
// export default InputTextArea;
