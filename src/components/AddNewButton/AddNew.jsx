import propTypes from "prop-types";
import styles from "./AddNew.module.scss";

function AddNew({ text, handleAdd }) {
  return (
    <div
      className={styles.addNew}
      onClick={handleAdd}
      onKeyDown={handleAdd}
      role="button"
      tabIndex={0}
    >
      <img src={`${process.env.PUBLIC_URL}/icons/add.svg`} alt="" />
      <span>{text}</span>
    </div>
  );
}

AddNew.propTypes = {
  text: propTypes.string.isRequired,
  handleAdd: propTypes.func.isRequired,
};

export default AddNew;
