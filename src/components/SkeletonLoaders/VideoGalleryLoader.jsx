/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ContentLoader from "react-content-loader";

function VideoGalleryLoader(props) {
  return (
    <ContentLoader
      viewBox="0 0 820 450"
      height={450}
      width={1000}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  );
}

// ImageGrid.metadata = {
//   name: "Hassan Tijani.A",
//   github: "surepeps",
//   description: "Image Grid with Pagination",
//   filename: "ImageGrid",
// };

export default VideoGalleryLoader;
