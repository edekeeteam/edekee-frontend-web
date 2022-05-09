import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ImageSlider.module.scss";

// eslint-disable-next-line no-use-before-define
ImageSlider.propsType = {
  imagesSlides: PropTypes.array.isRequired,
};

// eslint-disable-next-line react/prop-types
function ImageSlider({ imagesSlides }) {
  // eslint-disable-next-line react/prop-types
  const images = imagesSlides.length;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
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

export default ImageSlider;
