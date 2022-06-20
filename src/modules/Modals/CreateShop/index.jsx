import { useState, useLayoutEffect } from "react";

import Modal from "../../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import Category from "./Category/Category";
import BrandInfo from "./BrandInfo/BrandInfo";
import UploadLogo from "./UploadLogo/UploadLogo";

import ProgressModal from "../../../components/ProgressModal/ProgressModal";

// modal
import { CreateShopProvider } from "../../../context/CreateShopContext";
import styles from "../../../components/ImageSlider/ImageSlider.module.scss";
import { usePopupContext } from "../../../context/PopupContext";
import { useModalContext } from "../../../context/ModalContext";

function CreateShopModal() {
  const [stepIndex, setStepIndex] = useState(0);

  // const { percentage } = useUploadContext();
  // const { percentage } = useCreateShopContext();
  const { togglePopup, handleAction } = usePopupContext();
  const { setIsModalOpen, isModalOpen } = useModalContext();

  useLayoutEffect(
    () => () => {
      // clearValues()
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
    <BrandInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <DeliveryInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
    <UploadLogo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <ProgressModal />,
  ];

  function handleCancelUpload() {
    // setIsModalOpen()
    togglePopup();
    handleAction(setIsModalOpen);
  }

  return (
    <CreateShopProvider>
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
          <div>{steps[stepIndex]}</div>
        </div>
      </Modal>
    </CreateShopProvider>
  );
}

export default CreateShopModal;
