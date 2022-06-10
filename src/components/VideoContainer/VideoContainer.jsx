/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
// import { useRef } from "react";
import Hls from "hls.js";
import { useState, useRef, useEffect } from "react";
// import ReactHlsPlayer from "react-hls-player";
import axios from "axios";
import { useModalContext } from "../../context/ModalContext";

// import { motion } from "framer-motion";

import styles from "./VideoContainer.module.scss";
import { useProductsContext } from "../../context/ProductsContext";

function VideoContainer({ src, videoId, thumbnail, label }) {
  const [showInfo, setShowInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  // const [isMuted, setIsMuted] = useState(true)
  const { setIsVidModalOpen, setModalValue, setUrl, setLabel, setVideoId } = useModalContext();

  const { setProducts } = useProductsContext();
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
    }, 500);
  };

  const stopVideoTimer = (e) => {
    e.target.pause();
    // e.target.currentTime = 0;
    // console.log(e.target.videoHeight());
    setShowInfo(false);
    clearTimeout(vidRef.current);
  };

  const fetchProducts = (id) => {
    setProducts({});
    setIsVidModalOpen(true);
    setUrl(src);
    setVideoId(id);
    setLabel(label);
    console.log(src);
    setModalValue("videomodal");

    axios.get(`https://eked.herokuapp.com/v1/api/products/${id}/video`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        // console.log("successful");
        // console.log(res.data.success);
        setProducts(res.data);
      }
    });
  };

  return (
    <div
      className={styles.videoContainer}
      onMouseEnter={(e) => {
        startVideoTimer(e);
      }}
      onMouseLeave={(e) => {
        stopVideoTimer(e);
      }}
      style={{ border: "1px solid red" }}
    >
      {/* <svg
        width="50"
        height="50"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.playButton}
        onClick={() => {
          console.log("clicked on play");
        }}
         
      >
        <circle cx="40" cy="40" r="39.3333" stroke="white" strokeWidth="1.33333" />
        <path d="M32.6666 52.1311V28L54 41.2896L32.6666 52.1311Z" fill="white" />
      </svg>{" "} */}
      <video
        ref={vidRef}
        src={src}
        loop
        muted
        // controls
        preload="auto"
        poster={thumbnail}
        // width="100%"
        // height="100%"
        onClick={() => {
          fetchProducts(videoId);
        }}
        onError={(e) => {
          console.log(e, "error");
        }}
        className={styles.videoPlayer}
        style={{ width: "100%", aspectRatio: "1/1.7777" }}
      >
        <track kind="captions" />
      </video>
      {showInfo && (
        <div className={styles.sideIcons}>
          {!isLiked ? (
            <svg
              width="31"
              height="30"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked the like");

                if (!localStorage.getItem("userId")) {
                  alert("login to like video");
                } else {
                  setIsLiked(!isLiked);
                }
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9514 5.84882L19.7284 4.07912C22.4785 1.34028 26.9282 1.34944 29.6671 4.09958C32.4059 6.84972 32.3968 11.2994 29.6466 14.0383L27.8801 15.7975L27.8767 15.7941L25.332 13.2599L17.9514 5.84882ZM28.9281 16.8708L28.1148 17.6807L27.8811 17.9154L19.5666 26.2642C18.0963 27.7406 15.7076 27.7455 14.2312 26.2752L3.04236 15.1323C-0.294768 11.8089 -0.305877 6.40948 3.01754 3.07235C6.34097 -0.264778 11.7404 -0.275892 15.0775 3.04753L16.858 4.82072L16.8929 4.78598L18.6699 3.01628C22.0071 -0.307142 27.4065 -0.296028 30.7299 3.0411C34.0534 6.37823 34.0422 11.7777 30.7051 15.1011L28.9281 16.8708ZM26.8068 16.8664L24.2716 14.3208L14.0191 4.11037C11.2689 1.37153 6.81923 1.38069 4.08039 4.13083C1.34154 6.88097 1.3507 11.3307 4.10084 14.0695L15.2897 25.2124C16.179 26.0981 17.618 26.0951 18.5038 25.2058L26.8078 16.8675L26.8068 16.8664ZM9.65042 8.30865C9.65042 9.09745 9.01097 9.73691 8.22216 9.73691C7.43336 9.73691 6.7939 9.09745 6.7939 8.30865C6.7939 7.51984 7.43336 6.88039 8.22216 6.88039C9.01097 6.88039 9.65042 7.51984 9.65042 8.30865ZM11.1504 8.30865C11.1504 9.92588 9.83939 11.2369 8.22216 11.2369C6.60493 11.2369 5.2939 9.92588 5.2939 8.30865C5.2939 6.69141 6.60493 5.38039 8.22216 5.38039C9.83939 5.38039 11.1504 6.69141 11.1504 8.30865Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="31"
              height="30"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked the like");
                setIsLiked(!isLiked);
              }}
            >
              <path
                d="M30.2363 14.0499C33.4851 10.8451 33.4959 5.63847 30.2604 2.4205C27.025 -0.797464 21.7684 -0.808181 18.5196 2.39657L6.2583 14.4914C5.34999 15.3874 5.34697 16.8431 6.25154 17.7428L14.6925 26.138C15.5971 27.0377 17.0667 27.0407 17.975 26.1447L30.2363 14.0499Z"
                fill="#BC1529"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.41962 2.44558C-0.815955 5.66363 -0.805132 10.8704 2.44379 14.0752L14.7049 26.17C15.6132 27.066 17.0828 27.063 17.9874 26.1633L26.4287 17.7677C27.3333 16.868 27.3302 15.4123 26.4219 14.5164L14.1608 2.42164C10.9119 -0.783191 5.65519 -0.772473 2.41962 2.44558ZM6.78245 9.32271C8.1625 9.32271 9.28125 8.21459 9.28125 6.84765C9.28125 5.48071 8.1625 4.37259 6.78245 4.37259C5.4024 4.37259 4.28365 5.48071 4.28365 6.84765C4.28365 8.21459 5.4024 9.32271 6.78245 9.32271Z"
                fill="#DB2734"
              />
            </svg>
          )}
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

          <svg
            className={styles.sideIcon}
            onClick={() => {
              console.log("clicked on shop");
              fetchProducts(videoId);
            }}
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
