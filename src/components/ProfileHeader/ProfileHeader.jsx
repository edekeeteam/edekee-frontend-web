/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProfileHeader.module.scss";
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfileName from "../ProfileName/ProFileName";
import ProfileFollow from "../ProfileFollow/ProfileFollow";
import ProfileBio from "../ProfileBio/ProfileBio";
import ProfileTabs from "../ProfileTabs/ProfileTabs";

// "https://picsum.photos/200/300.webp"

function ProfileHeader({ data }) {
  return (
    <div className={styles.profileHeader}>
      <ProfilePic img={data.image ? data.image : "https://picsum.photos/200/300.webp"} />
      <div className={styles.spacing}>
        <ProfileName name={data.userName} />
      </div>
      <div className={`${styles.follow} ${styles.spacing}`}>
        <span>
          <ProfileFollow counts={data.noOfFollowing} useCase="Following" />
        </span>
        <span className={styles.divider}>
          <div className={styles.border} />
        </span>

        <span>
          <ProfileFollow counts={data.noOfFollowers} useCase="Followers" />
        </span>
      </div>
      <div className={styles.spacing}>
        <ProfileBio bio={data.description} />
      </div>
      <div className={styles.spacing}>
        <ProfileTabs data={data.videoUploaded} />
      </div>
    </div>
  );
}
export default ProfileHeader;
