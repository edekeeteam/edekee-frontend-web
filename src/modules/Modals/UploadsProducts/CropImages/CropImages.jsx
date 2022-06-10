import React from "react";
import PropTypes from "prop-types";
import styles from "./CropImages.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";

import ImageSlider from "../../../../components/ImageSlider/ImageSlider";

function CropImages({ nextStep, prevStep }) {
  const { source } = useUploadProductsContext();

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
          {/* <span>Next</span> */}
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div>
      <div>
        <ImageSlider imagesSlides={source} />
      </div>
    </div>
  );
}

CropImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default CropImages;
