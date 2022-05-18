import React from "react";
import { useModalContext } from "../../context/ModalContext";
import Button from "../Button/Button";
import NewModal from "../NewModal/NewModal";
import styles from "./Summary.module.scss";

function Summary() {
  const { setModalValue } = useModalContext();
  return (
    <NewModal>
      <div className={styles.summaryModal}>
        <div className={styles.summaryHeader}>
          <p>Summary</p>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.productImage} />
              <div className={styles.productSpecs}>
                <p className={styles.productName}>Xpnd Shorts</p>
                <div className={styles.productDetails}>
                  <p>Size :M, Color: Yellow</p>
                </div>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.price}>N2000</p>
            </div>
          </div>

          <div className={styles.Row}>
            <p className={styles.quantityText}>Quantity</p>
            <p className={styles.quantitText}>1</p>
          </div>
          <div className={styles.Row}>
            <p className={styles.shippingFeeText}>Shipping Fee</p>
            <p className={styles.shippingFeeText}>N550</p>
          </div>
          <div className={styles.Row}>
            <p className={styles.totalText}>Total</p>
            <p className={styles.totalText}>N2550</p>
          </div>
        </div>

        <div className={styles.buttonSection}>
          <Button
            size="large"
            bgcolor="black"
            label=" Go back"
            handleClick={() => {
              setModalValue("paymentmodal");
            }}
          />
          <Button size="large" bgcolor="white" label=" Pay Now" />
        </div>
      </div>
    </NewModal>
  );
}

export default Summary;
