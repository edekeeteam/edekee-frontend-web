import { useState } from "react";

// import { UploadProductsProvider } from "../../../context/UploadProducts";
// import { useUploadContext } from "../../../context/UploadContext";
import { UploadProvider } from "../../../context/UploadContext";

import Modal from "../../../components/Modal/Modal";

// modal

import SelectVideo from "./UploadVideo/SelectVideo";
// import Category from "./Category/Category";
// import SubCategory from "./SubCategory/SubCategory";
import PreviewVideo from "./PreviewVideo/PreviewVideo";

import styles from "../../../components/ImageSlider/ImageSlider.module.scss";
import { useModalContext } from "../../../context/ModalContext";
import { usePopupContext } from "../../../context/PopupContext";
import ProductsandServices from "./ProductsandServices/ProductsandServices";
// modal

function UploadVideoModal() {
  const { setIsModalOpen } = useModalContext();
  const { togglePopup } = usePopupContext();
  const [stepIndex, setStepIndex] = useState(0);

  // const { percentage } = useUploadContext();

  function nextStep() {
    setStepIndex((x) => x + 1);
  }

  function prevStep() {
    setStepIndex((x) => x - 1);
  }

  const steps = [
    <SelectVideo nextStep={() => nextStep} prevStep={() => prevStep} />,

    <PreviewVideo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <ProductsandServices nextStep={() => nextStep} prevStep={() => prevStep} />,
    // <div style={{ width: "700px", height: "700px", border: "1px solid red" }}>

    // </div>,
    // <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    // <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,

    // <div>
    //   <div className={styles.overlay}>
    //     <div className={styles.overlayContainer}>
    //       <img
    //         className={styles.overlayImage}
    //         src={`${process.env.PUBLIC_URL}/icons/edekeeLogoPurple.svg`}
    //         alt=""
    //       />
    //
    //       <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
    //       <p>{`${percentage}%`}</p>
    //     </div>
    //   </div>
    // </div>,
  ];

  function handleCancelUpload() {
    // setIsModalOpen()
    togglePopup(setIsModalOpen);
  }

  return (
    <UploadProvider>
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
    </UploadProvider>
  );
}

export default UploadVideoModal;
