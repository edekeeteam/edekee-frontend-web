import propTypes from "prop-types";
import styles from "./Popup.module.scss";

// eslint-disable-next-line react/prop-types
function Popup({ setOpen, open, action }) {
  function toggle() {
    setOpen();
  }
  return (
    open && (
      <div className={styles.popup}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.container}>
          <p>Leaving?</p>
          <p>Your edits will not be saved if you leave.</p>
          <div>
            <button type="button" onClick={toggle}>
              Stay
            </button>
            <button
              type="button"
              onClick={() => {
                action();
              }}
            >
              Delete
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
