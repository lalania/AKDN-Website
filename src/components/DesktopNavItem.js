import React from "react";
import styles from "./DesktopNavItem.module.scss";
import Logo from "./Logo.js";
import { Search, Globe } from "react-feather";

const DesktopNavItem = ({
  label = "",
  showLogo = false,
  showSearch = false,
  showLanguagePicker = false,
  slug = "",
  submenu = []
}) => {
  console.log(submenu);
  return (
    <div className={styles.navItem}>
      <a className={styles.mainLink} href={"/" + slug}>
        <p className={styles.label}>{label}</p>
        {showLogo && <Logo className={styles.logo} />}
        {showSearch && <Search className={styles.icon} />}
        {showLanguagePicker && (
          <div className={styles.languageItem}>
            <Globe className={styles.icon} />
            <p className={styles.label}>EN</p>
          </div>
        )}
      </a>

      {submenu.length > 0 && (
        <div className={styles.dropDown}>
          {submenu.map(submenuItem => {
            return (
              <div>
                {submenuItem.isSectionTitle && (
                  <div className={styles.sectionTitle}>
                    {submenuItem.title}
                    <div className={styles.sectionSeparator} />
                  </div>
                )}
                {submenuItem.isSectionTitle &&
                  submenuItem.children.length > 0 &&
                  submenuItem.children.map(submenuItem2 => {
                    return (
                      <a
                        className={styles.subMenuItem}
                        href={"/" + slug + "/" + submenuItem2.link.slug}
                      >
                        {submenuItem2.title}
                      </a>
                    );
                  })}
                {!submenuItem.isSectionTitle && (
                  <a
                    className={styles.subMenuItem}
                    href={"/" + slug + "/" + submenuItem.link.slug}
                  >
                    {submenuItem2.title}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DesktopNavItem;
