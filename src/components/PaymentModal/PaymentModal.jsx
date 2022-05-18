/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
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
  const [cardType, setCardType] = useState("");
  // const [errors, setErrors] = useState({});

  // regex for cards
  const regexPattern = {
    MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
    VISA: /^4[0-9]{2,}$/,
    AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
    DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
    JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
  };
  // ========================

  const getCardType = (cardNumber) => {
    // eslint-disable-next-line guard-for-in
    setCardType("");
    // console.log(cardNumber.includes("_"));
    for (const card in regexPattern) {
      // console.log(cardNumber);

      if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
        console.log(card);
        setCardType(card);
        return card;
      }
    }
    return "";
  };
  // handle blur function to validate card input
  const handleBlurValidation = (e) => {
    getCardType(e.target.value);
    // const err = errors;
    // abst imp nam conv
    // if(e.target.name === 'cardNumber'){

    // }
    // const { name } = e.target;
    // if (e.target.value.includes("_")) {
    //   // console.log("card details not valid");
    //   err[name] = `${name} details not valid`;

    //   console.log(err[name]);
    // } else {
    //   err[name] = "";
    // }
    // console.log(err);
    // setErrors(err);
  };

  // --------------------
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .min(16, "card number not valid")

        .test("no underscores", "enter a valid card number", (value) => {
          if (value) {
            return !value.includes("_");
          }
          return true;
        })
        .required("card number required"),
      expiryDate: Yup.string()
        .min(5, "date invalid")

        .test("no underscores", "enter a valid date", (value) => {
          if (value) {
            return !value.includes("_");
          }
          return true;
        })
        .required("date required"),
      cvv: Yup.string()
        .min(3, "cvv not valid")

        .test("no underscores", "enter a valid cvv", (value) => {
          if (value) {
            return !value.includes("_");
          }
          return true;
        })
        .required("cvv required"),
    }),

    onSubmit: (values) => {
      // console.log("values", values);
      console.log(formik.values.cardNumber);
      // if(!formik.errors && values)
      if (!formik.errors.cardNumber && !formik.errors.expiryDate && !formik.errors.cvv && values) {
        // setModalValue("summarymodal");
        // setErrors({});
      }
      console.log("values", values);
    },
  });

  return (
    <NewModal>
      <div className={styles.paymentModal}>
        <div className={styles.topPaymentModal}>
          <p className={styles.topHeading}>Address</p>
          <div className={styles.topAddressInput}>
            <div>
              <div className={styles.locationImg} />
            </div>
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
        <div className={styles.middleHeadingLeft}>
          <p>Payment</p>
        </div>
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
            <div style={{ width: "100%", marginBottom: "35px" }}>
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
                min="16"
                placeholder="5348 **** **** ****"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  handleBlurValidation(e);
                  // console.log(e.target.name, "blurred");
                }}
              />
              {formik.errors.cardNumber && formik.touched.cardNumber ? (
                <p className="global-text-12 global-error-text">
                  {formik.errors.cardNumber ? formik.errors.cardNumber : ""}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className={styles.newCardbottomInputs}>
              {/* <input
                type="text"
                name="expiryInput"
                onChange={formik.handleChange}
                className={styles.expiryInput}
                placeholder="02/22"
                value={formik.values.expiryDate}
              /> */}
              <div
                className={styles.expiryDateWrapper}
                style={{ width: "50%", marginRight: "auto" }}
              >
                <MaskedInput
                  className={styles.expiryInput}
                  name="expiryDate"
                  mask={[/[0-9]/, /\d/, "/", /\d/, /\d/]}
                  placeholder="02/20"
                  value={formik.values.expiryDate}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    handleBlurValidation(e);
                    // console.log(e.target.name, "blurred");
                  }}
                />
                {formik.errors.expiryDate && formik.touched.expiryDate ? (
                  <p className="global-text-12 global-error-text">
                    {formik.errors.expiryDate ? formik.errors.expiryDate : ""}
                  </p>
                ) : (
                  ""
                )}
              </div>

              {/* <input
                type="text"
                name="cvv"
                onChange={formik.handleChange}
                className={styles.cvv}
                placeholder="435"
                value={formik.values.cvv}
              /> */}

              <div className={styles.cvvWrapper}>
                <MaskedInput
                  className={styles.cvv}
                  name="cvv"
                  mask={[/[0-9]/, /\d/, /\d/]}
                  placeholder="435"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    handleBlurValidation(e);
                    // console.log(e.target.name, "blurred");
                  }}
                />
                {formik.errors.cvv && formik.touched.cvv ? (
                  <p className="global-text-12 global-error-text">
                    {formik.errors.cvv ? formik.errors.cvv : ""}
                  </p>
                ) : (
                  ""
                )}
              </div>
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
                // console.log(formik.errors.cvv);
                // console.log(typeof formik.values.cardNumber);
                formik.handleSubmit();
                // console.log("clicked");
              }}
            />

            {/* <button type="submit" onClick={formik.handleSubmit}> */}
            {/* {" "}
              submit
            </button> */}
          </div>
        </div>
        <p>{cardType}</p>
      </div>
    </NewModal>
  );
}

export default PaymentModal;
