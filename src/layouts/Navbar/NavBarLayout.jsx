/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./NavBarLayout.module.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useModalContext } from "../../context/ModalContext";
import UploadsProducts from "../../modules/Modals/UploadsProducts";
import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";
import PaymentModal from "../../components/PaymentModal2/PaymentModal2";
import Summary from "../../components/Summary/Summary";
import CreateShopModal from "../../modules/Modals/CreateShop";
import OrderComplete from "../../components/OrderComplete/OrderComplete";
import SignUpModal from "../../components/AuthenticationModals/SignUpModal/SignUpModal";
import SignInModal from "../../components/AuthenticationModals/SignInModal/SignInModal";
import UploadVideoModal from "../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal";
import VideoModal from "../../components/VideoModal/VideoModal";
import RegUsernameModal from "../../components/AuthenticationModals/RegUsernameModal/RegUsernameModal";
import PhoneContact from "../../components/AuthenticationModals/PhoneContact/PhoneContact";
import DobInfo from "../../components/AuthenticationModals/DobInfoModal/DobInfo";
import OtpModal from "../../components/AuthenticationModals/OtpModal/OtpModal";
import { useBuyContext } from "../../context/BuyContext";

function NavBarLayout() {
  const { modalValue } = useModalContext();
  const { fetchCart, cart } = useBuyContext();

  useEffect(() => {
    fetchCart();
    console.log(cart);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Outlet />
      </div>
      <Dropdown />
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
      ) : modalValue === "orderComplete" ? (
        <OrderComplete />
      ) : modalValue === "signin" ? (
        <SignInModal />
      ) : modalValue === "videomodal" ? (
        <VideoModal />
      ) : modalValue === "uploadProducts" ? (
        <UploadsProducts />
      ) : modalValue === "createShop" ? (
        <CreateShopModal />
      ) : (
        ""
      )}
    </>
  );
}

export default NavBarLayout;
