import { useEffect, useState } from "react";

import styles from "./Cart.module.scss";

import data from "./data";
import CartItem from "../../components/CartItem/CartItem";
import { InputCheckbox } from "../../components/InputFields";

// import {InputCheckbox} from "../../components/InputFields";

function CartModule() {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [total, setTotal] = useState(0);
  const [shipCost] = useState(100);

  useEffect(() => {
    setCart(data);
  }, []);

  const getFormattedPrice = (price) => `₦ ${price.toFixed(2)}`;

  const ontoggleCheck = (selectedIndex) => {
    const cartItem = cart.find((x, index) => index === selectedIndex);

    const updatedCart = cart.map((item, index) =>
      selectedIndex === index ? { ...cartItem, check: !cartItem.check } : item
    );
    setCart(updatedCart);
    setIsAllChecked(false);
  };

  const toggleSelectAll = () => {
    let updatedCart;
    if (isAllChecked) {
      updatedCart = cart.map((item) => ({ ...item, check: false }));
      setIsAllChecked(false);
    } else {
      updatedCart = cart.map((item) => ({ ...item, check: true }));
      setIsAllChecked(true);
    }
    setCart(updatedCart);
  };

  const onAdd = (selectedIndex) => {
    const cartItem = cart.find((item, index) => index === selectedIndex);
    if (cartItem) {
      const updatedCart = cart.map((item, index) =>
        index === selectedIndex ? { ...cartItem, qty: cartItem.qty + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const onSubtract = (selectedIndex) => {
    const cartItem = cart.find((item, index) => index === selectedIndex);
    if (cartItem) {
      const updatedCart = cart.map((item, index) =>
        index === selectedIndex ? { ...cartItem, qty: cartItem.qty - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const onDelete = (selectedIndex) => {
    const newCart = cart.filter((item, index) => index !== selectedIndex);

    setCart(newCart);
  };

  useEffect(() => {
    const totalPrice = cart.reduce((sum, currentState, index) => {
      if (currentState.check === true) {
        return sum + cart[index].price * cart[index].qty;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className={styles.cartModule}>
      <div className="global-modal-sm-mb">
        <p className="global-text-24">Shop Cart ({cart.length})</p>
      </div>
      <div className="global-modal-sm-mb">
        <p style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
          <InputCheckbox
            name="all"
            value="all"
            checked={isAllChecked}
            toggleCheck={() => toggleSelectAll()}
          />
          {isAllChecked && <span className="global-text-12">Unselect All</span>}
          {!isAllChecked && <span className="global-text-12">Select All</span>}
        </p>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {cart.map((cartItem, index) => (
            <CartItem
              key={cartItem.name}
              image={cartItem.image}
              isCheck={cartItem.check}
              name={cartItem.name}
              desc={cartItem.desc}
              size={cartItem.size}
              color={cartItem.color}
              price={cartItem.price}
              qty={cartItem.qty}
              item={cartItem}
              onAdd={onAdd}
              onSubtract={onSubtract}
              ontoggleCheck={ontoggleCheck}
              onDelete={onDelete}
              index={index}
            />
          ))}
        </div>
        <div className={styles.cartSummary}>
          <p className="global-modal-sm-mb global-text-20">Summary</p>

          <div className={`${styles.subtotal} global-modal-sm-mb`}>
            <p>subtotal </p>
            <p>{getFormattedPrice(total)}</p>
          </div>
          <div className={`${styles.shipping} global-modal-sm-mb`}>
            <p>shipping </p>
            <p>{shipCost}</p>
          </div>

          <div className={`${styles.border} global-modal-sm-mb`} />
          <div className={`${styles.total} global-modal-sm-mb`}>
            <p className="right-section">Total </p>
            <p className="right-section"> {getFormattedPrice(total)} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModule;
