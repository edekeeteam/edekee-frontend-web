/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import LikesTabContent from "../LikesTabContent/LikesTabContent";
import ShopTabContent from "../ShopTabContent/ShopTabContent";
import VideoTabContent from "../VideoTabContent/VideoTabContent";
// import Button from "../Button/Button";
import styles from "./ProfileTabs.module.scss";
// import VideoGallery from "../../modules/VideoGallery/VideoGallery";

function ProfileTabs() {
  const [content, setContent] = useState("videos");

  const handleKeyDown = () => {};

  // console.log(data);
  return (
    <>
      <div className={styles.profileTabs}>
        <div className={styles.profileTabsWrapper}>
          {/* <Button
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
          /> */}

          <div
            className={styles.tabItem}
            onClick={() => {
              setContent("videos");
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <div className={styles.tabIcon}>
              <img src="/icons/tabVideoIcon.svg" alt="videos" />
            </div>
            <div className={styles.tabText}> Videos</div>
          </div>
          <div
            className={styles.tabItem}
            onClick={() => {
              setContent("likes");
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <div className={styles.tabIcon}>
              <img src="/icons/tabLikeIcon2.svg" alt="videos" />
            </div>
            <div className={styles.tabText}> Likes</div>
          </div>
          <div
            className={styles.tabItem}
            onClick={() => {
              setContent("shop");
            }}
            onKeyDown={handleKeyDown()}
            role="button"
            tabIndex={0}
          >
            <div className={styles.tabIcon}>
              <img src="/icons/tabShopIcon.svg" alt="videos" />
            </div>
            <div className={styles.tabText}> Shop</div>
          </div>
        </div>
      </div>

      <div className={styles.tabContent}>
        <div className={styles.tabContentWrapper}>
          {content === "videos" ? (
            // <VideoGallery data={data.data} isLoading={false} />
            <VideoTabContent />
          ) : // <p>Videos</p>
          content === "likes" ? (
            <LikesTabContent />
          ) : content === "shop" ? (
            <ShopTabContent />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileTabs;
