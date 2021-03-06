/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useState } from "react";
// import axios from "axios";
// import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
// import { useModalContext } from "../../context/ModalContext";
import Comment from "../Comment/Comment";
import styles from "./Comments.module.scss";
// import useGetComments from "../../hooks/comments/useGetComments";

function Comments({ comments }) {
  // const { videoId } = useModalContext();

  // const { data, isLoading } = useGetComments(videoId);

  // if (!isLoading) {
  console.log(comments);
  // setComments(data.data)
  return (
    <div className={styles.commentsTab}>
      {comments &&
        comments.map((comment) => (
          <Comment key={uuidv4()} comment={comment.Comment} username={comment.Username} />
        ))}
    </div>
  );
}

export default Comments;
