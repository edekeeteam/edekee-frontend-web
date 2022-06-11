import React from "react";
import PropTypes from "prop-types";
import styles from "./CropImages.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";

import ImageSlider from "../../../../components/ImageSlider/ImageSlider";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

function CropImages({ nextStep, prevStep }) {
  const { pictureFiles, deleteImage, addImage } = useUploadProductsContext();

  return (
    <div className={styles.cropImages}>
      <ModalHeader
        showNext={pictureFiles.length === 4}
        canCancel
        prevStep={prevStep}
        nextStep={nextStep}
      />
      <div>
        <ImageSlider
          imagesSlides={pictureFiles}
          prevStep={prevStep}
          addImage={addImage}
          deleteImage={deleteImage}
        />
      </div>
    </div>
  );
}

CropImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default CropImages;
