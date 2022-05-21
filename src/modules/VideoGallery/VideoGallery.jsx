/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import Hls from "hls.js";
// import axios from "axios";
import useGetAllVideos from "../../hooks/useGetAllVideos";
// import { useModalContext } from "../../context/ModalContext";
import styles from "./VideoGallery.module.scss";
import Skeleton from "../SkeletonScreen/Skeleton/Skeleton";
import VideoContainer from "../../components/VideoContainer/VideoContainer";

// import useScript from '../../hooks/useScript';

// import { useModalContext } from "../../common/context/ModalContext";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { ModalContext } from "../../context/ModalContext";
// import { useModalContext } from "../../context/ModalContext";
// import Pegg from "../Pegg";
const breakpointColumnsObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1,
};

function VideoGallery() {
  const vidRef = useRef();

  const src = "https://edge.tikicdn.com/data/hls/902297/1/3/1478/manifest.m3u8";

  const hls = new Hls();
  useEffect(() => {
    hls.loadSource(src);
    hls.attachMedia(vidRef.current);
  }, [vidRef]);

  const { data, isLoading } = useGetAllVideos();

  if (!isLoading) {
    console.log(data);
  }

  // if (!isLoading) {
  //   axios
  //     .get(
  //       "https://edekee-ml-bucket.s3.us-east-2.amazonaws.com/public/json/eben_edited_labels.json"
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // }

  // if (!isLoading) {
  //   // console.log(data.data[0]);
  //   const { data: jsonData } = useGetJson(data.data[1].json);
  //   console.log(jsonData);

  //   console.log(data);
  // }
  // if (!isLoading) {
  //   // console.log(data.data);
  //   data.data.map((video) => console.log(video.video));
  // }

  return (
    <div className={styles.gallery}>
      {/* <Pegg /> */}

      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {isLoading && [1, 2, 3, 4, 5, 6].map((n) => <Skeleton key={n} type="video" />)}
        {data &&
          data.data.map((video) => (
            <VideoContainer
              src={video.videoUrl}
              key={video.videoId}
              videoId={video.videoId}
              thumbnail={video.thumbnail}
              // onClick={() => {
              //   // console.log("clicked");
              //   setModalValue("videomodal");
              //   setUrl(video.video);
              //   setIsVidModalOpen(true);
              // }}
            />
          ))}
      </Masonry>
    </div>
  );
}

export default VideoGallery;
