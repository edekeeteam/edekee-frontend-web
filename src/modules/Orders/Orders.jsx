import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Orders.module.scss";
import OrderItem from "../../components/OrderItem/OrderItem";
// import { useAuthContext } from "../../context/AuthContext";

function Orders() {
  const [orders, setOrders] = useState([]);
  // const { user } = useAuthContext();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .get(
        `http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getOrdersByUserId/${userId}`,
        {
          headers: {
            Authorization: "token",
          },
        }
      )
      .then((res) => {
        console.log(typeof res.data.data);
        const { data } = res.data;
        const stuff = [];
        console.log(data);
        data.map((order) => order.orderItem.map((eachOrder) => stuff.push(eachOrder)));
        console.log(stuff);
        // const items = stuff.map((orderss) => orderss.orderItem.map((i) => i));
        // console.log(items);
        setOrders(stuff);
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
              data={orderItem}
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
          {/* <p className="global-modal-sm-mb global-text-20">Summary</p>

          <div className={`${styles.subtotal} global-modal-sm-mb`}>
            <p>subtotal </p>
          </div>
          <div className={`${styles.shipping} global-modal-sm-mb`}>
            <p>shipping </p>
          </div>

          <div className={`${styles.border} global-modal-sm-mb`} />
          <div className={`${styles.total} global-modal-sm-mb`}>
            <p className="right-section">Total </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Orders;
