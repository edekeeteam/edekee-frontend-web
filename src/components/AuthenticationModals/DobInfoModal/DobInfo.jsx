// import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "../../Modal/Modal.module.scss";
import Button from "../../Button/Button";
// import ArrowBackIcon from '../ArrowBackIcon'
import { useAuthContext } from "../../../context/AuthContext";

function DobInfo() {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");

  const {
    handleInputChange,
    day,
    month,
    year,
    authLoading,
    setAuthLoading,
    btnState,
    authSuccessful,
  } = useAuthContext();

  const formBlockStyle = {
    padding: "5px 0 5px 5px",
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
                name="day"
                placeholder="DD"
                value={day}
                maxLength="2"
                onChange={(e) => handleInputChange(e)}
                // onChange={(e) => setDay(e.target.value)}
              />
              <input
                type="number"
                name="month"
                className={styles.formInput}
                placeholder="MM"
                value={month}
                maxLength="2"
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="number"
                name="year"
                className={styles.formInput}
                placeholder="YYYY"
                value={year}
                maxLength="4"
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div
              className={`${styles.formGroup} ${styles.textCenter} ${styles.py1} ${styles.mb1}`}
              style={{ clear: "left" }}
            >
              <Button
                label="SignIn"
                size="large"
                bgcolor="white"
                loading={authLoading}
                successful={authSuccessful}
                btnState={btnState}
                handleClick={() => {
                  // changeAuthModalValue();
                  // handleLogin(e);
                  setAuthLoading(!authLoading);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default DobInfo;
