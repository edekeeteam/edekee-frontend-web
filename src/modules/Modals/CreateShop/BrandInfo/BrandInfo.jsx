/* eslint-disable no-alert */
import React from "react";
import PropTypes from "prop-types";
// import IndexStyle from "../index.module.scss";

import styles from "./BrandInfo.module.scss";
import { InputText } from "../../../../components/InputFields";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import { useCreateShopContext } from "../../../../context/CreateShopContext";
// import useGetCities from "../../../../hooks/useGetCities";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";

// import ImageSlider from "../../../../components/ImageSlider/ImageSlider";

function BrandInfo({ nextStep, prevStep }) {
  const {
    // companyName,
    phoneNumber,
    email,
    streetAddress,
    state,
    statesArray,
    city,
    citiesArray,
    companyName,
    setCompanyName,
    setStreetAddress,
    setPhoneNumber,
    setCity,
    setState,
    setEmail,
  } = useCreateShopContext();

  // const [citiesArray, setCitiesArray] = useState([]);
  // const [statesArray] = useState([]);

  // const { data: cities, isLoading: loading } = useGetCities();

  // if (!loading) {
  // console.log(cities);
  //   setCitiesArray(cities.data);
  // }

  const cityOptions = citiesArray.map((eachCity) => (
    <option key={eachCity.id} value={eachCity.id}>
      {" "}
      {eachCity.name}{" "}
    </option>
  ));
  const stateOptions = statesArray.map((eachState) => (
    <option key={eachState.id} value={eachState.id}>
      {" "}
      {eachState.name}{" "}
    </option>
  ));

  const handleNameChange = (e) => {
    if (e.target.name === "companyName") {
      setCompanyName(e.target.value);
      // console.log(e.target.value);
    } else if (e.target.name === "streetAddress") {
      setStreetAddress(e.target.value);
      // console.log(e.target.value);
    } else if (e.target.name === "phoneNumber") {
      setPhoneNumber(e.target.value);
      // console.log(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
      // console.log(e.target.value);
    } else if (e.target.name === "state") {
      setState(e.target.value);
      // console.log(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      // console.log(e.target.value);
    }
  };

  // const handleNext = () => !(companyName === "");

  return (
    <div className={styles.brandInfo}>
      {/* <div className={`${IndexStyle.Header} global-modal-sm-mb`}>
        <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/arrow-left.svg`} alt="" />
        </div> */}
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      {/* <div onClick={() => nextStep()} onKeyDown={keyDown} tabIndex={0} role="button">
          <img src={`${process.env.PUBLIC_URL}/icons/arrow-right-blue.svg`} alt="" />
        </div>
      </div> */}
      <ModalHeader
        showNext={companyName && phoneNumber && streetAddress && city && state && email}
        // canCancel
        // canFinish={false}
        prevStep={prevStep}
        nextStep={() => nextStep()}
      />
      <div className={styles.content}>
        <div>
          <p className="global-text-20 global-modal-sm-mb">Tell us about your Brand</p>
          <p className="global-text-12 global-modal-mb">
            These details will be shown to buyers viewing your shop.
          </p>
        </div>
        <div className="global-modal-mb" style={{ width: "100%" }}>
          <InputText
            label="Company name"
            name="companyName"
            type="text"
            handleChange={(e) => {
              handleNameChange(e);
            }}
            value={companyName}
          />
          {/* {errors.loginPassword && ( */}
          {/* <p className="global-text-12 global-error-text ">error </p> */}
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Phone number"
            name="phoneNumber"
            type="number"
            handleChange={(e) => {
              handleNameChange(e);
            }}
            value={phoneNumber}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Email"
            name="email"
            type="text"
            handleChange={(e) => {
              handleNameChange(e);
            }}
            value={email}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Street address"
            name="streetAddress"
            type="text"
            handleChange={(e) => {
              handleNameChange(e);
            }}
            value={streetAddress}
          />
        </div>
        <div className={styles.selectInputSection} style={{ width: "100%" }}>
          <select
            className={styles.selectInput}
            // style={{ paddingRight: "25px", paddingLeft: "20px" }}
            value={city}
            name="city"
            onChange={(e) => {
              // handleCountryChange(e.target.value);
              handleNameChange(e);
            }}
          >
            {cityOptions}
          </select>
          <select
            className={styles.selectInput}
            // style={{ paddingRight: "25px", paddingLeft: "20px" }}
            value={state}
            name="state"
            onChange={(e) => {
              // handleCountryChange(e.target.value);
              handleNameChange(e);
            }}
          >
            {stateOptions}
          </select>
          {/* <InputText
            label="Street address"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          /> */}
        </div>
      </div>
      {/* <div>
        <ImageSlider imagesSlides={source} />
      </div> */}
    </div>
  );
}

BrandInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default BrandInfo;
