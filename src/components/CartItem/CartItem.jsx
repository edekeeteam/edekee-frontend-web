// import {useEffect, useState} from "react";
import PropTypes from "prop-types";

import styles from "./CartItem.module.scss";
import { InputCheckbox, InputNumber } from "../InputFields";

function CartItem({
  isCheck,
  image,
  name,
  desc,
  color,
  size,
  qty,
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
    onAdd(selectedIndex);
  };

  const Delete = (selectedIndex) => {
    onDelete(selectedIndex);
  };

  return (
    <div className={styles.cartItem}>
      <div>
        <InputCheckbox
          name={name}
          value={name}
          checked={isCheck}
          toggleCheck={() => handleOnChange(index)}
        />
      </div>
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
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className={styles.delete}
            onClick={() => Delete(index)}
          >
            <div>
              <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
            </div>
            <p>Delete</p>
          </div>
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
            itemValue={qty}
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  ontoggleCheck: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired,
};

export default CartItem;
