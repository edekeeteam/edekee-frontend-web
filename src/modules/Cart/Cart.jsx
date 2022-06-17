import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import styles from "./Cart.module.scss";
// import data from "./data";
import CartItem from "../../components/CartItem/CartItem";
import { InputCheckbox, InputText } from "../../components/InputFields";
// import useGetCart from "../../hooks/cart/useGetCart";
import { useBuyContext } from "../../context/BuyContext";
import Button from "../../components/Button/Button";

// import {InputCheckbox} from "../../components/InputFields";

function CartModule() {
  // eslint-disable-next-line no-unused-vars

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [total, setTotal] = useState(0);
  const [shipCost] = useState(100);
  const { setAddress, address } = useBuyContext();
  const { cart, setCart, fetchCart, setOrderItems, orderItems, setCartOrderArray, saveCartOrder } =
    useBuyContext();

  // const { userId } = useParams();

  // const { data, isLoading } = useGetCart(userId);

  // if (!isLoading) {
  //   console.log(data);
  // }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    fetchCart();
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
        index === selectedIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const onSubtract = (selectedIndex) => {
    const cartItem = cart.find((item, index) => index === selectedIndex);
    if (cartItem) {
      const updatedCart = cart.map((item, index) =>
        index === selectedIndex ? { ...cartItem, quantity: cartItem.quantity - 1 } : item
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
        return sum + cart[index].productPrice * cart[index].quantity;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    const checkedItems = cart.filter((item) => item.check === true);
    setOrderItems(checkedItems);
    console.log(checkedItems);
    const cartOrder = checkedItems.map((eachItem) => ({
      product_id: eachItem.product_id,
      // user_id: eachItem.user_id,
      size: eachItem.size,
      color: eachItem.color_name,
      weight: eachItem.weight,
      quantity: eachItem.quantity,
    }));
    setCartOrderArray(cartOrder);
    // console.log(cartOrder);
  }, [cart]);

  return (
    <div className={styles.cartModule}>
      <div className="global-modal-sm-mb">
        <p className="global-text-24">{!isCheckout ? `Shop Cart (${cart.length})` : "Checkout"}</p>
      </div>
      <div className="global-modal-sm-mb">
        {!isCheckout && (
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
        )}
        <div>
          <span className="global-text-12">Address</span>

          <div className={styles.addressInput}>
            {/* <div className={styles.selectInputSection}>
                <select className={styles.selectInput} value="City" name="city">
                  <option value="Delta">City</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Benin">Benin</option>
                </select>
                <select className={styles.selectInput} value="State" name="state">
                  <option value="Delta">State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Benin">Benin</option>
                </select>

              </div> */}
          </div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          {isCheckout && (
            <>
              {" "}
              <div className={styles.addressInput}>
                <InputText
                  label="Street Address"
                  handleChange={(e) => {
                    handleAddressChange(e);
                  }}
                  value={address}
                />
                <div className={styles.selectInputSection} style={{ marginLeft: "20px" }}>
                  <select className={styles.selectInput} value="City" name="city">
                    <option value="Delta">City</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Benin">Benin</option>
                  </select>
                  <select className={styles.selectInput} value="State" name="state">
                    <option value="Delta">State</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Benin">Benin</option>
                  </select>
                </div>
              </div>
            </>
          )}
          {!isCheckout
            ? cart?.map((cartItem, index) => (
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  image={cartItem.productImage}
                  isCheck={cartItem.check}
                  name={cartItem.productName}
                  desc={cartItem.description}
                  size={cartItem.size}
                  color={cartItem.color_name}
                  price={cartItem.productPrice}
                  quantity={cartItem.quantity}
                  item={cartItem}
                  onAdd={onAdd}
                  onSubtract={onSubtract}
                  ontoggleCheck={ontoggleCheck}
                  onDelete={onDelete}
                  index={index}
                />
              ))
            : orderItems?.map((cartItem, index) => (
                <CartItem
                  isCheckout={isCheckout}
                  key={cartItem.id}
                  id={cartItem.id}
                  image={cartItem.productImage}
                  isCheck={cartItem.check}
                  name={cartItem.productName}
                  desc={cartItem.description}
                  size={cartItem.size}
                  color={cartItem.color_name}
                  price={cartItem.productPrice}
                  quantity={cartItem.quantity}
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
          <div className={styles.buttonContainer}>
            <Button
              bgcolor="white"
              size="small"
              label={!isCheckout ? "Checkout" : "Confirm"}
              handleClick={() => {
                if (!isCheckout) {
                  setIsCheckout(!isCheckout);
                } else {
                  saveCartOrder();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModule;
