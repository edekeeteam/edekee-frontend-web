import React from "react";
import { useBuyContext } from "../../context/BuyContext";
import { useProductsContext } from "../../context/ProductsContext";
import Button from "../Button/Button";
import { InputText } from "../InputFields";
// import Modal from "../Modal/Modal";
// import { useModalContext } from "../../context/ModalContext";
// import Button from "../Button/Button";
import NewModal from "../NewModal/NewModal";
import styles from "./Summary.module.scss";

function Summary() {
  // const { setModalValue } = useModalContext();
  const { address, setAddress, saveOrder, size, color } = useBuyContext();
  const { productDetails } = useProductsContext();

  const { brand, description, price } = productDetails;

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <NewModal>
      <div className={styles.summaryModal}>
        <div className={styles.summaryHeader}>
          <p>Summary</p>
        </div>

        <div className={styles.addressInput}>
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

            {/* <InputText label="Input Address" /> */}
          </div>
        </div>
        <div className={styles.itemCard}>
          <div className={styles.itemImage}>
            <img src="./icons/itemImage.png" alt="" />
          </div>
          <div className={styles.middleText}>
            <p className={styles.itemName}>{brand}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.itemSpecs}>
              {color}, {size}
            </p>
          </div>
          <div className={styles.priceText}>N{price}</div>
        </div>
        <div className={styles.priceCard}>
          <div className={styles.priceCardTop}>
            <p>Total items cost</p>

            <p>N{price}</p>
          </div>
          <div className={styles.priceCardMiddle}>
            <p>Total shipping</p>

            <p>N500</p>
          </div>
          <div className={styles.priceCardBottom}>
            <p>All Total</p>

            <p>N25,500</p>
          </div>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <p className={styles.bannerTopText}>All total</p>
            <p className={styles.bannerPrice}>N50,000.00</p>
            <p className={styles.bannerDeliveryText}>pay on delivery</p>
          </div>

          <Button
            label="Confirm"
            bgcolor="white"
            size="large"
            handleClick={() => {
              saveOrder();
            }}
          />
        </div>
        {/* <div className={styles.summaryCard}>
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
        </div> */}

        {/* <div className={styles.buttonSection}>
          <Button
            size="large"
            bgcolor="black"
            label=" Go back"
            handleClick={() => {
              setModalValue("paymentmodal");
            }}
          />
          <Button
            size="large"
            bgcolor="white"
            label=" Pay Now"
            handleClick={() => {
              setModalValue("orderComplete");
            }}
          />
        </div> */}
      </div>
    </NewModal>
  );
}

export default Summary;
