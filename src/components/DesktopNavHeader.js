import React from "react";
import DesktopNavItem from "./DesktopNavItem.js";
import styles from "./DesktopNavHeader.module.scss";
import { useQuery } from "graphql-hooks";

const NAV_BAR_QUERY = `query NavBar {
  allHeaders(filter: {parent: {exists: false}}) {
    title
    isSectionTitle
    position
    link {
      slug
    }
    children {
      title
      position
      isSectionTitle
      link {
        slug
      }
      children {
        isSectionTitle
        title
        position
        link {
          slug
        }
      }
    }
  }
}`;

const DesktopNavHeader = () => {
  const { loading, error, data } = useQuery(NAV_BAR_QUERY, {
    variables: {
      limit: 10
    }
  });
  if (loading) return "";
  if (error) return "Something Bad Happened";

  return (
    <div className={styles.desktopNavHeader}>
      <DesktopNavItem label="" showLogo={true} />
      <div className={styles.frame1}>
        {data.allHeaders.map(navItem => {
          console.log(navItem);
          return (
            <DesktopNavItem
              label={navItem.title}
              slug={navItem.link.slug}
              submenu={navItem.children}
            />
          );
        })}
      </div>
      <div className={styles.frame1}>
        <DesktopNavItem showSearch={true} />
        <DesktopNavItem showLanguagePicker={true} />
      </div>
    </div>
  );
};

export default DesktopNavHeader;
