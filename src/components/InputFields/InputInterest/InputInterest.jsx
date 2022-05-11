import styles from "./InputInterest.module.scss";

// eslint-disable-next-line react/prop-types
const checkActiveState = (x, id) => (x.includes(id) ? styles.active : "");
// eslint-disable-next-line react/prop-types
function InputInterest({ name, id, image, checkedInterestsState, handleOnChange }) {
  return (
    <div className={styles.interest}>
      <div
        className={`${styles.highlight}
        ${checkActiveState(checkedInterestsState, id)}`}
      >
        <div className={styles.size}>
          {/* // key={props.index} */}
          <input
            style={{ opacity: 0 }}
            type="checkbox"
            id={id}
            name={name}
            value={id}
            checked={checkedInterestsState[id]}
            onChange={() => handleOnChange(id)}
          />
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default InputInterest;
