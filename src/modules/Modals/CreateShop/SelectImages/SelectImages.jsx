import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectImages.module.scss";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";

function SelectImages({ nextStep }) {
  // eslint-disable-next-line no-unused-vars
  // const { setPicturesFiles, setSource } = useUploadProductsContext();

  // const inputRef = React.useRef();

  // const handleFileChange = (event, func) => {
  //   const { files } = event.target;
  //   // const images = [...event.target.files].map((file) => URL.createObjectURL(file));
  //   // setSource(images);
  //   setPicturesFiles([...files]);
  //   // next Steps Function
  //   func();
  //   // nextSteps Functions
  // };

  // const handleChoose = () => {
  //   inputRef.current.click();
  // };

  return (
    <div className={styles.Input}>
      {/* <input
        ref={inputRef}
        className={styles.selectInput}
        accept=".jpg, .jpeg, .png, .svg"
        type="file"
        multiple
        onChange={(e) => {
          handleFileChange(e, nextStep());
        }}
      /> */}
      <div className={styles.upload}>
        <p className="global-text-20 global-modal-mb">Upload Products</p>
        <p className="global-text-12 global-modal-mb ">
          Upload least 4 photos of your products. Click the upload button to select photos.
        </p>

        <button className="global-upload-btn" onClick={nextStep()} type="button">
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
