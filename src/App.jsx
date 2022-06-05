/* eslint-disable no-nested-ternary */
import Router from "./Router";

import OtpModal from "./components/AuthenticationModals/OtpModal/OtpModal";
import { useModalContext } from "./context/ModalContext";
import SignUpModal from "./components/AuthenticationModals/SignUpModal/SignUpModal";
import SignInModal from "./components/AuthenticationModals/SignInModal/SignInModal";
import UploadVideoModal from "./components/VideoUploadModals/UploadVideoModal/UploadVideoModal";
import VideoModal from "./components/VideoModal/VideoModal";
import RegUsernameModal from "./components/AuthenticationModals/RegUsernameModal/RegUsernameModal";
import PhoneContact from "./components/AuthenticationModals/PhoneContact/PhoneContact";
import DobInfo from "./components/AuthenticationModals/DobInfoModal/DobInfo";

import UploadsProducts from "./modules/Modals/UploadsProducts";
import ProductSpecs from "./components/ProductSpecs/ProductSpecs";
import PaymentModal from "./components/PaymentModal/PaymentModal";
import Summary from "./components/Summary/Summary";

function App() {
  const { modalValue } = useModalContext();

  return (
    <>
      <Router />

      {/* <SignInModal /> */}
      {modalValue === "signup" ? (
        <SignUpModal />
      ) : modalValue === "otp" ? (
        <OtpModal />
      ) : modalValue === "phonecontact" ? (
        <PhoneContact />
      ) : modalValue === "dobinfo" ? (
        <DobInfo />
      ) : modalValue === "videomodal" ? (
        <VideoModal />
      ) : modalValue === "username" ? (
        <RegUsernameModal />
      ) : modalValue === "uploadvideo" ? (
        <UploadVideoModal />
      ) : modalValue === "productspecs" ? (
        <ProductSpecs />
      ) : modalValue === "paymentmodal" ? (
        <PaymentModal />
      ) : modalValue === "summarymodal" ? (
        <Summary />
      ) : modalValue === "signin" ? (
        <SignInModal />
      ) : modalValue === "videomodal" ? (
        <VideoModal />
      ) : modalValue === "uploadProducts" ? (
        <UploadsProducts />
      ) : (
        ""
      )}

      {/* <ProductSpecs /> */}
      {/* <VideoModal /> */}
      {/* <ProductSpecs /> */}
      {/* <RegUsernameModal /> */}
      {/* <PhoneContact /> */}
      {/* <DobInfo /> */}
    </>
  );
}

export default App;
