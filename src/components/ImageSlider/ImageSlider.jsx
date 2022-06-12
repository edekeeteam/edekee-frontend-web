import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./ImageSlider.module.scss";

// eslint-disable-next-line react/prop-types,no-unused-vars
function ImageSlider({ imagesSlides, deleteImage, addImage, prevStep }) {
  // eslint-disable-next-line react/prop-types
  const images = imagesSlides.length;
  const [slideIndex, setSlideIndex] = useState(1);
  const inputRef = useRef(null);

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

  const handleDeleteImage = (prev) => {
    deleteImage(slideIndex - 1);
    if (slideIndex <= 1 && images === 1) {
      prev();
    } else {
      prevSlide();
    }
  };

  const handleAddImage = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    addImage(e);
  };

  return (
    <div className={styles.imageSlider}>
      <div className={styles.containerSlider}>
        {/* eslint-disable-next-line react/prop-types */}
        {imagesSlides.map((obj, index) => (
          <div
            key={obj.key}
            className={
              slideIndex === index + 1 ? `${styles.slide} ${styles.activeAnim}` : `${styles.slide}`
            }
          >
            <img src={URL.createObjectURL(obj)} alt="new" />
          </div>
        ))}
        {/* <BtnSlider moveSlide={nextSlide} direction={"next"} /> */}
        {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}
      </div>
      <div className={styles.buttons}>
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <div
          className={`${styles.left} ${styles.iconBackground}`}
          onClick={prevSlide}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={`${process.env.PUBLIC_URL}/icons/Chevron.svg`} alt="upload" />
        </div>
        {/* eslint-disable-next-line react/button-has-type,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <div
          className={`${styles.right} ${styles.iconBackground}`}
          onClick={nextSlide}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={`${process.env.PUBLIC_URL}/icons/Chevron.svg`} alt="upload" />
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.inner}>
          {/* eslint-disable-next-line react/prop-types */}

          {/* eslint-disable-next-line react/prop-types */}
          <div style={{ width: `${(100 / images) * slideIndex}%` }} className={styles.bar}>
            <div />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div
          className={`${styles.iconBackground} ${styles.delete}`}
          onClick={() => handleDeleteImage(prevStep())}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
        </div>
        <div
          className={`${styles.iconBackground} ${styles.add}`}
          onClick={handleAddImage}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <input
            ref={inputRef}
            accept=".jpg, .jpeg, .png, .svg"
            type="file"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <img src={`${process.env.PUBLIC_URL}/icons/addIcon.svg`} alt="" />
        </div>
      </div>
    </div>
  );
}

ImageSlider.propsType = {
  imagesSlides: PropTypes.array,
  prevStep: PropTypes.func.isRequired,
};

export default ImageSlider;
