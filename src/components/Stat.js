import React from "react";
import styles from "./Stat.module.scss";

const Stat = props => {
  return (
    <div className={styles.desktopStat}>
      <div className={styles.container}>
        {props.stat.icon && (
          <img alt="" className={styles.statIcon} src={props.stat.icon} />
        )}
        <p className={styles.title}>{props.stat.title}</p>
      </div>
      <p className={styles.subtitle}>{props.stat.subtitle}</p>
    </div>
  );
};

export default Stat;
