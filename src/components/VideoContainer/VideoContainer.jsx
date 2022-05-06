/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

// import { motion } from "framer-motion";
import styles from "./VideoContainer.module.scss";

function VideoContainer({ src }) {
  const [showInfo, setShowInfo] = useState(false);
  // const [isMuted, setIsMuted] = useState(true)
  const vidRef = useRef();

  // martin
  const hls = new Hls();
  useEffect(() => {
    hls.loadSource(src);
    hls.attachMedia(vidRef.current);
  }, [vidRef]);

  // martin

  const startVideoTimer = (e) => {
    vidRef.current = setTimeout(() => {
      e.target.play();
      setShowInfo(true);
    }, 1100);
  };

  const stopVideoTimer = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
    setShowInfo(false);
    clearTimeout(vidRef.current);
  };
  return (
    <div className={styles.videoContainer}>
      <video
        ref={vidRef}
        src={src}
        loop
        muted
        width="100%"
        height="100%"
        // autoPlay
        // autoPlay={isVideoAutoPlay}
        // onClick={(e) => {
        // 	start(e)
        // }}
        onMouseEnter={(e) => {
          // e.target.play();
          startVideoTimer(e);
        }}
        // onMouseOver={(e) => {
        //   // e.target.play();
        //   startVideoTimer(e);
        // }}
        onFocus={(e) => {
          startVideoTimer(e);
        }}
        onMouseOut={(e) => {
          stopVideoTimer(e);
        }}
        onBlur={(e) => stopVideoTimer(e)}
      >
        <track kind="captions" />
      </video>

      {showInfo && (
        <div className={styles.sideIcons}>
          <svg
            className={styles.sideIcon}
            width="31"
            height="30"
            viewBox="0 0 37 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <path
                d="M30.8826 16.3569C33.7159 13.5353 33.7253 8.95117 30.9037 6.11793C28.0821 3.28468 23.4979 3.27525 20.6647 6.09685L18.8863 7.86794L29.1042 18.128L30.8826 16.3569Z"
                stroke="white"
                strokeWidth="1.39631"
              />
              <path
                d="M6.11738 16.3862C3.28414 13.5646 3.2747 8.98047 6.09631 6.14722C8.91791 3.31398 13.5021 3.30455 16.3353 6.12615L28.7444 18.4843L20.512 26.7506C19.4155 27.8518 17.6339 27.8554 16.5328 26.7588L6.11738 16.3862Z"
                stroke="white"
                strokeWidth="1.39631"
              />
              <circle cx="10.4465" cy="10.5266" r="2.02769" stroke="white" strokeWidth="1.39631" />
            </g>
          </svg>
          {/* -------------------- */}
          <svg
            className={styles.sideIcon}
            width="23"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0.75C17.4717 0.75 19.8136 0.884457 21.6614 1.23997C23.5055 1.59476 24.8019 2.15957 25.7318 2.97931C27.5848 4.61265 28.25 7.49821 28.25 12.8889C28.25 16.3741 27.9414 19.0338 27.0466 20.8082C26.6097 21.6746 26.0415 22.3113 25.309 22.7384C24.5722 23.168 23.6154 23.4167 22.3545 23.4167C20.878 23.4167 19.8106 23.747 18.993 24.301C18.1889 24.8458 17.6957 25.5633 17.3031 26.1811C17.2454 26.2719 17.1903 26.3595 17.1373 26.4439C16.8075 26.9687 16.5541 27.3718 16.2032 27.6866C15.8459 28.0073 15.3612 28.25 14.5003 28.25C13.6395 28.25 13.1548 28.0072 12.7975 27.6865C12.4466 27.3717 12.1932 26.9686 11.8634 26.4439C11.8104 26.3595 11.7553 26.2719 11.6976 26.181C11.3049 25.5632 10.8117 24.8458 10.0076 24.301C9.18997 23.747 8.12262 23.4167 6.64613 23.4167C5.38913 23.4167 4.43408 23.161 3.69734 22.7225C2.96364 22.2858 2.3934 21.6362 1.95484 20.7589C1.05816 18.9654 0.75 16.3029 0.75 12.8889C0.75 7.56485 1.414 4.67497 3.27049 3.02475C4.20202 2.19673 5.49956 1.62109 7.34222 1.25708C9.18894 0.89226 11.5298 0.75 14.5 0.75Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9.66683" cy="13.2923" r="1.20833" fill="white" />
            <circle cx="14.4998" cy="13.2923" r="1.20833" fill="white" />
            <ellipse cx="19.3333" cy="13.2923" rx="1.20833" ry="1.20833" fill="white" />
          </svg>
          {/* -------------------- */}

          <svg
            className={styles.sideIcon}
            width="23"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.45866 8.25C8.45866 16.3056 20.542 16.3056 20.542 8.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.57604 14.3083C1.48973 14.7374 1.40059 15.1807 1.30774 15.6386C0.151002 22.1093 0.85387 25.3325 2.8514 27.0436C3.87519 27.9206 5.32423 28.4828 7.28424 28.8175C9.24312 29.1521 11.6395 29.248 14.5 29.248C17.3605 29.248 19.7569 29.1521 21.7157 28.8175C23.6758 28.4828 25.1248 27.9206 26.1486 27.0436C28.1461 25.3325 28.849 22.1094 27.6922 15.6386C27.5994 15.1808 27.5103 14.7376 27.424 14.3085C26.9681 12.0413 26.5912 10.1671 26.1628 8.60091C25.6533 6.73796 25.093 5.40126 24.3101 4.42429C22.7928 2.5309 20.2358 1.74805 14.5 1.74805C8.76421 1.74805 6.20715 2.5309 4.68987 4.42429C3.90697 5.40126 3.34667 6.73796 2.83717 8.60092C2.40883 10.1671 2.03195 12.0412 1.57604 14.3083Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* -------------------- */}

          <svg
            className={styles.sideIcon}
            width="25"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0856 5.38144C6.4026 7.11557 2.06792 15.6371 1.18255 21.5202C1.04371 22.4428 2.16357 22.858 2.81674 22.1918C8.4166 16.4809 15.3309 14.8667 19.034 14.7547C19.5676 14.7385 19.9839 15.1802 19.9839 15.714V18.0547C19.9839 18.958 21.0867 19.3984 21.7089 18.7435L29.3287 10.7227C29.7022 10.3295 29.6943 9.7103 29.3108 9.32684L21.691 1.70709C21.061 1.07713 19.9839 1.5233 19.9839 2.4142V4.37389C19.9839 4.88457 19.5915 5.31226 19.0856 5.38144Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      )}

      <div className={styles.profileNameContainer} />
      {/* <div className={styles.tag} /> */}
    </div>
  );
}

export default VideoContainer;
