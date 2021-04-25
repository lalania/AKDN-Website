import React from "react";
//import { SeeMore } from "components";
import styles from "./InfoBlock.module.scss";

const InfoBlock = props => {
  var sections = [];
  if (props.data.subtitle1)
    sections.push({ title: props.data.subtitle1, body: props.data.body1 });
  if (props.data.subtitle2)
    sections.push({ title: props.data.subtitle2, body: props.data.body2 });
  if (props.data.subtitle3)
    sections.push({ title: props.data.subtitle3, body: props.data.body3 });
  if (props.data.subtitle4)
    sections.push({ title: props.data.subtitle4, body: props.data.body4 });

  return (
    <div className={styles.infoBlock}>
      <p className={styles.title}>{props.data.title}</p>

      {sections.length > 0 &&
        sections.map(section => {
          return (
            <div className={styles.contentBlock}>
              <p className={styles.subtitle}>{section.title}</p>
              <div className={styles.body}>
                <p className={styles.bodyText}>{section.body}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default InfoBlock;
