import React from "react";
import Masonry from "react-masonry-css";
import Skeleton from "../SkeletonScreen/Skeleton/Skeleton";
import styles from "./GalleryLoading.module.scss";

const breakpointColumnsObj = {
  default: 3,
  3000: 3,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1,
};

function GalleryLoading() {
  return (
    <div className={styles.galleryLoadingContainer}>
      <Masonry
        className={styles.masonry}
        breakpointCols={breakpointColumnsObj}
        columnClassName={styles.masonryColumn}
      >
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <Skeleton key={n} type="video" />
        ))}
      </Masonry>
    </div>
  );
}

export default GalleryLoading;
