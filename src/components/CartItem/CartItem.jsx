// import {useEffect, useState} from "react";
import PropTypes from "prop-types";

import axios from "axios";
import styles from "./CartItem.module.scss";
import { InputCheckbox, InputNumber } from "../InputFields";

function CartItem({
  isCheckout,
  id,
  isCheck,
  image,
  name,
  desc,
  color,
  size,
  quantity,
  price,
  index,
  onDelete,
  ontoggleCheck,
  onAdd,
  onSubtract,
}) {
  const handleOnChange = (selectedIndex) => {
    ontoggleCheck(selectedIndex);
  };

  const Subtract = (selectedIndex) => {
    onSubtract(selectedIndex);
  };

  const Add = (selectedIndex) => {
    console.log(quantity);
    onAdd(selectedIndex);
  };

  const Delete = (selectedIndex) => {
    console.log(id);
    axios
      .post(
        `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/removeFromCart/1c1c090f-b412-46e2-b1fb-46cd42783403`,
        {
          headers: {
            Authorization: localStorage.getItem("userId"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);

        if (res.data.success) {
          console.log(res.data);
          onDelete(selectedIndex);
        }
        return res.data;
      });
  };

  return (
    <div className={styles.cartItem}>
      {!isCheckout && (
        <div>
          <InputCheckbox
            name={name}
            value={name}
            checked={isCheck}
            toggleCheck={() => handleOnChange(index)}
          />
        </div>
      )}

      <div className={styles.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div>
            <p style={{ marginBottom: "10px" }} className="global-text-20">
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>${price}</span>
            </p>
            <p className={styles.desc}>{desc}</p>
          </div>

          {!isCheckout && (
            <div
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              className={styles.delete}
              onClick={() => Delete(index, id)}
            >
              <div>
                <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
              </div>
              <p>Delete</p>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div>
            <span>{color}</span>
            <span>, {size}</span>
          </div>
          {/* item={cartItem} */}
          <InputNumber
            onAdd={Add}
            onSubtract={Subtract}
            onDelete={Delete}
            itemValue={quantity}
            index={index}
            color="darker"
          />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  // item: PropTypes.any.isRequired,
  isCheck: PropTypes.bool.isRequired,
  isCheckout: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  ontoggleCheck: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired,
};

export default CartItem;
