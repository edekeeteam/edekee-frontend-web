import PropTypes from "prop-types";
import { useEffect } from "react";
import globalUploadStyles from "../index.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";

import ImageSlider from "../../../../components/ImageSlider/ImageSlider";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import { useToastContext } from "../../../../context/ToastContext";

function CropImages({ nextStep, prevStep }) {
  const toast = useToastContext();
  const { pictureFiles, deleteImage, addImage } = useUploadProductsContext();
  useEffect(() => {
    if (pictureFiles.length !== 4) {
      toast.open({ msg: "Select 4 images", type: "warning" });
    }
    return () => false;
  }, []);

  return (
    <div className={globalUploadStyles.Preview}>
      <ModalHeader
        showNext={pictureFiles.length === 4}
        canCancel
        canFinish={false}
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
