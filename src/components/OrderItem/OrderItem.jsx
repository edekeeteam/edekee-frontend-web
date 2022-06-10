/* eslint-disable react/prop-types */
import React from "react";
// import axios from "axios";
// import Button from "../Button/Button";
import styles from "./OrderItem.module.scss";

function OrderItem({ data }) {
  // const fetchOrderDetails = () => {
  //   const userId = data.id;
  //   const orderId = data.order_id;

  //   console.log(userId, orderId);
  //   const params = {
  //     user_id: userId,
  //     order_id: orderId,
  //   };

  //   axios
  //     .get(
  //       `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getOrder`,
  //       params,
  //       {
  //         headers: {
  //           Authorization: "token",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);

  //       // console.log(data);

  //       // const items = stuff.map((orderss) => orderss.orderItem.map((i) => i));
  //       // console.log(items);

  //       // res.data
  //     });
  // };

  // const formattedDate = data.date.split()
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
              <span className={styles.name}>{data.product.name}</span>
              {/* <span className={styles.price}>$Price</span> */}
            </p>
            <p className={styles.desc}>{data.product.name}</p>
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
          {/* <Button
            size="small"
            bgcolor="white"
            label="Track Order"
            handleClick={() => {
              fetchOrderDetails();
            }}
          /> */}
        </div>

        <div className={styles.footer}>
          <div>
            <p className={styles.footerTitle}>Order number</p>
            <p className={styles.footerText}> {data.id.slice(0, 5)}</p>
          </div>
          <div>
            <p className={styles.footerTitle}>Order date</p>
            <p className={styles.footerText}> {data.created_at.slice(0, 10)}</p>
          </div>
          <div>
            <p className={styles.footerTitle}>Total</p>
            <p className={styles.footerText}> {data.product.price * data.quantity}</p>
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
