import { useState } from "react";

// import styles from "./index.module.scss"

import { UploadProductsProvider } from "../../context/UploadProducts";

import Modal from "../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import CropImages from "./CropImages/CropImages";
import Category from "./Category/Category";

// modal

function UploadsProductsModal() {
  const [step, setStep] = useState(0);

  function nextStep() {
    // eslint-disable-next-line no-console
    console.log("next");
    setStep((x) => x + 1);
  }

  function prevStep() {
    setStep((x) => x - 1);
    // eslint-disable-next-line no-console
    console.log("previous");
  }

  const steps = [
    <SelectImages nextStep={() => nextStep} />,
    <CropImages nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
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
