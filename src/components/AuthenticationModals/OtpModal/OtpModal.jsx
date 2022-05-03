// import { useState } from "react";
import OtpInput from "react-otp-input";
import Modal from "../../Modal/Modal";
import styles from "./OtpModal.module.scss";
import { useAuthContext } from "../../../context/AuthContext";

function OtpModal() {
  const { otp, setOtp, handleOtpVerification } = useAuthContext();

  // const otpValue = otp;

  const handleChange = (newOtp) => {
    // console.log(newOtp);
    // setOtp(
    //   (newOtp,
    //   () => {
    //     return newOtp;
    //   })
    // );
    setOtp(newOtp);
    // console.log();

    if (newOtp.length === 6) {
      // console.log(otp);
      handleOtpVerification(newOtp);
    }
  };
  return (
    <Modal>
      <div className={styles.otpModalContent}>
        <p className="global-text-20 global-modal-mb">Verification</p>
        <p className="global-text-12 global-modal-mb">
          We’ve sent a verification code to your email address of******@gmail.com.
        </p>
        <OtpInput
          value={otp}
          isInputNum="true"
          onChange={(e) => {
            handleChange(e);
          }}
          numInputs={6}
          inputStyle={{
            width: "44px",
            height: "62px",
            fontSize: "20px",
            borderRadius: "26px",
            backgroundColor: "#322F37",
            border: "none",
            color: "#fff",
            marginRight: "10px",
          }}
          containerStyle={{
            display: "flex",
            justifyContent: "center",
            // border: "1px solid red",
          }}
        />

        <div className={styles.resendText}>Resend Code</div>
      </div>
    </Modal>
  );
}

export default OtpModal;
