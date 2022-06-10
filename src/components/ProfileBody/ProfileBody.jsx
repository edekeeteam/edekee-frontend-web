import React from "react";
import ProfileTabs from "../ProfileTabs/ProfileTabs";
import styles from "./ProfileBody.module.scss";

function ProfileBody() {
  return (
    <div className={styles.profileBody}>
      <span className={styles.spacing}>
        <ProfileTabs />
      </span>
    </div>
  );
}

export default ProfileBody;
