/* eslint-disable react/prop-types */
import React from "react";
// import { InputInterest } from "../../../../components/InputFields";
import IndexStyle from "../index.module.scss";
import styles from "./Category.module.scss";

function Category({ nextStep, prevStep }) {
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
      <p className={`${styles.mainText} global-text-20 global-modal-mb`}>Select a category</p>
      <p className={`${styles.secondaryText} global-text-10 global-modal-mb `}>
        Pick a category your product. For example, clothing items fall in The Fashion category and
        chairs in the furniture category.{" "}
      </p>{" "}
      <div className={styles.category} />
    </div>
  );
}

export default Category;
