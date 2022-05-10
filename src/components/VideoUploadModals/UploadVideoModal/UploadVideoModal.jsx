import React from "react";
import Modal from "../../Modal/Modal";
import styles from "./UploadVideoModal.module.scss";
import { useUploadContext } from "../../../context/UploadContext";

function UploadVideoModal() {
  //   const { width, height } = props;
  const { handleVideoUpload, setVideoFile, percentage, showProgress, source, setSource } =
    useUploadContext();
  const inputRef = React.useRef();

  const handleFileChange = (event) => {
    // console.log(event.target);
    const file = event.target.files[0];
    // console.log(file);
    const url = URL.createObjectURL(file);
    // console.log(url);
    setSource(url);
    setVideoFile(file);
  };

  const handleChoose = () => {
    inputRef.current.click();
  };

  const handleKeydown = () => {};

  return (
    <Modal>
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
            onChange={handleFileChange}
            accept=".mov,.mp4"
          />
          {!source && (
            <div>
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
                  onClick={() => {
                    handleVideoUpload();
                  }}
                  onKeyDown={() => {
                    handleKeydown();
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src="./icons/rightChevron.svg" alt="upload" />
                </div>
              </div>
              <video
                className={styles.VideoInput_video}
                width="auto"
                height="700px"
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
                    <img
                      className={styles.overlayImage}
                      src="./icons/edekeeLogoPurple.svg"
                      alt=""
                    />

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
          <div className={styles.VideoInput_footer}>{/* {source || "Nothing selectd"} */}</div>
        </div>
      </div>
    </Modal>
  );
}

export default UploadVideoModal;
