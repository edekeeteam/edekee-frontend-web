import React from "react";
import styles from "./ProfileHeader.module.scss";
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfileName from "../ProfileName/ProFileName";
import ProfileFollow from "../ProfileFollow/ProfileFollow";
import ProfileBio from "../ProfileBio/ProfileBio";

export default function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <ProfilePic img="https://picsum.photos/200/300.webp" />
      <div className={styles.spacing}>
        <ProfileName name="Mike Williams" />
      </div>
      <div className={`${styles.follow} ${styles.spacing}`}>
        <span>
          <ProfileFollow counts="100" useCase="Following" />
        </span>
        <span className={styles.divider}>
          <div className={styles.border} />
        </span>

        <span>
          <ProfileFollow counts="500" useCase="Followers" />
        </span>
      </div>
      <div className={styles.spacing}>
        <ProfileBio />
      </div>
    </div>
  );
}
