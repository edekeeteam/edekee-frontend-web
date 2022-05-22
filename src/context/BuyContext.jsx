/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";
import axios from "axios";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const [color, setColor] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const userId = "0147743e-bba3-4b9d-bf17-3c8080e477ea";
  const weight = "";

  const handleColorChange = (newColor) => {
    setColor(newColor);
    console.log(newColor);
  };
  const handleSizeChange = (newSize) => {
    setColor(newSize);
    console.log(newSize);
  };
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    console.log(newQuantity);
  };

  const addToCart = () => {
    console.log("added to cart");
    const params = {
      productId,
      userId,
      size,
      color,
      weight,
      quantity,
    };
    axios
      .post(
        "http://ec2-3-12-71-10.us-east-2.compute.amazonaws.com:3000/v1/api/cart/addToCart",
        params
      )
      .then(
        async (response) => {
          console.log(response);
          // if (response.data.success) {

          //   setTimeout(() => {
          //     setModalValue("otp");
          //     setAuthSuccessful(false);
          //     setBtnState(false);
          //   }, 1000);
          // }
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
        productId,
        setProductId,
        addToCart,
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
// make sure use
export const useBuyContext = () => useContext(BuyContext);

export { BuyContext, BuyProvider };
