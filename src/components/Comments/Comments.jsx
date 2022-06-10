/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Comment from "../Comment/Comment";
import styles from "./Comments.module.scss";

function Comments() {
  return (
    <div className={styles.commentsTab}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

      {/* <div className={styles.addComment}>
        <div className={styles.emoji}>UI</div>
        <textarea name="comment" id="comment" cols="2" rows="2" className={styles.commentArea}>
          comment
        </textarea>
        <p className={styles.sendIcon}>S</p>
      </div> */}
    </div>
  );
}

export default Comments;
