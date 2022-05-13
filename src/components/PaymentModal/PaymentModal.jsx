// import React, { useState } from "react";
// import locationImg from "../../assets/images/location.png";
// import PaymentMethodModal from "./components/PaymentMethodModal";
// import AddPaymentMethod from "./components/AddPaymentMethod";
// import style1 from "./PaymentModal.module.scss";
// import styles from "../Modal/Modal.module.scss";

import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./PaymentModal.module.scss";
import NewModal from "../NewModal/NewModal";
import { InputText } from "../InputFields";
import Button from "../Button/Button";

function PaymentModal() {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required("card number required").min(16, "card number not valid"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <NewModal>
      <div className={styles.paymentModal}>
        <div className={styles.topPaymentModal}>
          <p className={styles.topHeading}>Address</p>
          <div className={styles.topAddressInput}>
            <div className={styles.locationImg} />
            <div className={styles.input}>
              <InputText label="Input Address" />
            </div>
          </div>
        </div>

        {/* <div className={styles.middlePaymentModal}>
          <div className={styles.middleHeading}>
            <div className={styles.middleHeadingLeft}>
              <p>Payment</p>
            </div>
            <div className={styles.middleHeadingRight}>
              <p className={styles.addNewCardText}>+ Add new Card</p>
            </div>
          </div>
          <div className={styles.middleBottom}>
            <div className={`${styles.card} ${styles.card1}`} />
            <div className={`${styles.card} ${styles.card2}`} />
            <div className={`${styles.card} ${styles.card3}`} />
          </div>
        </div> */}

        <div className={styles.newCard}>
          <form className={styles.newCardForm} onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="cardNumber"
              onChange={formik.handleChange}
              value={formik.values.cardNumber}
              className={styles.newCardNumberInput}
              placeholder="************5432"
            />
            {formik.errors.cardNumber && formik.touched.cardNumber ? (
              <p>{formik.errors.cardNumber}</p>
            ) : (
              ""
            )}

            <div className={styles.newCardbottomInputs}>
              <input
                type="text"
                name="expiryInput"
                onChange={formik.handleChange}
                className={styles.expiryInput}
                placeholder="02/22"
                value={formik.values.expiryDate}
              />

              <input
                type="text"
                name="cvv"
                onChange={formik.handleChange}
                className={styles.cvv}
                placeholder="435"
                value={formik.values.cvv}
              />
            </div>
          </form>
        </div>

        <div className={styles.bottomPaymentModal}>
          <div className={styles.buttonSection}>
            <Button
              bgcolor="black"
              label="Add to Cart"
              size="large"
              handleClick={() => {
                formik.handleSubmit();
              }}
            />
            <Button bgcolor="white" label="Buy Now" size="large" />
            {/* <button type="submit" onClick={formik.handleSubmit}> */}
            {/* {" "}
              submit
            </button> */}
          </div>
        </div>
      </div>
    </NewModal>
  );
}

export default PaymentModal;
