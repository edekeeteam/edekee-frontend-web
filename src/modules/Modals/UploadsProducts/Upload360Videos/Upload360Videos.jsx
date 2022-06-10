import React from "react";
import PropTypes from "prop-types";
import styles from "../SelectImages/SelectImages.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";

function Upload360Videos({ nextStep }) {
  const { setPicturesFiles, setSource } = useUploadProductsContext();

  const inputRef = React.useRef();

  const handleFileChange = (event, func) => {
    const { files } = event.target;
    const images = [...event.target.files].map((file) => URL.createObjectURL(file));
    setSource(images);
    setPicturesFiles(files);
    // next Steps Function
    func();
    // nextSteps Functions
  };

  const handleChoose = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.Input}>
      <input
        ref={inputRef}
        className={styles.selectInput}
        accept=".jpg, .jpeg, .png, .svg"
        type="file"
        multiple
        onChange={(e) => {
          handleFileChange(e, nextStep());
        }}
      />
      <div className={styles.upload}>
        <p className="global-text-20 global-modal-mb">Upload a 360 video</p>
        <p className="global-text-12 global-modal-mb ">
          Upload a 360 video of your product to help us recognize your product.
        </p>

        <button className="global-upload-btn" onClick={handleChoose} type="button">
          Upload
        </button>
      </div>
    </div>
  );
}

Upload360Videos.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default Upload360Videos;
