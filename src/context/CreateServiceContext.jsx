/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from "react";

const CreateServiceContext = React.createContext();

// eslint-disable-next-line react/prop-types
function CreateServiceProvider({ children }) {
  // const [products, setProducts] = useState({});
  // const [productDetails, setProductDetails] = useState({});

  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(0);

  // const weight = "";

  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(0);

  return (
    <CreateServiceContext.Provider
      value={
        {
          // size,
          // setSize,
          // quantity,
          // setQuantity,
          // color,
          // handleColorChange,
          // handleSizeChange,
        }
      }
    >
      {children}
    </CreateServiceContext.Provider>
  );
}

// make sure use
export const useCreateServiceContext = () => useContext(CreateServiceContext);

export { CreateServiceContext, CreateServiceProvider };
