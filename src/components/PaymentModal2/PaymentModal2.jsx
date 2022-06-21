/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
// import React, { useState } from "react";
// import locationImg from "../../assets/images/location.png";
// import PaymentMethodModal from "./components/PaymentMethodModal";
// import AddPaymentMethod from "./components/AddPaymentMethod";
// import style1 from "./PaymentModal.module.scss";
// import styles from "../Modal/Modal.module.scss";

import { useFormik } from "formik";
import * as Yup from "yup";
// import MaskedInput from "react-text-mask";
import styles from "./PaymentModal2.module.scss";
import NewModal from "../NewModal/NewModal";
import { InputText } from "../InputFields";
import Button from "../Button/Button";
import { useModalContext } from "../../context/ModalContext";
import { useBuyContext } from "../../context/BuyContext";

function PaymentModal() {
  const { setModalValue } = useModalContext();

  const { address, setAddress } = useBuyContext();
  // const [cardType, setCardType] = useState("");
  // const [errors, setErrors] = useState({});

  // regex for cards
  // const regexPattern = {
  //   MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
  //   VISA: /^4[0-9]{2,}$/,
  //   AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
  //   DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
  //   DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
  //   JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
  // };
  // ========================

  // const getCardType = (cardNumber) => {
  //   // eslint-disable-next-line guard-for-in
  //   setCardType("");
  //   // console.log(cardNumber.includes("_"));
  //   for (const card in regexPattern) {
  //     // console.log(cardNumber);

  //     if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
  //       console.log(card);
  //       setCardType(card);
  //       return card;
  //     }
  //   }
  //   return "";
  // };
  // handle blur function to validate card input
  // const handleBlurValidation = (e) => {
  //   getCardType(e.target.value);
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
  // };

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

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <NewModal>
      <div
        className={styles.back}
        onClick={() => {
          setModalValue("productspecs");
        }}
      >
        {" "}
        <span>
          <img src="/icons/rightChevron.svg" alt="" className={styles.rightChevron} />
        </span>{" "}
        back{" "}
      </div>
      <div className={styles.paymentModal}>
        <div className={styles.topPaymentModal}>
          <p className={styles.topHeading}>Address</p>
          <div className={styles.topAddressInput}>
            <div>
              <div className={styles.locationImg} />
            </div>
            <div className={styles.input}>
              <InputText
                label="Input Address"
                handleChange={(e) => {
                  handleAddressChange(e);
                }}
                value={address}
              />
            </div>
          </div>
        </div>
        <div className={styles.addressInput}>
          <div className={styles.selectInputSection}>
            <select className={styles.selectInput} value="City" name="city">
              <option value="Delta">City</option>
              <option value="Lagos">Lagos</option>
              <option value="Benin">Benin</option>
            </select>
            <select className={styles.selectInput} value="State" name="state">
              <option value="Delta">State</option>
              <option value="Lagos">Lagos</option>
              <option value="Benin">Benin</option>
            </select>

            {/* <InputSearch label="Input Address" /> */}
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

        {/* <div className={styles.input}>
          <input
            required
            type="text"
            value="Pay on Delivery"
            // onChange={(e) => handleChange(e)}
            // name={name}
            placeholder=""
            autoComplete="off"
            className={styles.paymentInput}
          />
        </div> */}

        <div className={styles.paymentOnDelivery}>
          <p>Pay on Delivery</p>

          <img src="/icons/purpleTick.svg" alt="" />
        </div>
        <div className={styles.bottomPaymentModal}>
          <div className={styles.buttonSection}>
            <Button
              bgcolor="black"
              label="Go back"
              size="large"
              handleClick={() => {
                // formik.handleSubmit();
                setModalValue("productspecs");
                // console.log("change to summary");
              }}
            />
            <Button
              bgcolor="white"
              label="Checkout"
              size="large"
              handleClick={() => {
                // setModalValue("summarymodal");
                // console.log(formik.errors.cvv);
                // console.log(typeof formik.values.cardNumber);
                setModalValue("summarymodal");
                // console.log("clicked");
              }}
            />

            {/* <button type="submit" onClick={formik.handleSubmit}> */}
            {/* {" "}
              submit
            </button> */}
          </div>
        </div>
        {/* <p>{cardType}</p> */}
      </div>
    </NewModal>
  );
}

export default PaymentModal;
