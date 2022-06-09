import React from "react";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../context/ModalContext";
import Button from "../Button/Button";
import NewModal from "../NewModal/NewModal";
import styles from "./OrderComplete.module.scss";

function OrderComplete() {
  const navigate = useNavigate();
  const { setIsModalOpen } = useModalContext();
  const userId = localStorage.getItem("userId");
  return (
    <NewModal>
      <div className={styles.orderComplete}>
        <img src="/icons/completedIcon.svg" alt="" className={styles.completedIcon} />
        <div className={styles.textSection}>
          <p className={styles.orderText}>Order Complete</p>
          <p className={styles.trackText}>You can track your orders</p>
        </div>

        <Button
          size="large"
          bgcolor="black"
          label="Go to Orders"
          handleClick={() => {
            navigate(`/orders/${userId}`);
            setIsModalOpen(false);
          }}
        />
      </div>
    </NewModal>
  );
}

export default OrderComplete;
