import React from "react";
import Stat from "./Stat.js";
import styles from "./StatsGroup.module.scss";

const StatsGroup = props => {
  return (
    <div className={styles.desktopStats}>
      {props.stats.map(stat => {
        return (
          <div className={styles.statContainer}>
            <Stat className={styles.desktopStat} stat={stat} />
            <div className={styles.verticalDivider} />
          </div>
        );
      })}
    </div>
  );
};

export default StatsGroup;
