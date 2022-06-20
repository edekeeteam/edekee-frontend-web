/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext";
// import useGetCities from "../hooks/useGetCities";
// import useGetStates from "../hooks/useGetStates";
// import reducer from "../reducers/shopReducer";

const CreateShopContext = React.createContext();

// eslint-disable-next-line react/prop-types
function CreateShopProvider({ children }) {
  // const initialFormState = {
  //   // companyName: "",
  //   email: "",
  //   streetAddress: "",
  //   phoneNumber: "",
  //   city: "",
  //   state: "",

  //   categoryId: "",
  //   files: [],
  // };

  // const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [source, setSource] = useState(null);
  const [logofile, setLogoFile] = useState(null);
  const [categoryArray, setCategoryArray] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  // const [citiesArray, setCitiesArray] = useState([]);
  const [statesArray, setStatesArray] = useState([]);
  const [citiesArray, setCitiesArray] = useState([]);

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [files, setFiles] = useState([]);
  // const [servicePackages, setServicePackages] = useState([]);

  const [percentage, setPercentage] = useState(0);

  const { fetchUserInfo } = useAuthContext();

  // const handleInputChange = (e) => {
  //   // e.preventDefault();
  //   console.log(e.target.value);
  //   dispatch({
  //     type: "HANDLE_INPUT_CHANGE",
  //     field: [e.target.name],
  //     payload: [e.target.value],
  //   });
  // };

  const getResource = () => {
    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/states", {
        headers: {
          Authorization: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setStatesArray(res.data.data);
        setState(res.data.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cities", {
        headers: {
          Authorization: localStorage.getItem("token"),
          portal: "web",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setCitiesArray(res.data.data);
        setCity(res.data.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/category", {
        headers: {
          Authorization: localStorage.getItem("token"),
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
    // console.log(categoryId);

    let percent = 0;
    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`); // just to see whats happening in the console
        if (percent <= 100) {
          setPercentage(percent); // hook to set the value of current level that needs to be passed to the progressbar
        }
      },
      headers: {
        Authorization: localStorage.getItem("token"),
        portal: "web",
      },
    };

    // console.log(typeof logofile, logofile);

    const formData = new FormData();
    formData.append("company_name", companyName);

    formData.append("phone", phoneNumber);
    formData.append("email", email);
    formData.append("address", streetAddress);
    formData.append("city_id", `${city}`);
    formData.append("state_id", `${state}`);
    formData.append("logistics", "Gokada");
    formData.append("delivery_status", deliveryStatus);
    formData.append("category_id", categoryId);
    formData.append("logo", logofile);

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    // const params = {
    //   company_name: companyName,
    //   slug: "beunique",
    //   phone: phoneNumber,
    //   email,
    //   address: streetAddress,
    //   city_id: `${city}`,
    //   state_id: `${state}`,
    //   logistics: "Gokada",
    //   delivery_status: deliveryStatus,
    //   category_id: categoryId,
    //   logo: logofile,
    // };
    axios
      .post(
        "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/shop",
        formData,

        config
      )
      .then((res) => {
        console.log(res);
        fetchUserInfo();
        // console.log(typeof config);

        setPercentage(percent);
        () => {
          setTimeout(() => {
            setPercentage(0);
            setSource(null);
          }, 1000);
        };
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
        citiesArray,
        statesArray,
        source,
        setSource,
        logofile,
        setLogoFile,
        categoryArray,
        deliveryStatus,
        setDeliveryStatus,
        createShop,
        companyName,
        setCompanyName,
        email,
        setEmail,
        streetAddress,
        setStreetAddress,
        phoneNumber,
        setPhoneNumber,
        city,
        setCity,
        state,
        setState,
        files,
        setFiles,
        categoryId,
        setCategoryId,
        percentage,
      }}
    >
      {children}
    </CreateShopContext.Provider>
  );
}

// make sure use
export const useCreateShopContext = () => useContext(CreateShopContext);

export { CreateShopContext, CreateShopProvider };
