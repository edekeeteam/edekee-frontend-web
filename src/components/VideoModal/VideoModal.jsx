/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
// import React from "react";
import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import axios from "axios";
// import Backdrop from "../../common/components/Backdrop/Backdrop";
import styles from "./VideoModal.module.scss";
// import { ModalContext } from "../../context/ModalContext";
// import { useModalContext } from "../../context/ModalContext";
// import { useContext } from "react";
import VideoViewContainer from "../VideoViewContainer/VideoViewContainer";
// import Product from "../Product/Product";
import tabs from "../../data/tabsData";
import Comments from "../Comments/Comments";
import ProductDetails from "../ProductDetails/ProductDetails";
import VidModal from "../VidModal/VidModal";
import { useModalContext } from "../../context/ModalContext";
import Products from "../Products/Products";
import { useToastContext } from "../../context/ToastContext";
// import useGetComments from "../../hooks/comments/useGetComments";
// import Modal from "../Modal/Modal";
// import VidModal from "../VidModal/VidModal";
// import SignUp from "../Modals/SignUp";
// import ProductSpecs from "../ProductSpecs";
// import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";

// const dropIn = {
//   hidden: {
//     scale: 0.8,
//     opacity: 0,
//   },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500,
//     },
//   },
//   exit: {
//     scale: 0,
//     opacity: 0,
//   },
// };
function VideoModal() {
  // const { videoModalTabValue, setVideoModalTabValue } = useContext(ModalContext);

  const toast = useToastContext();
  const [videoModalTabValue, setVideoModalTabValue] = useState(0);
  const [comments, setComments] = useState([]);
  const { url, label, videoId } = useModalContext();
  // const {}
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  // if (!isLoading) {

  const fetchComments = () => {
    axios
      .get(
        `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/comments/${videoId}/video`,

        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setComments(res.data.data);
      });
  };
  // }
  const addComment = () => {
    setComments([...comments, value]);
    const params = {
      comment: value,
    };

    axios
      .post(
        `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/comments/${videoId}/video`,
        params,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        console.log(res);

        fetchComments();

        setValue("");
      });
    // console.log(value);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <VidModal>
      <VideoViewContainer setVideoModalTabValue={setVideoModalTabValue} src={url} json={label} />
      <div className={styles.tabSection}>
        <div className={styles.tabHeader}>
          {videoModalTabValue !== 2
            ? tabs.map((tab, index) => (
                <button
                  key={tab.tabHeader}
                  onClick={() => {
                    setVideoModalTabValue(index);
                  }}
                  className={`${styles.tab} ${index === videoModalTabValue && styles.underline}`}
                  type="button"
                  // onKeyDown={handleKeyDown()}
                  // role="button"
                  // tabIndex={0}
                >
                  {" "}
                  {tab.tabHeader}
                </button>
              ))
            : ""}
        </div>
        <div className={styles.tabBody}>
          {videoModalTabValue === 0 ? (
            // <Product changeVideoTab={setVideoModalTabValue} />
            <Products setVideoModalTabValue={setVideoModalTabValue} />
          ) : videoModalTabValue === 1 ? (
            <Comments comments={comments} />
          ) : videoModalTabValue === 2 ? (
            <ProductDetails />
          ) : (
            ""
          )}
          {/* <SignUp /> */}
          {/* {value === 0 ? (
              <Product />
            ) : value === 1 ? (
              //   <ProductSpecs... />
              <Comment />
            )} */}
        </div>
        {videoModalTabValue === 1 && (
          <div className={styles.addComment}>
            <div className={styles.emoji}>
              <img src="./icons/emoji.svg" alt="" />
            </div>
            <textarea
              name="comment"
              id="comment"
              placeholder="Type a comment"
              cols="2"
              rows="2"
              value={value}
              onChange={handleChange}
              className={styles.commentArea}
            />
            <p
              className={styles.sendIcon}
              onClick={() => {
                if (!localStorage.getItem("userId")) {
                  toast.open({ msg: "log in to add comment", type: "warning" });
                } else {
                  addComment();
                }
              }}
            >
              <img src="./icons/sendIcon.svg" alt="" />
            </p>
          </div>
        )}
      </div>
    </VidModal>
  );
}

export default VideoModal;
