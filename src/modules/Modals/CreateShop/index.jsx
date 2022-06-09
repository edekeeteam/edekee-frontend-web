import { useState } from "react";

// import styles from "./index.module.scss"
// import { UploadProductsProvider } from "../../../context/UploadProducts";
// import { useUploadContext } from "../../../context/UploadContext";

import Modal from "../../../components/Modal/Modal";

// modal
import SelectImages from "./SelectImages/SelectImages";
// import CropImages from "./BrandInfo/BrandInfo";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import SubCategory from "./SubCategory/SubCategory";
import ProductInfo from "./ProductInfo/ProductInfo";
import styles from "../../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal.module.scss";
import BrandInfo from "./BrandInfo/BrandInfo";

// modal

function CreateShopModal() {
  const [stepIndex, setStepIndex] = useState(0);

  // const { percentage } = useUploadContext();

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
    <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
    <ProductInfo nextStep={() => nextStep} prevStep={() => prevStep} />,
    <div>
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <img
            className={styles.overlayImage}
            src={`${process.env.PUBLIC_URL}/icons/edekeeLogoPurple.svg`}
            alt=""
          />

          {/* <div className={styles.progressBar} style={{ width: `${percentage}%` }} /> */}
          {/* <p>{`${percentage}%`}</p> */}
        </div>
      </div>
    </div>,
  ];

  return (
    <Modal>
      <div>{steps[stepIndex]}</div>
    </Modal>
  );
}

export default CreateShopModal;
