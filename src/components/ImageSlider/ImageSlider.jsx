import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";
// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'

// eslint-disable-next-line react/prop-types
export default function ImageSlider({ dataSlider: imagesSlides }) {
  // eslint-disable-next-line react/prop-types
  const images = imagesSlides.length;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    // eslint-disable-next-line react/prop-types
    if (slideIndex !== images) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <div className={styles.imageSlider}>
      <div className={styles.containerSlider}>
        {/* eslint-disable-next-line react/prop-types */}
        {imagesSlides.map((obj, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div
            key={obj}
            className={
              slideIndex === index + 1 ? `${styles.slide} ${styles.activeAnim}` : `${styles.slide}`
            }
          >
            <img src={obj} alt="new" />
          </div>
        ))}
        {/* <BtnSlider moveSlide={nextSlide} direction={"next"} /> */}
        {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}
      </div>
      <div className={styles.buttons}>
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <p onClick={prevSlide}>Previous</p>
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <p onClick={nextSlide}>Next</p>
      </div>
    </div>
  );
}
