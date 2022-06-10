// import { useState } from "react";
// import { motion } from "framer-motion";
import VidModal from "../../components/VidModal/VidModal";
import VideoModal from "../../components/VideoModal/VideoModal";

function ViewVideoModal() {
  // const [stepIndex, setStepIndex] = useState(0);

  //   const { percentage } = useUploadContext();

  // function nextStep() {
  //   setStepIndex((x) => x + 1);
  // }

  //   function prevStep() {
  //     setStepIndex((x) => x - 1);
  //   }

  // const steps = [
  //   <VideoModal nextStep={() => nextStep} />,
  //   // <CropImages nextStep={() => nextStep} prevStep={() => prevStep} />,
  //   // <Category nextStep={() => nextStep} prevStep={() => prevStep} />,
  //   // <SubCategory nextStep={() => nextStep} prevStep={() => prevStep} />,
  //   // <Upload360Videos nextStep={() => nextStep} prevStep={() => prevStep} />,
  // ];

  return (
    <VidModal>
      {/* <div>{steps[stepIndex]}</div> */}
      <VideoModal />
    </VidModal>
  );
}

export default ViewVideoModal;
