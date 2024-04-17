import React from "react";
import styles from "./MainCatalog.module.css";
import { motion } from "framer-motion";
import { catalog } from "./Catalog";
import MainInformation from "../MainInformation/MainInformation";
import MainEmployeePresentation from "../MainEmployeePresentation/MainEmployeePresentation";
import MainCustomerReviews from "../MainCusomerReviews/MainCustomerReviews";
import skyUpper from "../MainInformation/imgMainInformation/sky1.png";
import MainContentFromInstargam from "../MainContentFromInstargam/MainContentFromInstargam";
import SwiperCore, { Navigation } from "swiper"; // Import SwiperCore and Navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import skyDown from "../MainInformation/imgMainInformation/sky2.png";

const sectionAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const MainCatalog = () => {
  return (
    <main>
      <motion.section
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
        className={styles.container}
        custom={1}
      >
        <div className={styles.mainCatalogInner}>
          <motion.h2
            custom={2}
            variants={sectionAnimation}
            className={styles.mainCatalogH2}
          >
            Для любых событий и дорогих вам людей
          </motion.h2>
        </div>
        <motion.section
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className={styles.catalogWrapper}
        >
          {catalog?.map((element, index) => (
            <div className={styles.cakeInner} key={index}>
              <img src={element.img} alt="cake" className={styles.imgCake} />
              <div className={styles.infoWrapperCake}>
                <h4 className={styles.nameCake}>{element.name}</h4>
                <p className={styles.titleCake}>{element.title}</p>
                <p className={styles.priceCake}>150 ₽/шт. </p>
                <a href="#">
                  <button className={styles.linkButtonCake}>Заказать</button>
                </a>
              </div>
            </div>
          ))}
        </motion.section>
      </motion.section>
      <MainInformation />
      <MainEmployeePresentation />

      <MainCustomerReviews />

      <MainContentFromInstargam />
    </main>
  );
};

export default MainCatalog;
