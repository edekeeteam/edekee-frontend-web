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

// // eslint-disable-next-line react/prop-types
// function InputNumber({ item, onAdd, onSubtract }) {
//   // const [value, setValue] = useState();
//
//   // function handleIncrement() {
//   //   setValue(value + 1);
//   // }
//
//   // function handleDecrement() {
//   //   setValue(value - 1);
//   // }
//
//   return (
//     <div className={styles.inputNumber}>
//       <button className={styles.button} onClick={() => onSubtract(item)} type="button">
//         -
//       </button>
//       {/* <input readOnly={true} type="number" value={item.qty}/> */}
//       <button className={styles.button} onClick={() => onAdd(item)} type="button">
//         +
//       </button>
//     </div>
//   );
// }
//
// export default InputNumber;
