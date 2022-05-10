import React from "react";
import Modal from "../../Modal/Modal";
import styles from "./SignUpModal.module.scss";
import InputText from "../../inputFields/InputText/InputText";
import Button from "../../Button/Button";
import PurpleButton from "../../PurpleButton/PurpleButton";
import { useModalContext } from "../../../context/ModalContext";
import { useAuthContext } from "../../../context/AuthContext";

function SignUpModal() {
  const { modalValue, setModalValue } = useModalContext();

  const {
    signUpEmail,
    signUpPassword,
    handleInputChange,
    handleRegistration,
    authSuccessful,
    authLoading,
    // setAuthLoading,
    errors,
    btnState,
  } = useAuthContext();

  // const changeAuthModalValue = () => {
  //   setAuthModalValue(1);
  // };
  const handleKeyDown = () => {
    // console.log('');
  };

  return (
    <Modal>
      <div
        className={`${styles.signUpContent} ${modalValue === 0 && styles.show}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown()}
        role="button"
        tabIndex={0}
      >
        <p className="global-text-20 global-modal-mb">SignUp</p>
        <p className="global-text-12 global-modal-mb">
          Sign up to get your own profile and start uploading videos, liking videos and product, and
          buying.
        </p>

        <div className={`${styles.googleAppleButtons} global-modal-mb`}>
          <div className={styles.signUpBtn}>
            <img src="./icons/googleSign.svg" alt="sign in with google" />
          </div>
          <div className={styles.signUpBtn}>
            <img src="./icons/appleSign.svg" alt="sign in with google" />
          </div>
        </div>

        <p className="global-text-10 global-modal-mb">OR</p>
        {/* <div className="global-modal-mb"> */}
        <InputText
          label="Email"
          name="signUpEmail"
          type="text"
          handleChange={handleInputChange}
          value={signUpEmail}
        />
        {errors.email && (
          <p className="global-text-12 global-error-text global-modal-sm-mb">{errors.email}</p>
        )}
        {/* </div> */}

        <InputText
          label="Password"
          name="signUpPassword"
          type="password"
          handleChange={handleInputChange}
          value={signUpPassword}
        />
        {errors.password && (
          <p className="global-text-12 global-error-text global-modal-sm-mb">{errors.password}</p>
        )}
        {/* <div>
          <input
            type="password"
            name="signUpPassword"
            onChange={(e) => handleInputChange(e)}
            value={signUpPassword}
            placeholder="Password"
            className="col-md-12 form-input"
          />

          <label htmlFor="signUpPassword"></label>
        </div> */}

        <div className="global-modal-mb">
          <Button
            label="SignUp"
            size="large"
            bgcolor="white"
            loading={authLoading}
            successful={authSuccessful}
            btnState={btnState}
            handleClick={(e) => {
              // changeAuthModalValue();
              handleRegistration(e);
              // setAuthLoading(!authLoading);
            }}
          />
        </div>

        <div className={styles.purpleButton}>
          <div className={styles.purpleButtonContainer}>
            <PurpleButton
              label="Sign In"
              handleClick={() => {
                setModalValue("signin");
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
