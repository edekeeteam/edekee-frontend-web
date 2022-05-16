/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import Hls from "hls.js";
import useGetAllVideos from "../../hooks/useGetAllVideos";
// import { useModalContext } from "../../context/ModalContext";
import styles from "./VideoGallery.module.scss";
import Skeleton from "../SkeletonScreen/Skeleton/Skeleton";
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
  const vidRef = useRef();

  const src = "https://edge.tikicdn.com/data/hls/902297/1/3/1478/manifest.m3u8";

  const hls = new Hls();
  useEffect(() => {
    hls.loadSource(src);
    hls.attachMedia(vidRef.current);
  }, [vidRef]);

  const { data, isLoading } = useGetAllVideos();
  if (!isLoading) {
    // console.log(data.data);
    data.data.map((video) => console.log(video.video));
  }

  return (
    <div className={styles.gallery}>
      {/* <Pegg /> */}

      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {/* <Skeleton type="video" />
        <Skeleton type="video" />
        <Skeleton type="video" />
        <Skeleton type="video" />
        <Skeleton type="video" /> */}
        {
          isLoading && [1, 2, 3, 4, 5, 6].map((n) => <Skeleton key={n} type="video" />)
          // <Skeleton type="video" />
          // <Skeleton type="video" />
          // <Skeleton type="video" />
          // <Skeleton type="video" />
          // <Skeleton type="video" />
        }
        {data &&
          data.data.map((video) => (
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
      </Masonry>
    </div>
  );
}

export default VideoGallery;
