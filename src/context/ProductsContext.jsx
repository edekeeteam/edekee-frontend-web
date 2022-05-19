/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";

const ProductsContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ProductsProvider({ children }) {
  const [products, setProducts] = useState({});

  return (
    <ProductsContext.Provider
      value={{
        // size,
        // setSize,
        // quantity,
        // setQuantity,
        // color,
        // handleColorChange,
        // handleSizeChange,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
// make sure use
export const useProductsContext = () => useContext(ProductsContext);

export { ProductsContext, ProductsProvider };
