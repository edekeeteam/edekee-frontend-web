import React from "react";
import PropTypes from "prop-types";
import styles from "../../../../components/VideoUploadModals/UploadVideoModal/UploadVideoModal.module.scss";

// import { useUploadProductsContext } from "../../../../context/UploadProducts";
import { useUploadContext } from "../../../../context/UploadContext";
// import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

function SelectVideo({ nextStep }) {
  // const { setVideoFile } = useUploadProductsContext();
  const { setVideoFile, percentage, showProgress, source, setSource } = useUploadContext();

  const inputRef = React.useRef();

  const handleFileChange = (event) => {
    // console.log(event.target);
    const file = event.target.files[0];
    // console.log(file);
    const url = URL.createObjectURL(file);
    // console.log(url);
    setSource(url);

    setVideoFile(file);
    console.log(url, file);
  };

  const handleChoose = () => {
    inputRef.current.click();
  };
  const changeModal = (func) => {
    func();
    console.log("called");
  };

  const handleKeydown = () => {};

  return (
    <div
      className={styles.uploadVideoContent}
      onClick={(e) => {
        e.stopPropagation();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={() => {
        handleKeydown();
      }}
    >
      <div className={styles.VideoInput}>
        <input
          ref={inputRef}
          className={styles.VideoInput_input}
          type="file"
          onChange={(e) => {
            handleFileChange(e, nextStep());
          }}
          accept=".mov,.mp4"
        />
        {!source && (
          <div style={{ padding: "50px 30px" }}>
            <p className="global-text-20 global-modal-mb">Upload Video</p>
            <p className="global-text-12 global-modal-mb">
              Click the upload botton below to delect the video you want to upload.
            </p>
            <button className="global-upload-btn" onClick={handleChoose} type="button">
              Upload
            </button>
          </div>
        )}
        {source && (
          <div className={styles.videoPreviewContainer}>
            <div className={styles.uploadVideoHeader}>
              <div
                onClick={() => {
                  setSource(null);
                }}
                onKeyDown={() => {
                  handleKeydown();
                }}
                role="button"
                tabIndex={0}
              >
                <img src="./icons/previewCancelBtn.svg" alt="" />
              </div>
              <div
                onClick={() => changeModal(nextStep())}
                onKeyDown={() => {
                  handleKeydown();
                }}
                role="button"
                tabIndex={0}
              >
                <img src="./icons/rightChevron.svg" alt="upload" />
              </div>
            </div>
            {/* <ModalHeader
              prevStep={() => {
                setSource(null);
              }}
              canCancel={false}
              showNext
              nextStep={nextStep}
            /> */}
            <video
              className={styles.VideoInput_video}
              width="100%"
              height="650px"
              //   width="100%"
              //   height={height}
              //   controls
              autoPlay
              controls
              loop
              src={source}
              muted
            />

            {showProgress && (
              <div className={styles.overlay}>
                <div className={styles.overlayContainer}>
                  <img className={styles.overlayImage} src="./icons/edekeeLogoPurple.svg" alt="" />

                  <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
                  {percentage < 99 ? (
                    <p>{`${percentage}%`}</p>
                  ) : (
                    <p style={{ marginTop: "10px" }}>Uploaded successfully</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {/* <div className={styles.VideoInput_footer}>{source || "Nothing selectd"}</div> */}
      </div>
    </div>
  );
}

SelectVideo.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default SelectVideo;
