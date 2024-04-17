import React from "react";
import mapImg from "./headerImg/map.svg";
import styles from "./Header.module.css";
import phoneImg from "./headerImg/phone.png.jpg";
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={`${styles.container} ${styles.headerWrapper}`}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.menuLinkOwner}>
            <li>Филиал А.А. Джеенбекова</li>
          </a>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li className={`${styles.menuItemImg} ${styles.menuItem}`}>
                <a href="#">
                  <img src={mapImg} alt="map" className={styles.mapImg} />
                </a>
              </li>
              <li className={`${styles.menuItem2} ${styles.menuItem}`}>
                <a href="#" className={styles.menuLinkMap}>
                  г. Бишкек, <br />
                  ул. мкр/Кок Жар 23/2
                </a>
              </li>
              <li className={`${styles.menuItem3} ${styles.menuItem}`}>
                <img
                  src={phoneImg}
                  alt="phone"
                  className={styles.menuItemImg2}
                />
                <a href="tel:+996222299801" className={styles.menuLinkPhone}>
                  +996 (222)29801
                  <br />
                  <span className={styles.shedulerSpan}>
                    Ежедневно с 9:00 до 20:00
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
