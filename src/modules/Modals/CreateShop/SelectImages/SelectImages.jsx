/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectImages.module.scss";
import Button from "../../../../components/Button/Button";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";

function SelectImages({ nextStep }) {
  // const { setPicturesFiles, setSource } = useUploadProductsContext();

  // const inputRef = React.useRef();

  // const handleFileChange = (event, func) => {
  //   const { files } = event.target;
  //   const images = [...event.target.files].map((file) => URL.createObjectURL(file));
  //   setSource(images);
  //   setPicturesFiles(files);
  //   // next Steps Function
  //   func();
  //   // nextSteps Functions
  // };

  // const handleChoose = () => {
  //   inputRef.current.click();
  //   nextStep();
  // };

  return (
    <div className={styles.Input}>
      {/* <input
        ref={inputRef}
        className={styles.selectInput}
        accept=".jpg, .jpeg, .png, .svg"
        type="file"
        multiple
        // onChange={(e) => {
        //   handleFileChange(e, nextStep());
        // }}
      /> */}
      <div className={styles.upload}>
        <p className="global-text-20 global-modal-mb">Build your shop</p>
        <p className="global-text-12 global-modal-mb ">
          Create your shop and recieve orders from videos across the web.
        </p>

        {/* <button className="global-upload-btn" onClick={nextStep()} type="button">
          Let's Go
        </button> */}
        <div className={styles.buttonContainer}>
          <Button label="Lets go" bgcolor="white" size="small" handleClick={nextStep()} />
        </div>
      </div>
    </div>
  );
}

SelectImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectImages;
