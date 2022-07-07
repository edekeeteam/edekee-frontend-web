/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import Hls from "hls.js";

// import showTag from "../utils/showTag/";
import showTag from "../../utils/showTag";
// import api from '../utils/ api'
// import labels from "../../ladyLabel.json";
// import { useModalContext } from "../../context/ModalContext";
// import { motion } from "framer-motion";
import styles from "./VideoViewContainer.module.scss";
import Tag from "../Tag/Tag";

function VideoViewContainer({ src, setVideoModalTabValue, json }) {
  const [tagArray, setTagArray] = useState([]);
  const [player, setPlayer] = useState(null);

  const playerRef = useRef(player);

  // const [showInfo, setShowInfo] = useState(false);
  // const [isMuted, setIsMuted] = useState(true)
  // const { setModalValue } = useModalContext();
  const vidRef = useRef();

  useEffect(() => {
    if (playerRef.current == null) return;

    setPlayer(playerRef.current);
  }, [playerRef]);

  // martin
  const hls = new Hls();
  useEffect(() => {
    hls.loadSource(src);
    hls.attachMedia(vidRef.current);
  }, [vidRef]);

  // martin

  const handlePlay = () => {
    setTagArray([]);
  };

  const handleShowTag = (e) => {
    const tags = showTag(e.target.currentTime, json);
    setTagArray(tags);
  };

  return (
    <div
      className={styles.videoViewContainer}
      style={{
        width: "100%",
        aspectRatio: "1/1.77",

        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/outputimage4.webp?alt=media&token=80757d36-6313-4d30-8887-c07b1f56cfa2)",
      }}
    >
      <div className={styles.blur} />
      <div
        style={{
          height: "100%",
          position: "relative",
          aspectRatio: "1/1.77",
          margin: "0 auto",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // border: "1px solid red",
        }}
      >
        {/* <div className={styles.tag} /> */}
        {tagArray &&
          tagArray.map((tag) => {
            console.log(tag);

            // const coordinates = getCoordinates(
            //   tag.boundingBoxHeight,
            //   tag.boundingBoxWidth,
            //   tag.boundingBoxLeft,
            //   tag.boundingBoxTop,
            //   576,
            //   1280
            // );
            // console.log(coordinates);
            // console.log(`this is called ${x} times`);

            return (
              <Tag
                key={tag.x * tag.y}
                leftPos={tag.x * 100}
                topPos={tag.y * 100}
                // leftPos={coordinates.x}
                // topPos={coordinates.y}
                id={tag.product_id}
                title={tag.label.slice(0, 10)}
                price={tag.price}
                setVideoModalTabValue={setVideoModalTabValue}
              />
            );
          })}

        <video
          ref={vidRef}
          src={src}
          loop
          autoPlay
          controls
          id="video"
          // width="100%"
          // height="100%"
          onPlay={() => {
            handlePlay();
          }}
          onPause={(e) => {
            handleShowTag(e);
          }}
          style={{
            height: "100%",

            aspectRatio: "1/1.77",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <track kind="captions" />
        </video>

        {/* {showInfo && (
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
      )} */}

        <div className={styles.profileNameContainer} />
      </div>
    </div>
  );
}

export default VideoViewContainer;

/* eslint-disable react/prop-types */
// import { useState, useEffect, useRef } from "react";
// // import Hls from "hls.js";

// // import showTag from "../utils/showTag/";
// import showTag from "../../utils/showTag";
// // import api from '../utils/ api'
// // import labels from "../../ladyLabel.json";
// // import { useModalContext } from "../../context/ModalContext";
// // import { motion } from "framer-motion";
// import styles from "./VideoViewContainer.module.scss";
// import Tag from "../Tag/Tag";

// function VideoViewContainer({ setVideoModalTabValue }) {
//   // function VideoViewContainer({ src, setVideoModalTabValue, json }) {
//   const [tagArray, setTagArray] = useState([]);
//   const [player, setPlayer] = useState(null);

//   const playerRef = useRef(player);

//   // const [showInfo, setShowInfo] = useState(false);
//   // const [isMuted, setIsMuted] = useState(true)
//   // const { setModalValue } = useModalContext();
//   const vidRef = useRef();

//   useEffect(() => {
//     if (playerRef.current == null) return;

//     setPlayer(playerRef.current);
//   }, [playerRef]);

//   // martin
//   // const hls = new Hls();
//   // useEffect(() => {
//   //   hls.loadSource(src);
//   //   hls.attachMedia(vidRef.current);
//   // }, [vidRef]);

//   // martin

//   const handlePlay = () => {
//     setTagArray([]);
//   };

//   const handleShowTag = (e) => {
//     const tags = showTag(e.target.currentTime, {
//       result: {
//         duration: 81000,
//         frameRate: 23,
//         labels: [
//           {
//             boundingBoxHeight: 0.45850598370587387,
//             boundingBoxLeft: 0.4444043795267741,
//             boundingBoxTop: 0.5137590761537905,
//             boundingBoxWidth: 0.28235019048055016,
//             centroid: "0.4444043795267741,0.5137590761537905",
//             confidence: 0.99,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 1500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7109610663519965,
//             boundingBoxLeft: 0.2618975321451823,
//             boundingBoxTop: 0.2577690407081887,
//             boundingBoxWidth: 0.5372583389282226,
//             centroid: "0.2618975321451823,0.2577690407081887",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 3000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5457933213975694,
//             boundingBoxLeft: 0.3799417495727539,
//             boundingBoxTop: 0.43160295839662904,
//             boundingBoxWidth: 0.4350514729817708,
//             centroid: "0.3799417495727539,0.43160295839662904",
//             confidence: 0.9,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 4000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5849180998625578,
//             boundingBoxLeft: 0.41416349411010744,
//             boundingBoxTop: 0.37737291124131944,
//             boundingBoxWidth: 0.16358366012573242,
//             centroid: "0.41416349411010744,0.37737291124131944",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 5500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6491195113570601,
//             boundingBoxLeft: 0.20498059590657552,
//             boundingBoxTop: 0.2915400469744647,
//             boundingBoxWidth: 0.36701412200927735,
//             centroid: "0.20498059590657552,0.2915400469744647",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 8000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6613598858868635,
//             boundingBoxLeft: 0.26409339904785156,
//             boundingBoxTop: 0.2809388619882089,
//             boundingBoxWidth: 0.3404791514078776,
//             centroid: "0.26409339904785156,0.2809388619882089",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 9500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.587731029369213,
//             boundingBoxLeft: 0.4140647888183594,
//             boundingBoxTop: 0.37894580982349535,
//             boundingBoxWidth: 0.1861329396565755,
//             centroid: "0.4140647888183594,0.37894580982349535",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 10500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5295927824797454,
//             boundingBoxLeft: 0.37388359705607094,
//             boundingBoxTop: 0.44465072066695605,
//             boundingBoxWidth: 0.16656999588012694,
//             centroid: "0.37388359705607094,0.44465072066695605",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 12000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.657853529188368,
//             boundingBoxLeft: 0.019277334213256836,
//             boundingBoxTop: 0.3103856687192564,
//             boundingBoxWidth: 0.5489013036092122,
//             centroid: "0.019277334213256836,0.3103856687192564",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 13500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7909326623987268,
//             boundingBoxLeft: 0.015426395336786906,
//             boundingBoxTop: 0.16925366719563803,
//             boundingBoxWidth: 0.6304562250773112,
//             centroid: "0.015426395336786906,0.16925366719563803",
//             confidence: 0.94,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 14500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.815465799967448,
//             boundingBoxLeft: 0.1480582396189372,
//             boundingBoxTop: 0.1654269324408637,
//             boundingBoxWidth: 0.5380307515462239,
//             centroid: "0.1480582396189372,0.1654269324408637",
//             confidence: 0.94,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 16000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6962523283781828,
//             boundingBoxLeft: 0.1454287052154541,
//             boundingBoxTop: 0.26956459327980326,
//             boundingBoxWidth: 0.4784433364868164,
//             centroid: "0.1454287052154541,0.26956459327980326",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 17000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7545924999095776,
//             boundingBoxLeft: 0.18636503219604492,
//             boundingBoxTop: 0.23393922028718173,
//             boundingBoxWidth: 0.583102798461914,
//             centroid: "0.18636503219604492,0.23393922028718173",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 29000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7145789817527488,
//             boundingBoxLeft: 0.17169178326924642,
//             boundingBoxTop: 0.24865524857132523,
//             boundingBoxWidth: 0.5914642333984375,
//             centroid: "0.17169178326924642,0.24865524857132523",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 30000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6813951280381945,
//             boundingBoxLeft: 0.15300739606221517,
//             boundingBoxTop: 0.2874169526276765,
//             boundingBoxWidth: 0.6419488271077474,
//             centroid: "0.15300739606221517,0.2874169526276765",
//             confidence: 0.95,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 31500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5273924650969328,
//             boundingBoxLeft: 0.37808952331542967,
//             boundingBoxTop: 0.43542782818829573,
//             boundingBoxWidth: 0.24641698201497395,
//             centroid: "0.37808952331542967,0.43542782818829573",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 33000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4571146081995081,
//             boundingBoxLeft: 0.00253232941031456,
//             boundingBoxTop: 0.5092013323748553,
//             boundingBoxWidth: 0.23762273788452148,
//             centroid: "0.00253232941031456,0.5092013323748553",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 33000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5479015209056713,
//             boundingBoxLeft: 0.3551454226175944,
//             boundingBoxTop: 0.4217748288755064,
//             boundingBoxWidth: 0.2608379681905111,
//             centroid: "0.3551454226175944,0.4217748288755064",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 35500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.46367260968243634,
//             boundingBoxLeft: 0.0010285545761386553,
//             boundingBoxTop: 0.505241620099103,
//             boundingBoxWidth: 0.24140346844991048,
//             centroid: "0.0010285545761386553,0.505241620099103",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 35500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5391179967809606,
//             boundingBoxLeft: 0.3532021204630534,
//             boundingBoxTop: 0.43501564308449076,
//             boundingBoxWidth: 0.26399898529052734,
//             centroid: "0.3532021204630534,0.43501564308449076",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 37000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.46035291883680557,
//             boundingBoxLeft: 0.001999485120177269,
//             boundingBoxTop: 0.5039547390407986,
//             boundingBoxWidth: 0.24238185882568358,
//             centroid: "0.001999485120177269,0.5039547390407986",
//             confidence: 0.95,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 37000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6791506166811343,
//             boundingBoxLeft: 0.20337630907694498,
//             boundingBoxTop: 0.31301871405707465,
//             boundingBoxWidth: 0.5410126368204753,
//             centroid: "0.20337630907694498,0.31301871405707465",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 38000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.688054515697338,
//             boundingBoxLeft: 0.2161039352416992,
//             boundingBoxTop: 0.2931825143319589,
//             boundingBoxWidth: 0.5276220321655274,
//             centroid: "0.2161039352416992,0.2931825143319589",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 39500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5152065700954861,
//             boundingBoxLeft: 0.37709010442097984,
//             boundingBoxTop: 0.4445355450665509,
//             boundingBoxWidth: 0.24880495071411132,
//             centroid: "0.37709010442097984,0.4445355450665509",
//             confidence: 0.99,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 40500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4647087379738137,
//             boundingBoxLeft: 0.014481391509373982,
//             boundingBoxTop: 0.49874194109881365,
//             boundingBoxWidth: 0.28977464040120443,
//             centroid: "0.014481391509373982,0.49874194109881365",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 40500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.684820556640625,
//             boundingBoxLeft: 0.18442635536193847,
//             boundingBoxTop: 0.31085258766456886,
//             boundingBoxWidth: 0.566474978129069,
//             centroid: "0.18442635536193847,0.31085258766456886",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 51000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7004451045283565,
//             boundingBoxLeft: 0.1808753490447998,
//             boundingBoxTop: 0.29955489547164355,
//             boundingBoxWidth: 0.5585062026977539,
//             centroid: "0.1808753490447998,0.29955489547164355",
//             confidence: 0.99,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 52500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6461821379484953,
//             boundingBoxLeft: 0.19929518699645996,
//             boundingBoxTop: 0.3268403512460214,
//             boundingBoxWidth: 0.5306973775227865,
//             centroid: "0.19929518699645996,0.3268403512460214",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 53500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7728065773292824,
//             boundingBoxLeft: 0.016961683829625446,
//             boundingBoxTop: 0.19089188752350983,
//             boundingBoxWidth: 0.40193093617757164,
//             centroid: "0.016961683829625446,0.19089188752350983",
//             confidence: 0.94,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 55000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.35292705959743925,
//             boundingBoxLeft: 0.36639153162638344,
//             boundingBoxTop: 0.3399399651421441,
//             boundingBoxWidth: 0.1767842928568522,
//             centroid: "0.36639153162638344,0.3399399651421441",
//             confidence: 0.94,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 55000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6898129498517072,
//             boundingBoxLeft: 0.21269831657409669,
//             boundingBoxTop: 0.2801325480143229,
//             boundingBoxWidth: 0.5271006902058919,
//             centroid: "0.21269831657409669,0.2801325480143229",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 56500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.7128837302879051,
//             boundingBoxLeft: 0.19873792330423992,
//             boundingBoxTop: 0.26219380696614586,
//             boundingBoxWidth: 0.5372725168863932,
//             centroid: "0.19873792330423992,0.26219380696614586",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 57500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5212382563838253,
//             boundingBoxLeft: 0.39016841252644857,
//             boundingBoxTop: 0.4500879923502604,
//             boundingBoxWidth: 0.24269863764444988,
//             centroid: "0.39016841252644857,0.4500879923502604",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 59000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.45590125189887154,
//             boundingBoxLeft: 0.01046237846215566,
//             boundingBoxTop: 0.5099307024920429,
//             boundingBoxWidth: 0.25012760162353515,
//             centroid: "0.01046237846215566,0.5099307024920429",
//             confidence: 0.93,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 59000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4633952953197338,
//             boundingBoxLeft: 0.37725741068522134,
//             boundingBoxTop: 0.5039993851273148,
//             boundingBoxWidth: 0.259957758585612,
//             centroid: "0.37725741068522134,0.5039993851273148",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 60000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4657414189091435,
//             boundingBoxLeft: 0.005779738227526347,
//             boundingBoxTop: 0.496731115270544,
//             boundingBoxWidth: 0.23497885068257648,
//             centroid: "0.005779738227526347,0.496731115270544",
//             confidence: 0.95,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 60000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4796950728804977,
//             boundingBoxLeft: 0.007604325811068217,
//             boundingBoxTop: 0.49614348234953703,
//             boundingBoxWidth: 0.23026647567749023,
//             centroid: "0.007604325811068217,0.49614348234953703",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 61500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4754523383246528,
//             boundingBoxLeft: 0.378566042582194,
//             boundingBoxTop: 0.4911304615162037,
//             boundingBoxWidth: 0.25751082102457684,
//             centroid: "0.378566042582194,0.4911304615162037",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 61500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.502671644422743,
//             boundingBoxLeft: 0.3528379758199056,
//             boundingBoxTop: 0.46239332976164643,
//             boundingBoxWidth: 0.2812787055969238,
//             centroid: "0.3528379758199056,0.46239332976164643",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 63000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.477073895489728,
//             boundingBoxLeft: 0.007297639052073161,
//             boundingBoxTop: 0.4872866595232928,
//             boundingBoxWidth: 0.23306172688802082,
//             centroid: "0.007297639052073161,0.4872866595232928",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 63000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5253258599175348,
//             boundingBoxLeft: 0.3547458012898763,
//             boundingBoxTop: 0.44827555903682004,
//             boundingBoxWidth: 0.2661945343017578,
//             centroid: "0.3547458012898763,0.44827555903682004",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 64000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.49367104989510996,
//             boundingBoxLeft: 0.005659625430901845,
//             boundingBoxTop: 0.485768805609809,
//             boundingBoxWidth: 0.23689835866292316,
//             centroid: "0.005659625430901845,0.485768805609809",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 64000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.4131882844147859,
//             boundingBoxLeft: 0.7473281860351563,
//             boundingBoxTop: 0.5454629968713831,
//             boundingBoxWidth: 0.23643175760904947,
//             centroid: "0.7473281860351563,0.5454629968713831",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 65500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6580430772569444,
//             boundingBoxLeft: 0.15368448893229167,
//             boundingBoxTop: 0.2949734440556279,
//             boundingBoxWidth: 0.4973163604736328,
//             centroid: "0.15368448893229167,0.2949734440556279",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 65500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.39152792471426506,
//             boundingBoxLeft: 0.7591976801554362,
//             boundingBoxTop: 0.5344228108723958,
//             boundingBoxWidth: 0.22344799041748048,
//             centroid: "0.7591976801554362,0.5344228108723958",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 67000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6788266217267072,
//             boundingBoxLeft: 0.15888465245564778,
//             boundingBoxTop: 0.28321798819082755,
//             boundingBoxWidth: 0.5014927228291829,
//             centroid: "0.15888465245564778,0.28321798819082755",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 67000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6979874222366899,
//             boundingBoxLeft: 0.15467027028401692,
//             boundingBoxTop: 0.2808906837745949,
//             boundingBoxWidth: 0.5145101547241211,
//             centroid: "0.15467027028401692,0.2808906837745949",
//             confidence: 0.97,
//             description: "",
//             id: "",
//             label: "Baroness Wrap Tight",
//             millisecond: 68000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.38301239013671873,
//             boundingBoxLeft: 0.7596452713012696,
//             boundingBoxTop: 0.5421667028356482,
//             boundingBoxWidth: 0.22516835530598958,
//             centroid: "0.7596452713012696,0.5421667028356482",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Cruella Red Party Stopper",
//             millisecond: 68000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6542552524142795,
//             boundingBoxLeft: 0.30984954833984374,
//             boundingBoxTop: 0.3090842776828342,
//             boundingBoxWidth: 0.22405889828999836,
//             centroid: "0.30984954833984374,0.3090842776828342",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 69500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6389149983723958,
//             boundingBoxLeft: 0.3353971799214681,
//             boundingBoxTop: 0.3183882395426432,
//             boundingBoxWidth: 0.24323902130126954,
//             centroid: "0.3353971799214681,0.3183882395426432",
//             confidence: 0.96,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 70500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.6201935662163629,
//             boundingBoxLeft: 0.5002965927124023,
//             boundingBoxTop: 0.35730610600224244,
//             boundingBoxWidth: 0.295241641998291,
//             centroid: "0.5002965927124023,0.35730610600224244",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 72000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5946139300311053,
//             boundingBoxLeft: 0.3990090529123942,
//             boundingBoxTop: 0.38713226318359373,
//             boundingBoxWidth: 0.2835585117340088,
//             centroid: "0.3990090529123942,0.38713226318359373",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 76000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5867236667209201,
//             boundingBoxLeft: 0.37939831415812175,
//             boundingBoxTop: 0.3899646900318287,
//             boundingBoxWidth: 0.31965920130411785,
//             centroid: "0.37939831415812175,0.3899646900318287",
//             confidence: 0.99,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 77000,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5978991473162616,
//             boundingBoxLeft: 0.3566630204518636,
//             boundingBoxTop: 0.3771912892659505,
//             boundingBoxWidth: 0.35899597803751626,
//             centroid: "0.3566630204518636,0.3771912892659505",
//             confidence: 0.99,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 78500,
//             price: "",
//           },
//           {
//             boundingBoxHeight: 0.5912193298339843,
//             boundingBoxLeft: 0.34138063589731854,
//             boundingBoxTop: 0.39326592904550056,
//             boundingBoxWidth: 0.368024222056071,
//             centroid: "0.34138063589731854,0.39326592904550056",
//             confidence: 0.98,
//             description: "",
//             id: "",
//             label: "Baroness Freak Gown",
//             millisecond: 81000,
//             price: "",
//           },
//         ],
//       },
//       status: "200",
//     });
//     setTagArray(tags);
//   };

//   const getCoordinates = (bbh, bbw, bbl, bbt, vw, vh) => {
//     const bbhFloat = parseFloat(bbh);
//     const bbwFloat = parseFloat(bbw);
//     const bblFloat = parseFloat(bbl);
//     const bbtFloat = parseFloat(bbt);

//     const xCoordinate = bblFloat * vw + (bbwFloat * vw) / 2;
//     const yCoordinate = bbtFloat * vh + (bbhFloat * vh) / 2;

//     console.log(xCoordinate, yCoordinate);

//     const x = (xCoordinate / vw) * 100;
//     const y = (yCoordinate / vh) * 100;

//     return { x, y };
//   };

//   return (
//     <div
//       className={styles.videoViewContainer}
//       style={{
//         width: "100%",
//         // aspectRatio: "1/1.77",

//         backgroundImage:
//           "url(https://firebasestorage.googleapis.com/v0/b/peggs-web.appspot.com/o/outputimage4.webp?alt=media&token=80757d36-6313-4d30-8887-c07b1f56cfa2)",
//       }}
//     >
//       <div className={styles.blur} />
//       <div
//         style={{
//           width: "100%",
//           position: "relative",
//           aspectRatio: "1.77/1",
//           margin: "0 auto",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           // border: "1px solid red",
//         }}
//       >
//         {/* <div className={styles.tag} /> */}
//         {tagArray &&
//           tagArray.map((tag) => {
//             console.log(tag);

//             const coordinates = getCoordinates(
//               tag.boundingBoxHeight,
//               tag.boundingBoxWidth,
//               tag.boundingBoxLeft,
//               tag.boundingBoxTop,
//               3840,
//               2160
//             );
//             console.log(coordinates);
//             // console.log(`this is called ${x} times`);

//             return (
//               <Tag
//                 key={tag.x * tag.y}
//                 // leftPos={tag.x * 100}
//                 // topPos={tag.y * 100}
//                 leftPos={coordinates.x}
//                 topPos={coordinates.y}
//                 id={tag.product_id}
//                 title={tag.label.slice(0, 10)}
//                 price={tag.price}
//                 setVideoModalTabValue={setVideoModalTabValue}
//               />
//             );
//           })}

//         <video
//           ref={vidRef}
//           src="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-66ef6.appspot.com/o/cruella-short.mp4?alt=media&token=cd018803-32b6-4833-a588-8f5489833311"
//           // src={src}
//           loop
//           autoPlay
//           controls
//           id="video"
//           // width="100%"
//           // height="100%"
//           onPlay={() => {
//             handlePlay();
//           }}
//           onPause={(e) => {
//             handleShowTag(e);
//           }}
//           style={{
//             width: "100%",
//             // position: "relative",
//             aspectRatio: "1.77/1",

//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             border: "1px solid green",
//           }}
//         >
//           <track kind="captions" />
//         </video>

//         {/* {showInfo && (
//         <div className={styles.sideIcons}>
//           <svg
//             className={styles.sideIcon}
//             width="31"
//             height="30"
//             viewBox="0 0 37 30"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g opacity="0.9">
//               <path
//                 d="M30.8826 16.3569C33.7159 13.5353 33.7253 8.95117 30.9037 6.11793C28.0821 3.28468 23.4979 3.27525 20.6647 6.09685L18.8863 7.86794L29.1042 18.128L30.8826 16.3569Z"
//                 stroke="white"
//                 strokeWidth="1.39631"
//               />
//               <path
//                 d="M6.11738 16.3862C3.28414 13.5646 3.2747 8.98047 6.09631 6.14722C8.91791 3.31398 13.5021 3.30455 16.3353 6.12615L28.7444 18.4843L20.512 26.7506C19.4155 27.8518 17.6339 27.8554 16.5328 26.7588L6.11738 16.3862Z"
//                 stroke="white"
//                 strokeWidth="1.39631"
//               />
//               <circle cx="10.4465" cy="10.5266" r="2.02769" stroke="white" strokeWidth="1.39631" />
//             </g>
//           </svg>
//           <svg
//             className={styles.sideIcon}
//             width="23"
//             height="29"
//             viewBox="0 0 29 29"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M14.5 0.75C17.4717 0.75 19.8136 0.884457 21.6614 1.23997C23.5055 1.59476 24.8019 2.15957 25.7318 2.97931C27.5848 4.61265 28.25 7.49821 28.25 12.8889C28.25 16.3741 27.9414 19.0338 27.0466 20.8082C26.6097 21.6746 26.0415 22.3113 25.309 22.7384C24.5722 23.168 23.6154 23.4167 22.3545 23.4167C20.878 23.4167 19.8106 23.747 18.993 24.301C18.1889 24.8458 17.6957 25.5633 17.3031 26.1811C17.2454 26.2719 17.1903 26.3595 17.1373 26.4439C16.8075 26.9687 16.5541 27.3718 16.2032 27.6866C15.8459 28.0073 15.3612 28.25 14.5003 28.25C13.6395 28.25 13.1548 28.0072 12.7975 27.6865C12.4466 27.3717 12.1932 26.9686 11.8634 26.4439C11.8104 26.3595 11.7553 26.2719 11.6976 26.181C11.3049 25.5632 10.8117 24.8458 10.0076 24.301C9.18997 23.747 8.12262 23.4167 6.64613 23.4167C5.38913 23.4167 4.43408 23.161 3.69734 22.7225C2.96364 22.2858 2.3934 21.6362 1.95484 20.7589C1.05816 18.9654 0.75 16.3029 0.75 12.8889C0.75 7.56485 1.414 4.67497 3.27049 3.02475C4.20202 2.19673 5.49956 1.62109 7.34222 1.25708C9.18894 0.89226 11.5298 0.75 14.5 0.75Z"
//               stroke="white"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <circle cx="9.66683" cy="13.2923" r="1.20833" fill="white" />
//             <circle cx="14.4998" cy="13.2923" r="1.20833" fill="white" />
//             <ellipse cx="19.3333" cy="13.2923" rx="1.20833" ry="1.20833" fill="white" />
//           </svg>

//           <svg
//             className={styles.sideIcon}
//             width="23"
//             height="30"
//             viewBox="0 0 29 30"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8.45866 8.25C8.45866 16.3056 20.542 16.3056 20.542 8.25"
//               stroke="white"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M1.57604 14.3083C1.48973 14.7374 1.40059 15.1807 1.30774 15.6386C0.151002 22.1093 0.85387 25.3325 2.8514 27.0436C3.87519 27.9206 5.32423 28.4828 7.28424 28.8175C9.24312 29.1521 11.6395 29.248 14.5 29.248C17.3605 29.248 19.7569 29.1521 21.7157 28.8175C23.6758 28.4828 25.1248 27.9206 26.1486 27.0436C28.1461 25.3325 28.849 22.1094 27.6922 15.6386C27.5994 15.1808 27.5103 14.7376 27.424 14.3085C26.9681 12.0413 26.5912 10.1671 26.1628 8.60091C25.6533 6.73796 25.093 5.40126 24.3101 4.42429C22.7928 2.5309 20.2358 1.74805 14.5 1.74805C8.76421 1.74805 6.20715 2.5309 4.68987 4.42429C3.90697 5.40126 3.34667 6.73796 2.83717 8.60092C2.40883 10.1671 2.03195 12.0412 1.57604 14.3083Z"
//               stroke="white"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>

//           <svg
//             className={styles.sideIcon}
//             width="25"
//             height="24"
//             viewBox="0 0 31 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M19.0856 5.38144C6.4026 7.11557 2.06792 15.6371 1.18255 21.5202C1.04371 22.4428 2.16357 22.858 2.81674 22.1918C8.4166 16.4809 15.3309 14.8667 19.034 14.7547C19.5676 14.7385 19.9839 15.1802 19.9839 15.714V18.0547C19.9839 18.958 21.0867 19.3984 21.7089 18.7435L29.3287 10.7227C29.7022 10.3295 29.6943 9.7103 29.3108 9.32684L21.691 1.70709C21.061 1.07713 19.9839 1.5233 19.9839 2.4142V4.37389C19.9839 4.88457 19.5915 5.31226 19.0856 5.38144Z"
//               stroke="white"
//               strokeWidth="1.5"
//             />
//           </svg>
//         </div>
//       )} */}

//         <div className={styles.profileNameContainer} />
//       </div>
//     </div>
//   );
// }

// export default VideoViewContainer;
