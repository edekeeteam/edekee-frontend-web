/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

import styles from "./ProfileHeader.module.scss";

// components
import ProfilePic from "../ProfilePic/ProfilePic";
import ProfileName from "../ProfileName/ProFileName";
import ProfileFollow from "../ProfileFollow/ProfileFollow";
import ProfileBio from "../ProfileBio/ProfileBio";
import ProfileTabs from "../ProfileTabs/ProfileTabs";
// components

// "https://picsum.photos/200/300.webp"

function ProfileHeader({ data }) {
  const { userId } = useParams();

  return (
    <div className={styles.profileHeader}>
      {/* {isCurrentUser && <p>This is current user</p>} */}

      {userId === data.data.id && <p>This is current user</p>}
      <ProfilePic img={data.data.image ? data.data.image : "https://picsum.photos/200/300.webp"} />
      <div className={styles.spacing}>
        <ProfileName name={data?.data?.userName} />
      </div>
      <div className={`${styles.follow} ${styles.spacing}`}>
        <span>
          <ProfileFollow counts={data?.data?.noOfFollowing} useCase="Following" />
        </span>
        <span className={styles.divider}>
          <div className={styles.border} />
        </span>

        <span>
          <ProfileFollow counts={data?.data?.noOfFollowers} useCase="Followers" />
        </span>
      </div>
      <div className={styles.spacing}>
        <ProfileBio bio={data?.data?.description} />
      </div>
      <div className={styles.spacing}>
        <ProfileTabs data={data?.data?.videoUploaded} />
      </div>
    </div>
  );
}
export default ProfileHeader;
