import { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./SelectImages.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";

function SelectImages({ nextStep }) {
  const { setPicturesFiles } = useUploadProductsContext();

  const inputRef = useRef();

  const handleFileChange = (event, func) => {
    const { files } = event.target;
    setPicturesFiles([...files]);
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
        <p className="global-text-20 global-modal-mb">Upload Products</p>
        <p className="global-text-12 global-modal-mb ">
          Upload least 4 photos of your products. Click the upload button to select photos.
        </p>

        <button className="global-upload-btn" onClick={handleChoose} type="button">
          Upload
        </button>
      </div>
    </div>
  );
}

SelectImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectImages;
