import React from "react";
import "../../css/auth.css";
// import ArrowBackIcon from "../ArrowBackIcon";
import styles from "../../view/Modal/Modal.module.scss";

function GenderModal() {
  // const [gender, setGender] = useState(null);
  return (
    <div>
      {/* <ArrowBackIcon /> */}
      <h2 className={styles.modalHeader}> Personal Info </h2>
      <p className="text-left p-14">Gender</p>

      <div className={`${styles.modalBody}`}>
        <form>
          <div className={`${styles.width100} ${styles.formGroup} ${styles.inputContainer}`}>
            <div className={styles.radioCircle}>
              <span> Male </span>
            </div>
            <div className={styles.radioCircle}>
              <span> Female </span>
            </div>
            <div className={styles.radioCircle}>
              <span> Others </span>
            </div>
          </div>

          <div
            className={`${styles.textCenter} ${styles.formGroup} ${styles.py2}`}
            style={{ clear: "left" }}
          >
            <button type="button" className={`${styles.btn} ${styles.btnWhiteBg}`}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GenderModal;
