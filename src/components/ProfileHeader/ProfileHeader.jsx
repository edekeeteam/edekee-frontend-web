/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";

import styles from "./ProfileHeader.module.scss";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "../Button/Button";
import ProfileName from "../ProfileName/ProFileName";
import ProfileFollow from "../ProfileFollow/ProfileFollow";
import ProfileBio from "../ProfileBio/ProfileBio";
// import ProfileTabs from "../ProfileTabs/ProfileTabs";

// "https://picsum.photos/200/300.webp"

function ProfileHeader({ data }) {
  const { userId } = useParams();

  return (
    <div className={styles.profileHeader}>
      {/* {isCurrentUser && <p>This is current user</p>} */}

      <ProfilePic img={data.data.image ? data.data.image : "https://picsum.photos/200/300.webp"} />
      <div className={styles.spacing}>
        <ProfileName name={data.data.userName} />
      </div>
      <div className={`${styles.follow} ${styles.spacing}`}>
        <span>
          <ProfileFollow counts={data.data.noOfFollowing} useCase="Following" />
        </span>
        <span className={styles.divider}>
          <div className={styles.border} />
        </span>

        <span>
          <ProfileFollow counts={data.data.noOfFollowers} useCase="Followers" />
        </span>
      </div>
      {userId === data.data.id && (
        <div className={styles.spacing}>
          <Button label="Edit Profile" bgcolor="white" size="small" />
        </div>
      )}
      {/* <div className={styles.spacing}>
        <Button label="Edit Profile" bgcolor="white" size="small" />
      </div> */}
      <div className={styles.spacing}>
        <ProfileBio bio={data.data.description} />
      </div>
      {/* <div className={styles.spacing}>
        <ProfileTabs data={data.data.videoUploaded} />
      </div> */}
    </div>
  );
}
export default ProfileHeader;
