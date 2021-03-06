/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../context/ModalContext";
import Button from "../Button/Button";
import NewModal from "../NewModal/NewModal";
import styles from "./Complete.module.scss";

function Complete({ type }) {
  const navigate = useNavigate();
  const { setIsModalOpen } = useModalContext();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (type !== "order" || type !== "cart") {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    }
  });

  return (
    <NewModal>
      <div className={styles.orderComplete}>
        <img src="/icons/completedIcon.svg" alt="" className={styles.completedIcon} />
        <div className={styles.textSection}>
          <p className={styles.orderText}>
            {type === "order"
              ? "Order Complete"
              : type === "cart"
              ? "Added to Cart Successfully"
              : ""}
          </p>
          {type === "orders" ? (
            <p className={styles.trackText}>You can track your orders</p>
          ) : type === "cart" ? (
            <p className={styles.trackText}>You can track your cart</p>
          ) : (
            <p className={styles.trackText}>Successfully uploaded</p>
          )}
        </div>

        {type === "order" ||
          (type === "cart" && (
            <Button
              size="large"
              bgcolor="black"
              label={type === "order" ? "Go to Orders" : type === "cart" ? "Go to Cart" : ""}
              handleClick={() => {
                if (type === "order") {
                  navigate(`/orders/${userId}`);
                  setIsModalOpen(false);
                } else if (type === "cart") {
                  navigate(`/cart/${userId}`);
                  setIsModalOpen(false);
                }
              }}
            />
          ))}
      </div>
    </NewModal>
  );
}

export default Complete;
