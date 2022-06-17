import propTypes from "prop-types";
import styles from "./Popup.module.scss";

// eslint-disable-next-line react/prop-types
function Popup({ setOpen, open, action }) {
  function toggle() {
    setOpen();
  }

  function handleAction() {
    action();
  }
  return (
    open && (
      <div className={styles.popup}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.container}>
          <p className="global-text-24 global-modal-mb">Leaving?</p>
          <p className="global-text-12 global-modal-mb">
            Your edits will not be saved if you leave.
          </p>
          <div className={`${styles.buttons}`}>
            <button className="global-upload-btn" type="button" onClick={toggle}>
              Stay
            </button>
            <button
              className={`global-upload-btn ${styles.delete}`}
              type="button"
              onClick={() => {
                handleAction();
                toggle();
              }}
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    )
  );
}

Popup.propsType = {
  setOpen: propTypes.func.isRequired,
  action: propTypes.func.isRequired,
  open: propTypes.bool,
};

Popup.defaultProps = {
  open: true,
};

export default Popup;
