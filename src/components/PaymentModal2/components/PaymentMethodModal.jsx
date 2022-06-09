// import React, { useEffect, useState } from 'react'
// import CardItem from './CardItem';
// import { cardTypesArr } from './cardTypesArr'
import cardTypeImage1 from "../../../assets/images/card1.png";
import cardTypeImage2 from "../../../assets/images/card2.png";
import cardTypeImage3 from "../../../assets/images/card3.png";
import styles from "../../Modal/Modal.module.scss";

function PaymentMethodModal() {
  // const ImageSlideBlock = cardTypesArr.map(card => <CardItem key={card.id} card={card}/>);

  return (
    <>
      <div
        className={`${styles.width100} ${styles.py1}`}
        style={{ paddingBottom: "2.5em", marginTop: "3em" }}
      >
        <div className={`${styles.floatLeft}`}> Payment </div>
        <div className={`${styles.floatRight} ${styles.textSmall}`}>
          <button type="button" className={`${styles.btnTransparentBg} ${styles.textPurple}`}>
            + Add new card
          </button>
        </div>
      </div>
      <div className={`${styles.flexboxContainer} ${styles.width100}`} style={{ clear: "left" }}>
        <div className={`${styles.flexHorizontalContainer}`}>
          <div className={styles.flexboxItem}>
            <img src={cardTypeImage1} height="100%" width="auto" alt="" />
          </div>
          <div className={styles.flexboxItem}>
            <img src={cardTypeImage2} height="100%" width="auto" alt="" />
          </div>
          <div className={styles.flexboxItem}>
            <img src={cardTypeImage3} height="100%" width="auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethodModal;
