import React, { useState } from "react";
// import ArrowBackIcon from "../ArrowBackIcon";
import styles from "../../view/Modal/Modal.module.scss";

function AboutProduct() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("NGN");

  return (
    <div>
      {/* <ArrowBackIcon /> */}
      <h2 className={styles.modalMainHeaders}>Tell us about your product</h2>
      <p className={styles.modalCaptions}>
        These details will be shown to buyers viewing your product.
      </p>
      <div className="modalBody">
        <form>
          <div className={styles.formGroup}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              className={`${styles.formInput} ${styles.width100}`}
            />
          </div>
          <div
            className={`${styles.formGroup} ${styles.inputContainer} ${styles.mt1} ${styles.py1}`}
          >
            <select
              onSelect={(e) => setCurrency(e.target.value)}
              value={currency}
              className={`${styles.formInput}`}
            >
              <option> NGN </option>
              <option> USD </option>
              <option> CHF </option>
              <option> GHC </option>
              <option> NZD </option>
            </select>
            <input
              type="text"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              placeholder="Brand"
              className={`${styles.formInput} ${styles.formInputFlex3}`}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Price"
              className={`${styles.formInput} ${styles.width100}`}
            />
          </div>
          <div className={`${styles.formGroup} ${styles.mt1}`}>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description"
              className={`${styles.formInput} ${styles.width100}`}
              rows="5"
            />
          </div>{" "}
          <br />
          <div className="form-group text-center">
            <button type="button" className={`${styles.btn} ${styles.btnWhiteBg}`}>
              {" "}
              Next{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutProduct;
