/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-alert */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useModalContext } from "./ModalContext";
import apiMethods from "../utils/apiMethods";
import { useToastContext } from "./ToastContext";
// import { useAuthContext } from "./AuthContext";

const BuyContext = React.createContext();

// eslint-disable-next-line react/prop-types
function BuyProvider({ children }) {
  const toast = useToastContext();
  const { setIsModalOpen, setModalValue } = useModalContext();
  // const { user } = useAuthContext();

  const [color, setColor] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const userId = localStorage.getItem("userId");
  const weight = "50kg";
  const [cart, setCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);
  const [orderItems, setOrderItems] = useState();

  const [cartOrderArray, setCartOrderArray] = useState([]);

  const [address, setAddress] = useState("");

  const fetchCart = () => {
    axios
      .get(`http://app.edekee.io:3000/v1/api/cart/getCartItems/${userId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const newCart = res.data.data.map((item) => ({ ...item, check: false }));
        setCartLoading(false);
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
    // if(!color || !size){
    //   alert('select color and size')
    // }else{

    // }

    if (localStorage.getItem("userId")) {
      if (color === "" || size === "") {
        toast.open({ msg: "select color and size", type: "warning" });

        return;
      }

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
              setModalValue("cartComplete");
              // setIsModalOpen(false);
              fetchCart();
            }
          }
          // console.log(response);
        )
        .catch((error) => console.log(error));
    } else {
      toast.open({ msg: "log in to add to cart", type: "warning" });
    }
  };

  const saveOrder = () => {
    if (address === "") {
      toast.open({ msg: "fill in address", type: "warning" });

      return;
    }
    const params = {
      product_id: productId,
      // user_id: userId,
      size,
      color,
      weight,
      quantity,
    };

    axios
      .post(
        "http://app.edekee.io:3000/v1/api/cart/saveOrder",
        {
          userId,
          address,
          email: "dele@gmail.com",
          name: "Dele",
          note: "Purchase",
          phone: "09089898978",
          payment_type: "cash",
          items: [params],
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then(
        async (response) => {
          if (response.data.success) {
            setIsModalOpen(true);
            setModalValue("orderComplete");
          }
          // if (response.data.success) {
          //   setIsModalOpen(false);
          //   fetchCart();
          // }
        }
        // console.log(response);
      )
      .catch((error) => console.log(error));
  };
  const saveCartOrder = () => {
    console.log(address);
    if (address === "") {
      toast.open({ msg: "fill in address", type: "warning" });

      return;
    }
    axios
      .post(
        "http://app.edekee.io:3000/v1/api/cart/saveOrder",
        {
          userId,
          address,
          email: "dele@gmail.com",
          name: "Dele",
          note: "Purchase",
          phone: "09089898978",
          payment_type: "cash",
          items: cartOrderArray,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then(
        async (response) => {
          if (response.data.success) {
            setIsModalOpen(true);
            setModalValue("orderComplete");
            fetchCart();
          }
          // if (response.data.success) {
          //   setIsModalOpen(false);
          //   fetchCart();
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
        cart,
        setCart,
        productId,
        setProductId,
        addToCart,
        handleProductId,
        fetchCart,
        address,
        setAddress,
        saveOrder,
        orderItems,
        setOrderItems,
        setCartOrderArray,
        saveCartOrder,
        cartLoading,
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
// make sure use
export const useBuyContext = () => useContext(BuyContext);

export { BuyContext, BuyProvider };
