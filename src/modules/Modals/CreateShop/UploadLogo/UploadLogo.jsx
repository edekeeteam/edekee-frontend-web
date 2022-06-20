/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import Button from "../../../../components/Button/Button";
import ProfilePic from "../../../../components/ProfilePic/ProfilePic";
// import IndexStyle from "../index.module.scss";
import styles from "./UploadLogo.module.scss";
import headerStyles from "../../../../components/ModalHeader/ModalHeader.module.scss";
// import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import { useCreateShopContext } from "../../../../context/CreateShopContext";

// eslint-disable-next-line no-unused-vars
function UploadLogo({ nextStep, prevStep }) {
  const inputRef = useRef();

  const { source, setSource, setLogoFile, createShop } = useCreateShopContext();

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    // console.log(event.target);
    const file = event.target.files[0];
    // console.log(file);
    const url = URL.createObjectURL(file);
    // console.log(url);
    setSource(url);
    console.log(url, file);
    setLogoFile(file);
  };

  const handleCreateShop = (func) => {
    createShop();
    console.log("clicked");
    func();
  };

  const handleKeydown = () => {};
  return (
    <div>
      {/* <div className={IndexStyle.Header}>
        <div onClick={prevStep()} onKeyDown={prevStep()} role="button" tabIndex={0}>
          <img src={`${process.env.PUBLIC_URL}/icons/previewCancelBtn.svg`} alt="" />
        </div>
        <div
          onClick={nextStep()}
          onKeyDown={nextStep()}
          role="button"
          tabIndex={0}
          className={styles.nextContainer}
        >
          <span className={styles.next}>Next</span>
          <img src={`${process.env.PUBLIC_URL}/icons/rightChevron.svg`} alt="upload" />
        </div>
      </div> */}
      <div className={headerStyles.Header}>
        <div>
          <div
            className={headerStyles.icon}
            onClick={prevStep()}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <img src={`${process.env.PUBLIC_URL}/icons/arrow-left.svg`} alt="" />
          </div>
        </div>

        <div
          className={headerStyles.icon}
          onClick={() => handleCreateShop(nextStep())}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <span>Done</span>
          <img src={`${process.env.PUBLIC_URL}/icons/done.svg`} alt="" />
        </div>
      </div>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        onChange={handleFileChange}
        accept=".jpg, .jpeg, .png, .svg"
      />

      <div className={styles.uploadBody}>
        <div
          className={styles.profilePic}
          onClick={() => {
            handleChooseFile();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            handleKeydown();
          }}
        >
          <ProfilePic size="small" img={source} />
        </div>

        <p className={`${styles.mainText} global-text-20 global-modal-mb`}>Upload Logo</p>
        <p
          className={`${styles.secondaryText}global-text-10 global-modal-mb `}
          onClick={() => {
            createShop();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            handleKeydown();
          }}
        >
          Create your shop and recieve orders from videos across the web.
        </p>
        <div className={styles.buttonContainer}>
          <Button bgcolor="black" size="small" label="skip" />
        </div>
      </div>
    </div>
  );
}

export default UploadLogo;
