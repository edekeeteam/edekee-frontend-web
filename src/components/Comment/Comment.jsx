import React from "react";
import styles from "./Comment.module.scss";

function Comment() {
  return (
    <div className={styles.comment}>
      <div className={styles.commentWrapper}>
        <div className={styles.commentLeft}>
          <div className={styles.profilePicture} />
        </div>

        <div className={styles.commentRight}>
          <div className={styles.commentRightText}>
            <p className={styles.commentProfileName}>Winner_boy</p>
            <p className={styles.commentMainComment}>Nice one </p>
            <p className={styles.commentReplyText}>reply</p>
          </div>
          <div>
            <img src="./icons/likeIcon.svg" alt="" className={styles.likeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
