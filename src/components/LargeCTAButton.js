import React from "react";
import { ArrowRight } from "react-feather";
import styles from "./LargeCTAButton.module.scss";

const LargeCTAButton = (props) => {
  return (
    <div className={styles.desktopPdfLink}>
      <p className={styles.buttonLabel}>{props.title}</p>
      <ArrowRight className={styles.iconArrowRight} />
    </div>
  );
};

export default LargeCTAButton;
