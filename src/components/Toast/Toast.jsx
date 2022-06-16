import propTypes from "prop-types";
import styles from "./Toast.module.scss";
import useTimeout from "../../hooks/useTimeout";

const Success = `${process.env.PUBLIC_URL}/icons/toastSuccess.svg`;
const Error = `${process.env.PUBLIC_URL}/icons/toastError.svg`;
const Warning = `${process.env.PUBLIC_URL}/icons/toastWarning.svg`;
const Cancel = `${process.env.PUBLIC_URL}/icons/cancelDark.svg`;

function Toast({ type, msg, close }) {
  useTimeout(close, 3000);
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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img onClick={close} src={Cancel} alt="" />
    </div>
  );
}

Toast.propTypes = {
  type: propTypes.string.isRequired,
  msg: propTypes.string.isRequired,
  close: propTypes.func.isRequired,
};

export default Toast;
