/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./ProfileTabs.module.scss";
import VideoGallery from "../../modules/VideoGallery/VideoGallery";

function ProfileTabs(data) {
  const [content, setContent] = useState("videos");
  // console.log(data);
  return (
    <>
      <div className={styles.profileTabs}>
        <div className={styles.profileTabsWrapper}>
          <Button
            size="small"
            bgcolor="white"
            label="All Videos"
            handleClick={() => setContent("videos")}
          />
          <Button
            size="small"
            bgcolor="black"
            label="Categories"
            handleClick={() => setContent("categories")}
          />
        </div>
      </div>

      <div className={styles.tabContent}>
        <div className={styles.tabContentWrapper}>
          {content === "videos" ? (
            <VideoGallery data={data.data} isLoading={false} />
          ) : // <p>Videos</p>
          content === "categories" ? (
            <p>categories</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileTabs;
