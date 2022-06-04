/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useModalContext } from "./ModalContext";
// import { useAuthContext } from "./AuthContext";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const { setIsModalOpen } = useModalContext();
  // const { user } = useAuthContext();

  const [color, setColor] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const userId = localStorage.getItem("userId");
  const weight = "50kg";
  const [cart, setCart] = useState([]);

  const fetchCart = () => {
    axios
      .get(
        `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getCartItems/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        const newCart = res.data.data.map((item) => ({ ...item, check: false }));

        setCart(newCart);
        // res.data
      });
  };

  // useEffect(() => {
  //   fetchCart();
  // }, []);

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
      axios
        .post(
          "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/addToCart",
          params,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
              portal: "web",
            },
          }
        )
        .then(
          async (response) => {
            console.log(response);
            if (response.data.success) {
              setIsModalOpen(false);
              fetchCart();
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
