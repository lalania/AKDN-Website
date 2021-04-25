import React from "react";
import StatsGroup from "./StatsGroup.js";
import LargeCTAButton from "./LargeCTAButton.js";
import styles from "./PrimaryInfoBlock.module.scss";

const PrimaryInfoBlock = props => {
  console.log(props);

  var stats = [];
  if (props.data.infoBlockStat1)
    stats.push({
      title: props.data.infoBlockStat1,
      subtitle: props.data.infoBlockStat1Subtitle,
      icon: props.data.infoBlockStat1Icon
    });
  if (props.data.infoBlockStat2)
    stats.push({
      title: props.data.infoBlockStat2,
      subtitle: props.data.infoBlockStat2Subtitle,
      icon: props.data.infoBlockStat2Icon
    });
  if (props.data.infoBlockStat3)
    stats.push({
      title: props.data.infoBlockStat3,
      subtitle: props.data.infoBlockStat3Subtitle,
      icon: props.data.infoBlockStat3Icon
    });

  return (
    <div className={styles.desktopMainInfo}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>{props.data.title}</p>
          <div className={styles.body}>
            <p className={styles.bodyText}>{props.data.body}</p>
          </div>
        </div>
        <StatsGroup className={styles.desktopStats} stats={stats} />

        {props.data.ctaTitle && props.data.ctaLink && (
          <div className={styles.frame85}>
            <LargeCTAButton
              title={props.data.ctaTitle}
              url={props.data.ctaLink}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimaryInfoBlock;
