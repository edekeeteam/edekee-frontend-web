import propTypes from "prop-types";
import styles from "./Toast.module.scss";

const Success = `${process.env.PUBLIC_URL}/icons/toastSuccess.svg`;
const Error = `${process.env.PUBLIC_URL}/icons/toastError.svg`;
const Warning = `${process.env.PUBLIC_URL}/icons/toastWarning.svg`;
const Cancel = `${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`;

function Toast({ type, msg }) {
  return (
    <div className={styles.toast}>
      {/* eslint-disable-next-line no-nested-ternary */}
      <img
        src={
          // eslint-disable-next-line no-nested-ternary
          type === "success"
            ? Success
            : // eslint-disable-next-line no-nested-ternary
            type === "error"
            ? Error
            : type === "warning"
            ? Warning
            : Success
        }
        alt=""
      />
      <p>{msg}</p>
      <img src={Cancel} alt="" />
    </div>
  );
}

Toast.propTypes = {
  type: propTypes.string.isRequired,
  msg: propTypes.string.isRequired,
};

export default Toast;
