// import React, { useState } from "react";
// import locationImg from "../../assets/images/location.png";
// import PaymentMethodModal from "./components/PaymentMethodModal";
// import AddPaymentMethod from "./components/AddPaymentMethod";
// import style1 from "./PaymentModal.module.scss";
// import styles from "../Modal/Modal.module.scss";

import { useFormik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import styles from "./PaymentModal.module.scss";
import NewModal from "../NewModal/NewModal";
import { InputText } from "../InputFields";
import Button from "../Button/Button";
// import { useModalContext } from "../../context/ModalContext";

function PaymentModal() {
  // const { setModalValue } = useModalContext();
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required("card number required").min(16, "card number not valid"),
      expiryDate: Yup.string()

        .max(5, "card number not valid")
        .matches(/([0-9]{2})\/([0-9]{2})/, "Not a valid expiration date. Example: MM/YY")
        .test(
          "test-credit-card-expiration-date",
          "Invalid Expiration Date has past",
          (expirationDate) => {
            if (!expirationDate) {
              return false;
            }

            const today = new Date();
            const monthToday = today.getMonth() + 1;
            const yearToday = today.getFullYear().toString().substring(-2);

            const [expMonth, expYear] = expirationDate.split("/");

            if (Number(expYear) < Number(yearToday)) {
              return false;
            }
            if (Number(expMonth) < monthToday && Number(expYear) <= Number(yearToday)) {
              return false;
            }

            return true;
          }
        )
        .test("test-credit-card-expiration-date", "Invalid Expiration Month", (expirationDate) => {
          if (!expirationDate) {
            return false;
          }
          // const today = new Date().getFullYear().toString().substring(-2);

          const [expMonth] = expirationDate.split("/");

          if (Number(expMonth) > 12) {
            return false;
          }

          return true;
        })
        .required("card number required"),
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
            {/* <input
              type="text"
              name="cardNumber"
              onChange={formik.handleChange}
              value={formik.values.cardNumber}
              className={styles.newCardNumberInput}
              placeholder="************5432"
            /> */}

            <MaskedInput
              className={styles.newCardNumberInput}
              name="cardNumber"
              mask={[
                /[1-9]/,
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder="5348 **** **** ****"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
            />
            {formik.errors.cardNumber && formik.touched.cardNumber ? (
              <p>{formik.errors.cardNumber}</p>
            ) : (
              ""
            )}

            <div className={styles.newCardbottomInputs}>
              {/* <input
                type="text"
                name="expiryInput"
                onChange={formik.handleChange}
                className={styles.expiryInput}
                placeholder="02/22"
                value={formik.values.expiryDate}
              /> */}
              <MaskedInput
                className={styles.expiryInput}
                name="expiryDate"
                mask={[/[0-9]/, /\d/, "/", /\d/, /\d/]}
                placeholder="02/20"
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
              />

              {/* <input
                type="text"
                name="cvv"
                onChange={formik.handleChange}
                className={styles.cvv}
                placeholder="435"
                value={formik.values.cvv}
              /> */}
              <MaskedInput
                className={styles.cvv}
                name="cvv"
                mask={[/[0-9]/, /\d/, /\d/]}
                placeholder="435"
                value={formik.values.cvv}
                onChange={formik.handleChange}
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
                // formik.handleSubmit();
                console.log("change to summary");
              }}
            />
            <Button
              bgcolor="white"
              label="Buy Now"
              size="large"
              handleClick={() => {
                // setModalValue("summarymodal");
                formik.handleSubmit();
              }}
            />
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
