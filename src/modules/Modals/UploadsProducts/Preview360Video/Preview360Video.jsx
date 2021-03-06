import React from "react";
import PropTypes from "prop-types";
import globalUploadStyles from "../index.module.scss";
import styles2 from "./Preview360Video.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

function Preview360Video({ nextStep, prevStep }) {
  const { videoFile, deleteVideo } = useUploadProductsContext();
  const handleVideoDelete = (func) => {
    func();
    deleteVideo();
  };

  return (
    <div className={`${globalUploadStyles.Preview} ${styles2.previewVideo}`}>
      <ModalHeader prevStep={prevStep} nextStep={nextStep} />
      <div className={styles2.previewVideo}>
        <div className={styles2.actions}>
          <div
            onClick={() => {
              // deleteVideo()
              handleVideoDelete(prevStep());
            }}
            className={`${styles2.iconBackground} ${styles2.delete}`}
            onKeyDown={
              // ()=>{
              // deleteVideo()
              prevStep()
              // }
            }
            role="button"
            tabIndex={0}
          >
            <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
          </div>
        </div>
        <video
          // width="auto"
          controls
          src={URL.createObjectURL(videoFile)}
          muted
        />
      </div>
    </div>
  );
}

Preview360Video.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Preview360Video;
