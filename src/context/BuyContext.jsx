/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useModalContext } from "./ModalContext";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const { setIsModalOpen } = useModalContext();

  const [color, setColor] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const userId = "0147743e-bba3-4b9d-bf17-3c8080e477ea";
  const weight = "50kg";
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://eked.herokuapp.com/v1/api/cart/getCartItems/${userId}`, {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const newCart = res.data.data.map((item) => ({ ...item, check: false }));

        setCart(newCart);
        // res.data
      });
  }, []);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    console.log(newColor);
  };
  const handleSizeChange = (newSize) => {
    setSize(newSize);
    console.log(newSize);
  };
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    console.log(newQuantity);
  };
  const handleProductId = (id) => {
    setProductId(id);
  };

  const addToCart = () => {
    // console.log("added to cart");
    console.log(productId);
    const params = {
      product_id: productId,
      user_id: userId,
      size,
      color,
      weight,
      quantity,
    };
    axios
      .post(
        "http://ec2-3-136-189-233.us-east-2.compute.amazonaws.com:3000/v1/api/cart/addToCart",
        params
      )
      .then(
        async (response) => {
          console.log(response);
          if (response.data.success) {
            setIsModalOpen(false);
          }
        }
        // console.log(response);
      )
      .catch((error) => console.log(error));
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
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
// make sure use
export const useBuyContext = () => useContext(BuyContext);

export { BuyContext, BuyProvider };
