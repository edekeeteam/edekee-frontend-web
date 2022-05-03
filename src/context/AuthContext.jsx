/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, useReducer } from "react";
// import sublinks from "./data";
// import { useRouter } from "next/router";
import axios from "axios";
import reducer from "../reducers/authReducer";

import { useModalContext } from "./ModalContext";
// import { ModalContext } from "./ModalContext";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  // const router = useRouter();

  const initialFormState = {
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
    type: "sms",
    country: "",
    phoneNumber: "",
    day: "",
    month: "",
    year: "",
    username: "",

    files: [],
  };

  const [otp, setOtp] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccessful, setAuthSuccessful] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const [activeGender, setActiveGender] = useState("Male");
  const interests = ["07eb9d19-2d8e-4021-9a8c-88d5313f10f8"];

  const { setAuthModalValue, setIsModalOpen, setModalValue } = useModalContext();

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      field: [e.target.name],
      payload: [e.target.value],
    });
  };

  const handlePhoneNumberFormat = (phoneNo) => `0${phoneNo}`;

  const handleDOBformat = (bDay, bMonth, bYear) => {
    const d = new Date(bYear, bMonth, bDay);
    return d.toISOString();
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setBtnState(true);
    const params = {
      email: formState.signUpEmail[0],
      type: formState.type,
    };
    axios.post("https://eked.herokuapp.com/v1/api/auth/generate/otp", params).then(
      async (response) => {
        setAuthLoading(true);

        if (response.data.success) {
          // router.push("/auth/verifyOtp");
          // change AuthModalValue
          setAuthLoading(false);

          setAuthSuccessful(true);
          // formState.signUpEmail = "";
          // formState.signUpPassword = "";
          setTimeout(() => {
            setModalValue("otp");
            setAuthSuccessful(false);
            setBtnState(false);
          }, 1000);
        }
      }
      // console.log(response);
    );
    // console.log(signUpEmail[0], signUpPassword[0]);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const params = {
      email: formState.signInEmail[0],
      username: "randomUsername",
      password: formState.signInPassword[0],
    };
    // console.log(params);
    axios.post("https://eked.herokuapp.com/v1/api/auth/login", params).then(async (response) => {
      // if (true) {
      // }
      setAuthLoading(true);
      if (response.data.success) {
        // router.push("/auth/verifyOtp");
        // change AuthModalValue
        // setAuthModalValue(1);
        setAuthLoading(false);

        setAuthSuccessful(true);
        // formState.signUpEmail = "";
        // formState.signUpPassword = "";
        setTimeout(() => {
          setIsModalOpen(false);
          setAuthModalValue(1);
          setAuthSuccessful(false);
          setBtnState(false);
          formState.signInEmail = "";
          formState.signInPassword = "";
        }, 1000);
      }
    });
    // console.log(signUpEmail[0], signUpPassword[0]);
  };

  // eslint-disable-next-line no-shadow
  const handleOtpVerification = (otp) => {
    // e.preventDefault();
    // console.log(otp);
    // console.log(otp, formState.signUpEmail[0], formState.signUpPassword[0]);

    const formattedNumber = handlePhoneNumberFormat(formState.phoneNumber[0]);
    const formattedDOB = handleDOBformat(formState.year[0], formState.month[0], formState.day[0]);
    const params = {
      code: parseInt(otp, 10),
      email: formState.signUpEmail[0],
      password: formState.signUpPassword[0],
      username: formState.username[0],
      phone: formattedNumber,
      dob: formattedDOB,
      gender: activeGender,
      interests,
    };
    console.log(params);
    axios
      .post("https://eked.herokuapp.com/v1/api/auth/verify/otp", params)
      .then(async (response) => {
        if (response.data.success) {
          //  alert("registered successfully");
          setIsModalOpen(false);
          setAuthModalValue(1);
          // setModalValue(1);

          // router.push("/homePage");

          // clearInputs();
        }
        // console.log(response.data.data.success);
      });
  };

  // const getCategories = () => {
  //   axios.post("");
  // };

  // const values = useMemo(
  //   () => (),
  //   []
  // );

  return (
    <AuthContext.Provider
      value={{
        ...formState,
        otp,
        setOtp,
        handleInputChange,
        handleRegistration,
        handleOtpVerification,
        handleLogin,
        authSuccessful,
        setAuthSuccessful,
        authLoading,
        setAuthLoading,
        btnState,
        setBtnState,
        activeGender,
        setActiveGender,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
// make sure use
export const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider };
