/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useReducer, useState } from "react";
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
    deliveryStatus: "",
    categoryId: "",
    files: [],
  };

  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [source, setSource] = useState(null);
  const [logofile, setLogoFile] = useState(null);
  // const [citiesArray, setCitiesArray] = useState([]);
  const [statesArray, setStatesArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  const handleInputChange = (e) => {
    // e.preventDefault();
    console.log(e.target.name);
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      field: [e.target.name],
      payload: [e.target.value],
    });
  };

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
      // setCategory(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

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
