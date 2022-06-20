import { useState } from "react";

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
// import ProgressModal from "../../../components/ProgressModal/ProgressModal";
// import { useCreateShopContext } from "../../../context/CreateShopContext";
// import Preview360Video from "./Preview360Video/Preview360Video";

// modal

function CreateServiceModal() {
  const [stepIndex, setStepIndex] = useState(0);

  // const { percentage } = useCreateShopContext();

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

  return (
    <CreateServiceProvider>
      <Modal>
        <div>{steps[stepIndex]}</div>
      </Modal>
    </CreateServiceProvider>
  );
}

export default CreateServiceModal;
