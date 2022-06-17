import React from "react";
import PropTypes from "prop-types";
import styles from "./SelectImages.module.scss";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";

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
        <ModalTitle
          title="Build your shop"
          desc=" Create your shop and recieve orders from videos across the web."
        />

        <button className="global-upload-btn global-text-12" onClick={nextStep()} type="button">
          Lets go
        </button>
      </div>
    </div>
  );
}

SelectImages.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectImages;
