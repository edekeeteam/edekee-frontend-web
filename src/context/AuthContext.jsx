/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, useReducer } from "react";
// import sublinks from "./data";
// import { useRouter } from "next/router";
// import countriesArr from "../data/countriesArr"
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
  const [errors, setErrors] = useState({});
  // const [isSubmit, setIsSubmit] = false;
  // const [activeGender, setActiveGender] = useState("Male");
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

  const handlePhoneNumberFormat = (phoneNo) => {
    const phoneNumberArr = phoneNo.split("");
    console.log(phoneNumberArr);
    if (phoneNumberArr[0] === "0") {
      return phoneNo;
    }
    return `0${phoneNo}`;
  };

  const handleDOBformat = (bDay, bMonth, bYear) => {
    const d = new Date(bYear, bMonth, bDay);
    return d.toISOString();
  };

  const validateEmailAndPassword = (email, password) => {
    const newErrors = {};
    console.log(email, password);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      newErrors.email = "email required";
    } else if (!regex.test(email)) {
      newErrors.email = "Incorrect email!";
    }
    if (!password) {
      newErrors.password = "password required";
    } else if (password.length < 7) {
      newErrors.password = "password cannot be less than 7 chars";
    }
    return newErrors;
  };

  const validatePhoneNumber = (number) => {
    const newErrors = {};

    const newNumber = handlePhoneNumberFormat(number);
    const regex1 = /^\d{10}$/;
    const regex2 = /^\d{11}$/;

    if (!regex1.test(newNumber) && !regex2.test(newNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    return newErrors;
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    const emailAndPasswordErrors = validateEmailAndPassword(
      formState.signUpEmail[0],
      formState.signUpPassword[0]
    );
    if (Object.keys(emailAndPasswordErrors).length !== 0) {
      setErrors(emailAndPasswordErrors);
      console.log(emailAndPasswordErrors);
    } else {
      setAuthLoading(true);
      setBtnState(true);
      const params = {
        email: formState.signUpEmail[0],
        type: formState.type,
      };
      // console.log();
      axios.post("https://eked.herokuapp.com/v1/api/auth/generate/otp", params).then(
        async (response) => {
          setAuthLoading(true);
          console.log(response);
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
          } else {
            setAuthLoading(false);
            setErrors({ email: `${response.data.message}` });
          }
        }
        // console.log(response);
      );
    }

    // console.log(signUpEmail[0], signUpPassword[0]);
  };

  const resendOtp = () => {
    const params = {
      email: formState.signInEmail[0],
      type: formState.type,
    };
    axios
      .post("https://eked.herokuapp.com/v1/api/auth/generate/otp", params)
      .then(
        async (response) => {
          console.log(response);
          // if (response.data.success) {

          //   setTimeout(() => {
          //     setModalValue("otp");
          //     setAuthSuccessful(false);
          //     setBtnState(false);
          //   }, 1000);
          // }
        }
        // console.log(response);
      )
      .catch((error) => console.log(error));
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const params = {
      email: formState.signInEmail[0],
      // username: "randomUsername",
      password: formState.signInPassword[0],
      username: formState.username,
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

    // const formattedNumber = handlePhoneNumberFormat(formState.phoneNumber[0]);
    // const formattedDOB = handleDOBformat(formState.year[0], formState.month[0], formState.day[0]);
    const params = {
      code: parseInt(otp, 10),
      email: formState.signUpEmail[0],
      password: formState.signUpPassword[0],
      // username: formState.username[0],
      interests,
      // phone: formattedNumber,
      // dob: formattedDOB,
      // gender: activeGender,
      // interests,
    };
    console.log(params);
    axios
      .post("https://eked.herokuapp.com/v1/api/auth/verify/otp", params)
      .then(async (response) => {
        console.log(response);
        if (response.data.success) {
          //  alert("registered successfully");
          setModalValue("phonecontact");
          // setIsModalOpen(false);
          console.log("registered successfully");
          setAuthModalValue(1);

          // clearInputs();
        }
      })
      .catch((error) => console.log(error));
  };

  // const getCategories = () => {
  //   axios.post("");
  // };

  // const values = useMemo(
  //   () => (),
  //   []
  // );

  const saveCountryAndNumber = () => {
    const countryAndNumberErrors = validatePhoneNumber(formState.phoneNumber[0]);
    if (Object.keys(countryAndNumberErrors).length !== 0) {
      setErrors(countryAndNumberErrors);
      console.log(countryAndNumberErrors);
    } else {
      setTimeout(() => {
        setErrors(countryAndNumberErrors);
        setModalValue("dobinfo");
      }, 1000);
    }
  };

  const validateDob = (dobDay, dobMonth, dobYear) => {
    const newErrors = {};

    if (parseInt(dobDay, 10) > 31 || parseInt(dobDay, 10) < 1) {
      newErrors.dob = "invalid Date";
    }
    if (parseInt(dobMonth, 10) > 12 || parseInt(dobMonth, 10) < 1) {
      newErrors.dob = "invalid Date";
    }
    if (parseInt(dobYear, 10) > 2020 || parseInt(dobYear, 10) < 1900) {
      newErrors.dob = "invalid Date";
    }

    return newErrors;
  };

  const saveDob = () => {
    const DobErrors = validateDob(formState.day[0], formState.month[0], formState.year[0]);
    if (Object.keys(DobErrors).length !== 0) {
      setErrors(DobErrors);
      console.log(DobErrors);
    } else {
      setTimeout(() => {
        setErrors(DobErrors);
        setModalValue("username");
      }, 1000);
    }
  };

  const checkUsername = () => {
    if (!formState.username[0]) {
      setErrors({ username: "username required" });
    } else {
      const params = {
        username: formState.username[0],
      };
      axios
        .post("https://eked.herokuapp.com/v1/api/user/username/verify", params)
        .then(async (response) => {
          console.log(response);
          if (response.data.success) {
            const newParams = {
              email: formState.signUpEmail[0],
              username: formState.username[0],
              country: formState.country[0],
              dob: handleDOBformat(formState.day[0], formState.month[0], formState.year[0]),
              gender: formState.gender,
              phone: handlePhoneNumberFormat(formState.phoneNumber[0]),
            };
            console.log(newParams);
            //  alert("registered successfully");
            axios
              .put("https://eked.herokuapp.com/v1/api/user/update", newParams)
              .then((newResponse) => {
                console.log(newResponse);
                // const res = newResponse;

                setIsModalOpen(false);
                console.log("registered successfully");
                setAuthModalValue(1);
                // if (res.data.success === true) {
                //   //  alert("registered successfully");
                //   // setModalValue(1);
                //   // router.push("/homePage");
                //   // clearInputs();
                // }
                // console.log(response.data.data.success);
              });
            // setIsModalOpen(false);
            console.log("registered successfully");

            setAuthModalValue(1);

            // setModalValue(1);

            // router.push("/homePage");

            // clearInputs();
          }
          // console.log(response.data.data.success);
        });
    }
  };

  // const validateEmailAndPassword = (email, password) => {
  //   const newErrors = {};
  //   console.log(email, password);
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!email) {
  //     newErrors.email = "email required";
  //   } else if (!regex.test(email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!password) {
  //     newErrors.password = "password required";
  //   }
  //   return newErrors;
  // };

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
        // activeGender,
        // setActiveGender,
        saveCountryAndNumber,
        saveDob,
        errors,
        checkUsername,
        resendOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
// make sure use
export const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider };
