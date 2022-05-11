/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
// import Hls from "hls.js";
// import { useModalContext } from "../../context/ModalContext";
import styles from "./VideoGallery.module.scss";
import VideoContainer from "../../components/VideoContainer/VideoContainer";

// import useScript from '../../hooks/useScript';

// import { useModalContext } from "../../common/context/ModalContext";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { ModalContext } from "../../common/context/ModalContext";
// import Pegg from "../Pegg";
const breakpointColumnsObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 2,
  1000: 2,
  500: 1,
};

function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { setModalValue, setIsVidModalOpen, setUrl } = useModalContext();

  // useScript('https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js.map.');

  // const [videoContainerWidth, setVideoContainerWidth] = useState(0);

  // let newVideoContainerWidth = 0;
  // const getVideoContainerWidth = () => {
  //   if (window.innerWidth < 468) {
  //     const vidContainerWidth = window.innerWidth * 0.9;
  //     const gapFromVidContainerWidth = vidContainerWidth - 15;
  //     newVideoContainerWidth = gapFromVidContainerWidth / 2;
  //     // console.log("new width", newVideoContainerWidth);
  //   } else {
  //     const vidContainerWidth = window.innerWidth * 0.9;
  //     const gapFromVidContainerWidth = vidContainerWidth - 30;
  //     newVideoContainerWidth = gapFromVidContainerWidth / 3;
  //     // console.log("new width", newVideoContainerWidth);
  //   }

  //   setVideoContainerWidth(newVideoContainerWidth);
  // };

  // useEffect(() => {
  //   getVideoContainerWidth();

  //   window.addEventListener("resize", getVideoContainerWidth);
  // }, []);

  // function convertToHsl(video) {
  //   return video;
  // }

  useEffect(() => {
    axios.get("https://eked.herokuapp.com/v1/api/videos").then(async (response) => {
      console.log(response);
      // const videos = response.data.data;
      // console.log(videos[0].video);
      // eslint-disable-next-line no-console

      // const convertVideos = response.data.data.map((data) => ({
      //   ...data,
      //   video: convertToHsl(data.video),
      // }));

      setVideos(response.data.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      // videos.map((video) => {
      //   console.log(video);
      // });
      // if (response.data.success) {

      //   setModalValue("otp");
      // }
      // console.log(response);
    });
  }, []);

  // const handleKeyDown = () => {
  //   console.log("keyDown");
  // };
  // const { setIsModalOpen, setUrl, setModalValue } = useModalContext();
  // const router = useRouter();
  // const handleModal = () => {
  //   document.body.style.overflow = "hidden";
  //   setUrl("./videos/lady_highheel.mp4");
  //   setIsModalOpen(!isModalOpen);
  // };
  // console.log(videoData);

  // if (isLoading) {
  //   return ;
  // }
  return (
    <div className={styles.gallery}>
      {/* <Pegg /> */}
      {isLoading && <h1 className={styles.loading}>Loading</h1>}
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {videos &&
          videos.map((video) => (
            // console.log(video.video.toString());
            // console.log(video.video);
            <VideoContainer
              src={video.video}
              key={video.id}
              // onClick={() => {
              //   setModalValue("videomodal");
              //   setUrl(video.video);
              //   setIsVidModalOpen(true);
              //   console.log("clicked");
              // }}
            />
          ))}
        {/* <video
          src="https://bucketeer-2d3a99a7-20b6-4150-8399-4a871f0932fb.s3.eu-west-1.amazonaws.com/public/video/AQ6lhn6pf5QB9oE0yx708.mp4"
          onClick={() => {
            handleModal();
            // router.push("/video/123");
          }}
        ></video> */}

        {/* {data.photos.map((image) => (
          <img
            src={image.src.large}
            alt=""
            key={image.src.medium}
            // onClick={() => {
            //   setIsModalOpen(true);
            //   setModalValue("videomodal");

            //   setIsModalOpen(true);
            // }}
          />
        ))} */}
      </Masonry>
    </div>
  );
}

export default VideoGallery;
