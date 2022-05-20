/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

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
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
// make sure use
export const useBuyContext = () => useContext(BuyContext);

export { BuyContext, BuyProvider };
