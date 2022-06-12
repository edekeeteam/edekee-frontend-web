import React from "react";
import PropTypes from "prop-types";
// import IndexStyle from "../index.module.scss";

import styles from "./BrandInfo.module.scss";
import { InputText } from "../../../../components/InputFields";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";

// import ImageSlider from "../../../../components/ImageSlider/ImageSlider";

function BrandInfo({ nextStep, prevStep }) {
  // const { source } = useUploadProductsContext();

  // function keyDown() {
  //   // eslint-disable-next-line no-console
  //   console.log("key Down");
  // }

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
        nextStep={nextStep}
      />
      <div className={styles.content}>
        <div>
          <p className="global-text-20 global-modal-sm-mb">Tell us about your Brand</p>
          <p className="global-text-12 global-modal-mb">
            These details will be shown to buyers viewing your shop.
          </p>
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Company name"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Phone number"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Email"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Street address"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          />
        </div>
        <div className="global-modal-mb " style={{ width: "100%" }}>
          <InputText
            label="Street address"
            name="signInEmail"
            type="text"
            // handleChange={handleInputChange}
            // value={signInEmail}
          />
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
