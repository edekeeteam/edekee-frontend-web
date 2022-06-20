import React from "react";
// import OtpModal from "../../components/AuthenticationModals/OtpModal/OtpModal";
import VideoGallery from "../../modules/VideoGallery/VideoGallery";
// import useGetAllVideos from "../../hooks/useGetAllVideos";
import GalleryLoading from "../../components/GalleryLoading/GalleryLoading";

import useGetVideos from "../../hooks/videos/useGetVideos";
// import VideoGalleryLoader from "../../components/SkeletonLoaders/VideoGalleryLoader";
// import { useDropdownContext } from "../../context/DropdownContext";

function Home() {
  // const { data, isLoading } = useGetAllVideos();
  const { data, isLoading } = useGetVideos();

  // console.log(data);
  if (isLoading) {
    return <GalleryLoading />;
  }
  // if (isLoading) {
  //   return (
  //     <div style={{ width: "100%", border: "1px solid red" }}>
  //       <VideoGalleryLoader />
  //     </div>
  //   );
  // }

  return (
    <div>
      {data && <VideoGallery data={data.data} isLoading={isLoading} />}
      {/* <VideoGallery data={data.data} isLoading={isLoading} /> */}
      {/* <OtpModal /> */}
    </div>
  );
}

export default Home;
