import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "../../Modal/Modal.module.scss";
// import ArrowBackIcon from '../ArrowBackIcon'

function DobInfo() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const formBlockStyle = {
    padding: "5px 0px 5px 5px",
    marginLeft: "-5px",
    marginRight: "-5px",
  };
  return (
    <Modal>
      <div>
        {/* <ArrowBackIcon/> */}

        <h2 className={styles.modalHeader}> Personal Info </h2>
        <p className={styles.textLeft}>Date of Birth</p>

        <div className={styles.modalBody}>
          <form>
            <div
              className={`${styles.formGroup} ${styles.width100} ${styles.inputContainer}`}
              style={formBlockStyle}
            >
              <input
                type="number"
                className={styles.formInput}
                placeholder="DD"
                value={day}
                maxLength="2"
                onChange={(e) => setDay(e.target.value)}
              />
              <input
                type="number"
                className={styles.formInput}
                placeholder="MM"
                value={month}
                maxLength="2"
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                type="number"
                className={styles.formInput}
                placeholder="YYYY"
                value={year}
                maxLength="4"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div
              className={`${styles.formGroup} ${styles.textCenter} ${styles.py1} ${styles.mb1}`}
              style={{ clear: "left" }}
            >
              <button type="button" className={`${styles.btn} ${styles.btnWhiteBg}`}>
                {" "}
                Next{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default DobInfo;
