import { useState, useLayoutEffect } from "react";

import Modal from "../../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import CropImages from "./CropImages/CropImages";
import Upload360Videos from "./Upload360Videos/Upload360Videos";
import Category from "./Category/Category";
// import SubCategory from "./SubCategory/SubCategory";
import ProductInfo from "./ProductInfo/ProductInfo";
import Preview360Video from "./Preview360Video/Preview360Video";
import PickColors from "./PickColors/PickColors";
import Measurements from "./Measurements/Measurements";
import Complete from "../../../components/Complete/Complete";
import { UploadProductsProvider } from "../../../context/UploadProducts";
import { useModalContext } from "../../../context/ModalContext";
import { usePopupContext } from "../../../context/PopupContext";
// modal

import styles from "../../../components/ImageSlider/ImageSlider.module.scss";

function UploadsProductsModal() {
  // const { clearValues } = useUploadProductsContext()

  const { setIsModalOpen, isModalOpen } = useModalContext();
  const { togglePopup, handleAction } = usePopupContext();
  const [stepIndex, setStepIndex] = useState(0);

  // const { percentage } = useUploadContext();

  useLayoutEffect(
    () => () => {
      setStepIndex(0);
    },
    [isModalOpen]
  );

  function nextStep() {
    setStepIndex((x) => x + 1);
  }

  function prevStep() {
    setStepIndex((x) => x - 1);
  }

  const steps = [
    <SelectImages nextStep={() => nextStep} />,
    <CropImages nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Upload360Videos nextStep={() => nextStep} />,
    <Preview360Video nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    // <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
    <ProductInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <PickColors nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Measurements nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Complete type="order" />,
  ];

  function handleCancelUpload() {
    // setIsModalOpen()
    togglePopup();
    handleAction(setIsModalOpen);
  }

  return (
    <UploadProductsProvider>
      <Modal>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: "0",
              marginTop: "-40px",
              marginRight: "-40px",
              backgroundColor: "#322F37",
            }}
            className={`${styles.iconBackground}`}
            onKeyDown={() => {
              handleCancelUpload();
            }}
            onClick={() => {
              handleCancelUpload();
            }}
            role="button"
            tabIndex={0}
          >
            <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
          </div>
          {steps[stepIndex]}
        </div>
      </Modal>
    </UploadProductsProvider>
  );
}

export default UploadsProductsModal;
