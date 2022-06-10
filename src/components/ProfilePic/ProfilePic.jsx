import React from "react";
import styles from "./ProfilePic.module.scss";

// eslint-disable-next-line react/prop-types
export default function ProfilePic({ img, size }) {
  return (
    <div className={styles.profilePic}>
      <div className={`${styles.imgContainer} ${size === "small" && styles.small}`}>
        <img src={img} alt="" />
        <div className={`${styles.uploadContainer} ${size === "small" && styles.small}`}>
          <svg
            width={size === "small" ? "20" : "30"}
            height={size === "small" ? "16" : "26"}
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.1759 10.6574V29.103C2.1759 31.6498 4.2405 33.7144 6.78731 33.7144H32.9186C35.4654
                         33.7144 37.53 31.6498 37.53 29.103V10.6574C37.53 8.11056 35.4654 6.04597 32.9186
                         6.04597H30.9859C29.7629 6.04597 28.5899 5.56012 27.7251 4.69532L26.5836 3.55378C25.7188 2.68897 24.5459
                         2.20312 23.3228 2.20312H16.1426C15.0638 2.20312 14.0191 2.58133 13.1904 3.27195L11.1442 4.97714C10.3154
                         5.66776 9.2708 6.04597 8.19202 6.04597H6.78731C4.2405 6.04597 2.1759 8.11056 2.1759 10.6574Z"
              stroke="url(#paint0_linear_954_257)"
              strokeWidth="3.07427"
            />
            <circle
              cx="19.8529"
              cy="19.88"
              r="6.91711"
              stroke="url(#paint1_linear_954_257)"
              strokeWidth="3.07427"
            />
            <defs>
              <linearGradient
                id="paint0_linear_954_257"
                x1="3.71304"
                y1="6.81453"
                x2="35.9929"
                y2="33.7144"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7630FA" />
                <stop offset="1" stopColor="#EB826B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_954_257"
                x1="14.4729"
                y1="14.5"
                x2="26.0014"
                y2="25.26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7630FA" />
                <stop offset="1" stopColor="#EB826B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
