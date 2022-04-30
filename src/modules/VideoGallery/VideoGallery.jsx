/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import styles from "./VideoGallery.module.scss";

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

function ImageGallery({ data }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get("https://eked.herokuapp.com/v1/api/videos").then(async (response) => {
      // console.log(response);
      // const videos = response.data.data;
      // console.log(videos[0].video);
      setVideos(response.data.data);
      // videos.map((video) => {
      //   console.log(video);
      // });
      // if (response.data.success) {

      //   setModalValue("otp");
      // }
      // console.log(response);
    });
  });

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
  return (
    <div className={styles.gallery}>
      {/* <Pegg /> */}
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {videos.map((video) => (
          // console.log(video.video.toString());
          // console.log(video.video);

          <video
            src={video.video}
            key={video.video}
            // onClick={() => {
            //   setModalValue("videomodal");
            //   setUrl(video.video);
            //   setIsModalOpen(true);
            // }}
            muted
          />
        ))}
        {/* <video
          src="https://bucketeer-2d3a99a7-20b6-4150-8399-4a871f0932fb.s3.eu-west-1.amazonaws.com/public/video/AQ6lhn6pf5QB9oE0yx708.mp4"
          onClick={() => {
            handleModal();
            // router.push("/video/123");
          }}
        ></video> */}

        {data.photos.map((image) => (
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
        ))}
      </Masonry>
    </div>
  );
}

export default ImageGallery;
