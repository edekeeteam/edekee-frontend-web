/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useReducer, useState } from "react";
// import sublinks from "./data";
// import { useRouter } from "next/router";
// import countriesArr from "../data/countriesArr"
import axios from "axios";
import reducer from "../reducers/authReducer";

import { useModalContext } from "./ModalContext";
import apiMethods from "../utils/apiMethods";
import { useToastContext } from "./ToastContext";
// import { ModalContext } from "./ModalContext";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  // const router = useRouter();

  const initialFormState = {
    signUpEmail: "",
    signUpPassword: "",
    confirmPassword: "",
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
  const [userInfo, setUserInfo] = useState(null);
  const [subMail, setSubMail] = useState("");
  const [subPass, setSubPass] = useState("");

  const [timer, setTimer] = useState(60);

  const toast = useToastContext();

  // const [isSubmit, setIsSubmit] = false;
  // const [activeGender, setActiveGender] = useState("Male");
  const interests = [
    "284fe0cd-f693-4271-9a9c-dc51fc2a2405",
    "1daacf30-01c6-41f1-b00d-4767ed80e1d0",
    "108185e1-ebc8-4f1b-b0f2-321925e8ecb0",
  ];
  // const [user, setUser] = useLocalStorage("userId", "");
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const { setAuthModalValue, setIsModalOpen, setModalValue } = useModalContext();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setUser(localStorage.getItem("userId"));
      setToken(localStorage.getItem("token"));
    } else {
      localStorage.clear();
    }
  }, []);

  const fetchUserInfo = () =>
    apiMethods.get(`/user/${localStorage.getItem("userId")}`).then((res) => {
      setUserInfo(res.data.data);
      localStorage.setItem("shopId", res.data.data.shop_meta.id);
      // console.log(res.data.data.shop_meta.id);
    });

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const handleInputChange = (e) => {
    // e.preventDefault();
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

  const validateEmailAndPassword = (email, password, confirmPassword) => {
    const newErrors = {};
    console.log(email, password);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/;
    if (!email) {
      newErrors.email = "email required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Incorrect email!";
    }
    if (!password) {
      newErrors.password = "password required";
    } else if (password.length < 7) {
      newErrors.password = "password cannot be less than 7 chars";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
    } else if (password !== confirmPassword) {
      newErrors.password = "passwords do not match";
    }

    return newErrors;
  };

  const validateLoginCredentials = (email, password) => {
    const newErrors = {};
    console.log(email, password, "ssss");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/;
    if (!email) {
      newErrors.loginEmail = "email required";
    } else if (!emailRegex.test(email)) {
      newErrors.loginEmail = "Incorrect email!";
    }
    if (!password) {
      newErrors.loginPassword = "password required";
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
      formState.signUpPassword[0],
      formState.confirmPassword[0]
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
      // signUpMail = formState.signUpEmail[0];
      // signUpPass = formState.signUpPassword[0];
      // console.log();
      setSubMail(formState.signUpEmail[0]);
      setSubPass(formState.signUpPassword[0]);
      axios
        .post(
          "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/auth/generate/otp",
          params
        )
        .then(
          async (response) => {
            setAuthLoading(true);
            console.log(response);
            if (response.data.success) {
              // router.push("/auth/verifyOtp");
              // change AuthModalValue
              setAuthLoading(false);
              formState.signUpEmail = "";
              formState.signUpPassword = "";
              formState.confirmPassword = "";

              setAuthSuccessful(true);

              setTimeout(() => {
                setModalValue("otp");
                setAuthSuccessful(false);
                setBtnState(false);
              }, 1000);
            } else {
              setAuthLoading(false);
              setBtnState(false);

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
      email: subMail,
      type: formState.type,
    };
    axios
      .post(
        "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/auth/generate/otp",
        params
      )
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
    const emailAndPasswordErrors = validateLoginCredentials(
      formState.signInEmail[0],
      formState.signInPassword[0]
    );
    if (Object.keys(emailAndPasswordErrors).length !== 0) {
      setErrors(emailAndPasswordErrors);
      console.log(emailAndPasswordErrors);
    } else {
      setAuthLoading(true);
      setBtnState(true);
      const params = {
        email: formState.signInEmail[0],
        // username: "randomUsername",
        password: formState.signInPassword[0],
      };

      axios
        .post(
          "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/auth/login",
          params
        )
        .then(async (response) => {
          // if (true) {
          // }
          console.log(response);
          setAuthLoading(true);
          if (response.data.success) {
            // router.push("/auth/verifyOtp");
            // change AuthModalValue
            // setAuthModalValue(1);
            // console.log(response);
            toast.open({ msg: "logged in successfully", type: "success" });
            console.log(response.data.user.id);
            localStorage.setItem("userId", response.data.user.id);
            localStorage.setItem("token", response.data.token);
            setUser(localStorage.getItem("userId"));
            setAuthLoading(false);

            setAuthSuccessful(true);
            // eslint-disable-next-line no-use-before-define
            await fetchUserInfo();
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
          } else if (!response.data.success) {
            setAuthLoading(false);
            const newErrors = {};
            newErrors.loginEmail = response.data.message;
            setErrors(newErrors);
            setBtnState(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // console.log(params);
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
      code: otp,
      email: subMail,
      password: subPass,
      // username: formState.username[0],
      interests,
      // phone: formattedNumber,
      // dob: formattedDOB,
      // gender: activeGender,
      // interests,
    };

    axios
      .post(
        "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/auth/verify/otp",
        params
      )
      .then(async (response) => {
        console.log(response);
        if (response.data.success) {
          //  alert("registered successfully");
          // console.log(response.data.user.id);
          // formState.signUpEmail = "";
          // formState.signUpPassword = "";
          // formState.confirmPassword = "";
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("token", response.data.token);
          setUser(localStorage.getItem("userId"));

          setModalValue("phonecontact");
          // setIsModalOpen(false);
          console.log("registered successfully");
          setOtp("");
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

  const saveCountryAndNumber = (e) => {
    e.preventDefault();
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

    if (!dobDay || !dobMonth || !dobYear) {
      newErrors.dob = "fill all fields";
    }

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

  const saveDob = (e) => {
    e.preventDefault();
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

  const checkUsername = (e) => {
    e.preventDefault();
    if (!formState.username[0]) {
      setErrors({ username: "username required" });
    } else {
      const params = {
        username: formState.username[0],
      };
      axios
        .post(
          "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/user/username/verify",
          params
        )
        .then(async (response) => {
          console.log(response.data);
          if (response.data.success) {
            const newParams = {
              email: subMail,
              username: formState.username[0],
              country: "Nigeria",
              dob: handleDOBformat(formState.day[0], formState.month[0], formState.year[0]),
              gender: "male",
              // gender: formState.gender,
              phone: handlePhoneNumberFormat(formState.phoneNumber[0]),
            };
            console.log(newParams);
            //  alert("registered successfully");
            axios
              .put(
                "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/user/update",
                newParams
              )
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

  useEffect(() => {
    fetchUserInfo();
  }, [setUser]);

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
        user,
        token,
        // activeGender,
        // setActiveGender,
        saveCountryAndNumber,
        saveDob,
        setErrors,
        errors,
        checkUsername,
        resendOtp,
        userInfo,
        fetchUserInfo,
        timer,
        setTimer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// make sure use
export const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider };
