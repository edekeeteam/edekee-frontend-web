/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../../../components/Button/Button";
import ProfilePic from "../../../../components/ProfilePic/ProfilePic";
import IndexStyle from "../index.module.scss";
import styles from "./UploadLogo.module.scss";

function UploadLogo({ nextStep, prevStep }) {
  return (
    <div>
      <div className={IndexStyle.Header}>
        <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
        </div>
        <div
          onClick={nextStep()}
          onKeyDown={nextStep()}
          role="button"
          tabIndex={0}
          className={styles.nextContainer}
        >
          <span className={styles.next}>Next</span>
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div>
      <div className={styles.uploadBody}>
        <div className={styles.profilePic}>
          <ProfilePic size="small" />
        </div>

        <p className={`${styles.mainText} global-text-20 global-modal-mb`}>Upload Logo</p>
        <p className={`${styles.secondaryText}global-text-10 global-modal-mb `}>
          Create your shop and recieve orders from videos across the web.
        </p>
        <div className={styles.buttonContainer}>
          <Button bgcolor="black" size="small" label="skip" />
        </div>
      </div>
    </div>
  );
}

export default UploadLogo;
