/* eslint-disable no-nested-ternary */
import Router from "./Router";

// pages

// pages
// import SignInModal from "./components/AuthenticationModals/SignInModal/SignInModal";
// import OtpModal from "./components/AuthenticationModals/OtpModal/OtpModal";
import Dropdown from "./components/Dropdown/Dropdown";
import OtpModal from "./components/AuthenticationModals/OtpModal/OtpModal";
import { useModalContext } from "./context/ModalContext";
import SignUpModal from "./components/AuthenticationModals/SignUpModal/SignUpModal";
import SignInModal from "./components/AuthenticationModals/SignInModal/SignInModal";
import UploadVideoModal from "./components/VideoUploadModals/UploadVideoModal/UploadVideoModal";
import VideoModal from "./components/VideoModal/VideoModal";
import RegUsernameModal from "./components/AuthenticationModals/RegUsernameModal/RegUsernameModal";
import PhoneContact from "./components/AuthenticationModals/PhoneContact/PhoneContact";
import DobInfo from "./components/AuthenticationModals/DobInfoModal/DobInfo";

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
      ) : modalValue === "signin" ? (
        <SignInModal />
      ) : modalValue === "videomodal" ? (
        <VideoModal />
      ) : (
        ""
      )}
      {/* <RegUsernameModal /> */}
      {/* <PhoneContact /> */}
      {/* <DobInfo /> */}
      <Dropdown />
    </>
  );
}

export default App;
