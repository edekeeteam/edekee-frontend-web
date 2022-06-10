import React from "react";
import NewModal from "../../NewModal/NewModal";
import styles from "./SignInModal.module.scss";
import InputText from "../../InputFields/InputText/InputText";
import Button from "../../Button/Button";
import PurpleButton from "../../PurpleButton/PurpleButton";
import { useModalContext } from "../../../context/ModalContext";
import { useAuthContext } from "../../../context/AuthContext";

function SignInModal() {
  const { modalValue, setModalValue } = useModalContext();

  const {
    signInEmail,
    signInPassword,
    handleInputChange,
    handleLogin,
    authSuccessful,
    authLoading,
    // setAuthLoading,
    btnState,
    errors,
  } = useAuthContext();

  // const changeAuthModalValue = () => {
  //   setAuthModalValue(1);
  // };
  const handleKeyDown = () => {
    // console.log('');
  };

  return (
    <NewModal>
      <div
        className={`${styles.signUpContent} ${modalValue === 0 && styles.show}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={handleKeyDown()}
        role="button"
        tabIndex={0}
      >
        <p className="global-text-20 global-modal-mb">SignIn</p>
        <p className="global-text-12 global-modal-mb">
          Sign in to access your own profile and start uploading videos, liking videos and product,
          and buying.
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

        <div className="global-modal-md-mb" style={{ width: "70%", border: "1px solid red" }}>
          <InputText
            label="Email"
            name="signInEmail"
            type="text"
            handleChange={handleInputChange}
            value={signInEmail}
          />
          {errors.loginEmail && (
            <p className="global-text-12 global-error-text ">{errors.loginEmail}</p>
          )}
        </div>

        <div className="global-modal-md-mb" style={{ width: "70%" }}>
          <InputText
            label="Password"
            name="signInPassword"
            type="password"
            handleChange={handleInputChange}
            value={signInPassword}
          />
          {errors.loginPassword && (
            <p className="global-text-12 global-error-text ">{errors.loginPassword}</p>
          )}{" "}
        </div>
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
            label="SignIn"
            size="large"
            bgcolor="white"
            loading={authLoading}
            successful={authSuccessful}
            btnState={btnState}
            handleClick={(e) => {
              // changeAuthModalValue();
              handleLogin(e);
              // setAuthLoading(!authLoading);
            }}
          />
        </div>

        <div className={styles.purpleButton}>
          <div className={styles.purpleButtonContainer}>
            <PurpleButton
              label="Sign Up"
              handleClick={() => {
                setModalValue("signup");
              }}
            />
          </div>
        </div>
      </div>
    </NewModal>
  );
}

export default SignInModal;
