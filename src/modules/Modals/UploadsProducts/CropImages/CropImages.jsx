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
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div>
      <div>
        <p className="global-text-20 global-modal-sm-mb">Help us know your product</p>
        <p className="global-text-12 global-modal-mb">Crop around your product in the image.</p>
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
