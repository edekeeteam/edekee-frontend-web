/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
// import useGetCities from "../hooks/useGetCities";
// import useGetStates from "../hooks/useGetStates";
import reducer from "../reducers/shopReducer";

const CreateShopContext = React.createContext();

// eslint-disable-next-line react/prop-types
function CreateShopProvider({ children }) {
  const initialFormState = {
    companyName: "",
    email: "",
    streetAddress: "",
    phoneNumber: "",
    city: "",
    state: "",

    categoryId: "",
    files: [],
  };

  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [source, setSource] = useState(null);
  const [logofile, setLogoFile] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [categoryArray, setCategoryArray] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  // const [citiesArray, setCitiesArray] = useState([]);
  const [statesArray, setStatesArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  const handleInputChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      field: [e.target.name],
      payload: [e.target.value],
    });
  };

  const getResource = () => {
    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/states", {
        headers: {
          Authorisation: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setStatesArray(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cities", {
        headers: {
          Authorisation: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setCitiesArray(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/category", {
        headers: {
          Authorisation: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCategoryArray(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createShop = () => {
    console.log(categoryId);

    const params = {
      company_name: formState.companyName[0],
      slug: "beunique",
      phone: formState.phoneNumber[0],
      email: formState.email[0],
      address: formState.streetAddress[0],
      city_id: formState.city[0],
      state_id: formState.state[0],
      logistics: "Gokada",
      delivery_status: deliveryStatus,
      category_id: categoryId,
      logo: logofile,
    };
    axios
      .post("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/shop", params, {
        headers: {
          Authorisation: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResource();
  }, []);

  return (
    <CreateShopContext.Provider
      value={{
        ...formState,
        handleInputChange,
        citiesArray,
        statesArray,
        source,
        setSource,
        logofile,
        setLogoFile,
        categoryArray,
        deliveryStatus,
        setDeliveryStatus,
        setCategoryId,
        createShop,
        // size,
        // setSize,
        // quantity,
        // setQuantity,
        // color,
        // handleColorChange,
        // handleSizeChange,
      }}
    >
      {children}
    </CreateShopContext.Provider>
  );
}

// make sure use
export const useCreateShopContext = () => useContext(CreateShopContext);

export { CreateShopContext, CreateShopProvider };
