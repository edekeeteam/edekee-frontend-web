import { useState } from "react";

// import styles from "./index.module.scss"

import { UploadProductsProvider } from "../../context/UploadProducts";

import Modal from "../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import CropImages from "./CropImages/CropImages";
import Category from "./Category/Category";
import SubCategory from "./SubCategory/SubCategory";

// modal

function UploadsProductsModal() {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep((x) => x + 1);
  }

  function prevStep() {
    setStep((x) => x - 1);
  }

  const steps = [
    <SelectImages nextStep={() => nextStep} />,
    <CropImages nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
    <div>Working</div>,
  ];

  return (
    <UploadProductsProvider>
      <Modal>
        <div>{steps[step]}</div>
      </Modal>
    </UploadProductsProvider>
  );
}

export default UploadsProductsModal;
