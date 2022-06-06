/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

import { useModalContext } from "./ModalContext";
import apiMethods from "../utils/apiMethods";
// import { useAuthContext } from "./AuthContext";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const { setIsModalOpen } = useModalContext();

  const [color, setColor] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");
  const weight = "50kg";

  const fetchCart = () =>
    apiMethods.get(`/cart/getCartItems/${userId}`).then((res) => {
      const newCart = res.data.data.map((item) => ({ ...item, check: false }));
      setCart(newCart);
      // res.data
    });

  const handleColorChange = (newColor) => {
    setColor(newColor);
    // console.log(newColor);
  };
  const handleSizeChange = (newSize) => {
    setSize(newSize);
    // console.log(newSize);
  };
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    // console.log(newQuantity);
  };
  const handleProductId = (id) => {
    setProductId(id);
  };

  const addToCart = () => {
    // console.log("added to cart");

    if (localStorage.getItem("userId")) {
      console.log(productId);
      const params = {
        product_id: productId,
        user_id: userId,
        size,
        color,
        weight,
        quantity,
      };

      apiMethods
        .post(`/cart/addToCart`, params)
        .then(
          async (response) => {
            console.log(response);
            if (response.data.success) {
              setIsModalOpen(false);
              await fetchCart();
            }
          }
          // console.log(response);
        )
        .catch((error) => console.log(error));
    } else {
      console.log("log in to add to cart");
    }
  };

  return (
    <BuyContext.Provider
      value={{
        size,
        setSize,
        quantity,
        handleQuantityChange,
        color,
        handleColorChange,
        handleSizeChange,
        cart,
        setCart,
        productId,
        setProductId,
        addToCart,
        handleProductId,
        fetchCart,
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
// make sure use
export const useBuyContext = () => useContext(BuyContext);

export { BuyContext, BuyProvider };
