import React from "react";
import styles from "./Carousel.module.scss";
import LargeCTAButton from "./LargeCTAButton.js";

const Carousel = props => {
  console.log(props.data);
  return (
    <div className={styles.carousel}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{props.data.title}</p>
          <div className={styles.spacer} />
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.subtitle}>{props.data.subtitle}</p>
          <div className={styles.CTAButton}>{props.data.ctaButtonLabel}</div>
        </div>
      </div>
      <video
        className={styles.video}
        src={props.data.media.video.mp4Url}
        autoplay="autoplay"
        preload="preload"
        playsinline="playsinline"
        muted
        loop
      />
      <div className={styles.overlay} />
    </div>
  );
};

export default Carousel;
