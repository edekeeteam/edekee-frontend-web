import React from "react";
import Button from "../Button/Button";
import styles from "./OrderItem.module.scss";

function OrderItem() {
  return (
    <div className={styles.orderItem}>
      {/* <div>
        <InputCheckbox
          name={name}
          value={name}
          checked={isCheck}
          toggleCheck={() => handleOnChange(index)}
        />
      </div> */}
      <div className={styles.imgContainer}>
        <img src="" alt="" />
      </div>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div>
            <p style={{ marginBottom: "10px" }} className="global-text-20">
              <span className={styles.name}>Palm Slippers</span>
              {/* <span className={styles.price}>$Price</span> */}
            </p>
            <p className={styles.desc}>Blue, 39</p>
          </div>
          {/* <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className={styles.delete}
            // onClick={() => Delete(index, id)}
          >
            <div>
              <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
            </div>
            <p>Delete</p>
          </div> */}
          <Button size="small" bgcolor="white" label="Track Order" />
        </div>

        <div className={styles.footer}>
          <div>
            <p className={styles.footerTitle}>Order number</p>
            <p className={styles.footerText}> 3445</p>
          </div>
          <div>
            <p className={styles.footerTitle}>Order date</p>
            <p className={styles.footerText}> 24/05/2022</p>
          </div>
          <div>
            <p className={styles.footerTitle}>Total</p>
            <p className={styles.footerText}> 5000</p>
          </div>
          <div>
            <p className={styles.footerTitle}>Status</p>
            <p className={styles.footerText}> Delivered</p>
          </div>
          {/* item={orderItem} */}
          {/* <InputNumber
            onAdd={Add}
            onSubtract={Subtract}
            onDelete={Delete}
            itemValue={qty}
            index={index}
            color="darker"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
