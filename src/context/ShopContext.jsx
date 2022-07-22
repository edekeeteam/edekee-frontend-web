/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const ShopContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ShopProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [username, setUsername] = useState("");
  // const weight = "";

  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        categories,
        setCategories,
        productImages,
        setProductImages,
        username,
        setUsername,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

// make sure use
export const useShopContext = () => useContext(ShopContext);

export { ShopContext, ShopProvider };
