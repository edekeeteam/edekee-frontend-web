import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Orders.module.scss";
import OrderItem from "../../components/OrderItem/OrderItem";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = "0147743e-bba3-4b9d-bf17-3c8080e477ea";

    axios
      .get(`https://eked.herokuapp.com/v1/api/cart/getCartItems/${userId}`, {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => {
        console.log(res.data.data);

        setOrders(res.data.data);
        // res.data
      });
  }, []);
  return (
    <div className={styles.orderModule}>
      <div className="global-modal-sm-mb">
        <p className="global-text-24">Shop order ({orders.length})</p>
      </div>

      <div className={styles.orderContainer}>
        <div className={styles.orderItems}>
          {orders.map((orderItem) => (
            <OrderItem
              key={orderItem}
              //   key={orderItem.name}
              //   id={orderItem.id}
              //   image={orderItem.image}
              //   isCheck={orderItem.check}
              //   name={orderItem.name}
              //   desc={orderItem.desc}
              //   size={orderItem.size}
              //   color={orderItem.color}
              //   price={orderItem.price}
              //   qty={orderItem.qty}
              //   item={orderItem}
              //   onAdd={onAdd}
              //   onSubtract={onSubtract}
              //   ontoggleCheck={ontoggleCheck}
              //   onDelete={onDelete}
              //   index={index}
            />
          ))}
        </div>
        <div className={styles.orderSummary}>
          <p className="global-modal-sm-mb global-text-20">Summary</p>

          <div className={`${styles.subtotal} global-modal-sm-mb`}>
            <p>subtotal </p>
            {/* <p>{getFormattedPrice(total)}</p> */}
          </div>
          <div className={`${styles.shipping} global-modal-sm-mb`}>
            <p>shipping </p>
            {/* <p>{shipCost}</p> */}
          </div>

          <div className={`${styles.border} global-modal-sm-mb`} />
          <div className={`${styles.total} global-modal-sm-mb`}>
            <p className="right-section">Total </p>
            {/* <p className="right-section"> {getFormattedPrice(total)} </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
