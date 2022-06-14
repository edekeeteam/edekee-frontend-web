import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectImages.module.scss";

import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";

function SelectImages({ nextStep }) {
  // eslint-disable-next-line no-unused-vars
  const { setPicturesFiles, setSource } = useUploadProductsContext();

  const inputRef = React.useRef();

  const handleFileChange = (event, func) => {
    const { files } = event.target;
    // const images = [...event.target.files].map((file) => URL.createObjectURL(file));
    // setSource(images);
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

      <div className="global-modal-mb">
        <img src="./icons/selectImageIcon.svg" alt="" />
      </div>
      <div className={styles.upload}>
        <ModalTitle title="Drag and drop photos" desc="  Upload Photos of your Service" />

        <button className="global-upload-btn global-text-10" onClick={handleChoose} type="button">
          Select files
        </button>
      </div>
    </div>
  );
}

SelectImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectImages;
