import React, { useState } from "react";
import countriesArr from "../../../data/countriesArr";
import Modal from "../../Modal/Modal";
import styles from "../../Modal/Modal.module.scss";
// import { useAuthContext } from "../../../context/AuthContext";

function PhoneContact() {
  // const [countryCode, setCountryCode] = useState("")
  const [number, setNumber] = useState("");
  const [activeCountry, setActiveCountry] = useState(countriesArr[0]);

  //   const { handleInputChange } = useAuthContext();

  const CountryOptions = countriesArr.map((country) => (
    <option value={country.value}> {country.name} </option>
  ));

  const handleCountryChange = (countryValue) => {
    setActiveCountry(countriesArr.filter((country) => country.value === countryValue)[0]);
  };

  const phoneInputBlock = {
    paddingRight: 5,
    marginRight: -5,
  };

  return (
    <Modal>
      <div>
        <h2 className={styles.modalHeader}> Phone Number </h2>

        <div className={styles.modalBody}>
          <form>
            <div className={`${styles.formGroup}`}>
              <select
                className={`${styles.formInput} ${styles.width100} ${styles.inputContainer}`}
                value={activeCountry.value}
                name="country"
                onChange={(e) => {
                  handleCountryChange(e.target.value);
                }}
              >
                {CountryOptions}
              </select>
            </div>
            <div
              className={`${styles.formGroup} ${styles.mt1} ${styles.py1} ${styles.inputContainer}`}
              style={phoneInputBlock}
            >
              <input type="text" className={styles.formInput} value={activeCountry.code} disabled />
              <input
                type="text"
                className={`${styles.formInput} ${styles.formInputLong}`}
                placeholder=""
                // style={{flexGrow: 3}}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div
              className={`${styles.formGroup} ${styles.textCenter} ${styles.py1}`}
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

export default PhoneContact;
