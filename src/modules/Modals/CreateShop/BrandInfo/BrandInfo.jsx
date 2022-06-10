import React from "react";
import PropTypes from "prop-types";
import styles from "./BrandInfo.module.scss";
import { InputText } from "../../../../components/InputFields";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";

// import ImageSlider from "../../../../components/ImageSlider/ImageSlider";

function BrandInfo({ nextStep, prevStep }) {
  // const { source } = useUploadProductsContext();

  return (
    <div className={styles.cropImages}>
      <div className={styles.Header}>
        <div
          onClick={prevStep()}
          onKeyDown={() => {
            prevStep();
          }}
          role="button"
          tabIndex={0}
        >
          <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
        </div>
        <div onClick={nextStep()} onKeyDown={() => {}} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div>
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
