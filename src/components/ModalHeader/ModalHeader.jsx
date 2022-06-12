import PropTypes from "prop-types";
import styles from "./ModalHeader.module.scss";

function ModalHeader({ prevStep, nextStep, canCancel, showNext }) {
  return (
    <div className={styles.Header}>
      <div>
        {canCancel && (
          <div
            className={styles.icon}
            onClick={prevStep()}
            onKeyDown={() => {
              prevStep();
            }}
            role="button"
            tabIndex={0}
          >
            <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          </div>
        )}
        {!canCancel && (
          <div
            className={styles.icon}
            onClick={prevStep()}
            onKeyDown={() => {
              prevStep();
            }}
            role="button"
            tabIndex={0}
          >
            <img src={`${process.env.PUBLIC_URL}/icons/arrow-left.svg`} alt="" />
          </div>
        )}
      </div>

      {showNext && (
        <div
          className={styles.icon}
          onClick={nextStep()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span>Next</span>
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      )}
    </div>
  );
}

ModalHeader.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  showNext: PropTypes.bool,
  canCancel: PropTypes.bool,
};

ModalHeader.defaultProps = {
  showNext: true,
  canCancel: true,
};

export default ModalHeader;
