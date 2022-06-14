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
    companyName,
    handleInputChange,
    phoneNumber,
    email,
    streetAddress,
    state,
    statesArray,
    city,
    citiesArray,
  } = useCreateShopContext();

  // const [citiesArray, setCitiesArray] = useState([]);
  // const [statesArray] = useState([]);

  // const { data: cities, isLoading: loading } = useGetCities();

  // if (!loading) {
  //   console.log(cities);
  //   setCitiesArray(cities.data);
  // }
  const handleNextStep = (func) => {
    if (companyName === "") {
      alert("add name");
    } else {
      func();
    }
  };

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
        // showNext={pictureFiles.length === 4}
        // canCancel
        prevStep={prevStep}
        nextStep={() => handleNextStep(nextStep())}
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
            handleChange={handleInputChange}
            value={companyName}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Phone number"
            name="phoneNumber"
            type="number"
            handleChange={handleInputChange}
            value={phoneNumber}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Email"
            name="email"
            type="text"
            handleChange={handleInputChange}
            value={email}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Street address"
            name="streetAddress"
            type="text"
            handleChange={handleInputChange}
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
              handleInputChange(e);
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
              handleInputChange(e);
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
