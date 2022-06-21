import { useState, useLayoutEffect } from "react";

import { CreateServiceProvider } from "../../../context/CreateServiceContext";
// import { useUploadContext } from "../../../context/UploadContext";

import Modal from "../../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import CropImages from "./CropImages/CropImages";
// import Upload360Videos from "./Upload360Videos/Upload360Videos";
import Category from "./Category/Category";
// import SubCategory from "./SubCategory/SubCategory";
import ProductInfo from "./ProductInfo/ProductInfo";

import styles from "../../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal.module.scss";
import SelectServices from "./SelectServices/SelectServices";
import SelectPackage from "./SelectPackage/SelectPackage";
import Complete from "../../../components/Complete/Complete";
import { useModalContext } from "../../../context/ModalContext";
import { usePopupContext } from "../../../context/PopupContext";
import styles2 from "../../../components/ImageSlider/ImageSlider.module.scss";
// import ProgressModal from "../../../components/ProgressModal/ProgressModal";
// import { useCreateShopContext } from "../../../context/CreateShopContext";
// import Preview360Video from "./Preview360Video/Preview360Video";

// modal

function CreateServiceModal() {
  const [stepIndex, setStepIndex] = useState(0);
  const { setIsModalOpen, isModalOpen } = useModalContext();
  const { togglePopup, handleAction } = usePopupContext();

  // const { percentage } = useCreateShopContext();

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
    // <Upload360Videos nextStep={() => nextStep} />,
    // <Preview360Video nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    // <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
    <ProductInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <SelectServices nextStep={() => nextStep} prevStep={() => prevStep} />,
    <SelectPackage nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Complete type="order" />,
    // <ProgressModal percentage={percentage} />,

    <div>
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <img
            className={styles.overlayImage}
            src={`${process.env.PUBLIC_URL}/icons/edekeeLogoPurple.svg`}
            alt=""
          />

          <div className={styles.progressBar} style={{ width: `${7}%` }} />
          <p>{`${7}%`}</p>
        </div>
      </div>
    </div>,
  ];

  function handleCancelUpload() {
    // setIsModalOpen()
    togglePopup();
    handleAction(setIsModalOpen);
  }

  return (
    <CreateServiceProvider>
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
            className={`${styles2.iconBackground}`}
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
    </CreateServiceProvider>
  );
}

export default CreateServiceModal;
