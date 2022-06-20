import React from "react";
import PropTypes from "prop-types";
// import globalUploadStyles from "../index.module.scss";
import styles2 from "./PreviewVideo.module.scss";
import styles from "../../../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal.module.scss";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import { useUploadContext } from "../../../../context/UploadContext";
import { InputTextArea } from "../../../../components/InputFields";

function PreviewVideo({ nextStep, prevStep }) {
  const { source } = useUploadContext();
  // const handleVideoDelete = (func) => {
  //   func();
  //   // deleteVideo();
  // };

  return (
    <div className={styles.videoPreviewContainer} style={{ height: "auto" }}>
      <ModalHeader prevStep={prevStep} nextStep={nextStep} />
      {/* <div className={styles2.previewVideo}> */}

      <video width="50%" height="100%" src={source} muted style={{ marginBottom: "10px" }} />
      {/* </div> */}
      {/* <div>footer</div> */}
      <div style={{ width: "100%", padding: "0 15px" }}>
        <InputTextArea name="video Description" label="Video Description" height={100} />
        <div className={styles2.paymentOnDelivery}>
          <p>Tag Product</p>

          <img src="/icons/purpleTick.svg" alt="" />
        </div>{" "}
        <div className={styles2.paymentOnDelivery}>
          <p>Tag Service</p>

          <img src="/icons/purpleTick.svg" alt="" />
        </div>{" "}
      </div>
    </div>
  );
}

PreviewVideo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default PreviewVideo;
