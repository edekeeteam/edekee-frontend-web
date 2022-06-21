// import React, { useState } from "react";
import NewModal from "../../NewModal/NewModal";
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
    saveDob,
    errors,
    // setAuthLoading,
    btnState,
    authSuccessful,
  } = useAuthContext();

  const formBlockStyle = {
    padding: "5px 0 5px 5px",
    marginLeft: "-5px",
    marginRight: "-5px",
  };
  return (
    <NewModal>
      <div style={{ padding: "40px" }}>
        {/* <ArrowBackIcon/> */}

        <h2 className={`${styles.modalHeader} global-modal-mb`}> Personal Info </h2>
        <p className={`${styles.textLeft} global-modal-sm-mb`}>Date of Birth</p>

        <div className={styles.modalBody}>
          <form>
            <div
              className={`${styles.formGroup} ${styles.width100} ${styles.inputContainer} global-modal-mb`}
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

            {errors.dob && (
              <p className="global-text-12 global-error-text global-modal-sm-mb">{errors.dob}</p>
            )}

            <div
              className={`${styles.formGroup} ${styles.textCenter} ${styles.py1} ${styles.mb1}`}
              style={{ clear: "left" }}
            >
              <Button
                label="Next"
                size="large"
                bgcolor="white"
                loading={authLoading}
                successful={authSuccessful}
                btnState={btnState}
                handleClick={(e) => {
                  // changeAuthModalValue();
                  // handleLogin(e);
                  // setAuthLoading(!authLoading);
                  saveDob(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </NewModal>
  );
}

export default DobInfo;
