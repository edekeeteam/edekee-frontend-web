import React from "react";
// import OtpModal from "../../components/AuthenticationModals/OtpModal/OtpModal";
import VideoGallery from "../../modules/VideoGallery/VideoGallery";
// import useGetAllVideos from "../../hooks/useGetAllVideos";
import GalleryLoading from "../../components/GalleryLoading/GalleryLoading";

import useGetVideos from "../../hooks/videos/useGetVideos";
// import { useDropdownContext } from "../../context/DropdownContext";

function Home() {
  // const { data, isLoading } = useGetAllVideos();
  const { data, isLoading } = useGetVideos();

  // console.log(data);
  if (isLoading) {
    return <GalleryLoading />;
  }

  return (
    <div>
      {data && <VideoGallery data={data.data} isLoading={isLoading} />}
      {/* <VideoGallery data={data.data} isLoading={isLoading} /> */}
      {/* <OtpModal /> */}
    </div>
  );
}

export default Home;
