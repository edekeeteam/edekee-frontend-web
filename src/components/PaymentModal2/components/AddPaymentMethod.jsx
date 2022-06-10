// import React, { useState } from "react";
// import cardTypeImage from "../../../assets/images/mastercard.png";
// import cardTypeImage from "../../../images/mastercard.png";
// import styles from "../../Modal/Modal.module.scss";

function AddPaymentMethod() {
  //   const [cardNumber, setCardNumber] = useState("");
  //   const [expiryDate, setExpiryDate] = useState("");
  //   const [cvv, setCvv] = useState("");
  return (
    <div>
      {/* <div
        className={`${styles.width100} ${styles.py1}`}
        style={{ paddingBottom: "2.5em", marginTop: "3em" }}
      >
        <div className={`${styles.floatLeft}`}> Payment </div>
        <div className={`${styles.floatRight} ${styles.textSmall}`}>
          <button type="button" className={`${styles.btnTransparentBg}`}>
            <i className={`fas fa-check-circle ${styles.textPurple}`} style={{ fontSize: 14 }} />{" "}
            Save card details
          </button>
        </div>
      </div>

      <div
        className={`${styles.formGroup} ${styles.formGroupLight} ${styles.width100}`}
        style={{ clear: "left" }}
      >
        <input
          type="number"
          className={`${styles.width100} ${styles.textCenter} ${styles.formInput} ${styles.formInputDark}`}
          placeholder="5348 **** **** ****"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div
          className={`${styles.inputContainer} ${styles.py1}`}
          style={{ paddingLeft: 5, marginLeft: -5 }}
        >
          <input
            type="text"
            className={`${styles.formInput} ${styles.formInputDark}`}
            placeholder="02/22"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <input
            type="text"
            className={`${styles.formInput} ${styles.formInputDark}`}
            placeholder="435"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className={styles.floatRight}>
          <img src={cardTypeImage} height="20px" width="auto" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default AddPaymentMethod;
