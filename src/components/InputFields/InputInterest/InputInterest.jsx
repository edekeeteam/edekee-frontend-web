import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import styles from "./InputInterest.module.scss";
import "react-loading-skeleton/dist/skeleton.css";
// import Skeleton from "../../SkeletonScreen/Skeleton/Skeleton";

// eslint-disable-next-line react/prop-types
const checkActiveState = (x, id) => (x.includes(id) ? styles.active : "");
// eslint-disable-next-line react/prop-types
function InputInterest({ name, id, image, checkedInterestsState, handleOnChange, index }) {
  const [showImage, setShowImage] = useState(false);
  return (
    <motion.div
      className={`${styles.interest} `}
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
    >
      <div
        className={`${styles.highlight}
        ${checkActiveState(checkedInterestsState, id)}`}
      >
        <div className={`${styles.size} ${styles.active}`}>
          {/* // key={props.index} */}
          <input
            style={{ opacity: 0 }}
            type="checkbox"
            id={id}
            name={name}
            value={id}
            checked={checkedInterestsState[id]}
            onChange={() => handleOnChange(id)}
          />
          {/* <Skeleton type="interest" /> */}
          <img
            className={`${showImage && styles.show}`}
            src={image}
            alt={name}
            onLoad={() => {
              // console.log("loaded");
              setShowImage(true);
            }}
            // style={{ display: "none" }}
          />

          <Skeleton
            circle
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              display: showImage ? "none" : "block",
            }}
          />
          {/* <div className={styles.shim} /> */}

          <p>{name}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default InputInterest;
