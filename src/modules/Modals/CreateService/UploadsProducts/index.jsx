import { useState } from "react";

import { UploadProductsProvider } from "../../../context/UploadProducts";
import { useUploadContext } from "../../../context/UploadContext";

import Modal from "../../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import CropImages from "./CropImages/CropImages";
import Upload360Videos from "./Upload360Videos/Upload360Videos";
import Category from "./Category/Category";
// import SubCategory from "./SubCategory/SubCategory";
import ProductInfo from "./ProductInfo/ProductInfo";

import styles from "../../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal.module.scss";
import Preview360Video from "./Preview360Video/Preview360Video";

// modal

function UploadsProductsModal() {
  const [stepIndex, setStepIndex] = useState(0);

  const { percentage } = useUploadContext();

  function nextStep() {
    setStepIndex((x) => x + 1);
  }

  function prevStep() {
    setStepIndex((x) => x - 1);
  }

  const steps = [
    <ProductInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <SelectImages nextStep={() => nextStep} />,
    <CropImages nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Upload360Videos nextStep={() => nextStep} />,
    <Preview360Video nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    // <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
    <div>
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <img
            className={styles.overlayImage}
            src={`${process.env.PUBLIC_URL}/icons/edekeeLogoPurple.svg`}
            alt=""
          />

          <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
          <p>{`${percentage}%`}</p>
        </div>
      </div>
    </div>,
  ];

  return (
    <UploadProductsProvider>
      <Modal>
        <div>{steps[stepIndex]}</div>
      </Modal>
    </UploadProductsProvider>
  );
}

export default UploadsProductsModal;
