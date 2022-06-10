/* eslint-disable react/prop-types */
import React from "react";
import IndexStyle from "../index.module.scss";

function CreateProduct({ nextStep, prevStep }) {
  return (
    <div>
      <div className={IndexStyle.Header}>
        <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
        </div>
        <div onClick={nextStep()} onKeyDown={nextStep()} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div>
      Creating Product
    </div>
  );
}

export default CreateProduct;
