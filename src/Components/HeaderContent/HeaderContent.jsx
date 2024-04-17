import React from "react";
import styles from "./HeaderContent.module.css";
import { motion } from "framer-motion";
import berry1 from "./imgHeaderContent/berry1.png";
import berry2 from "./imgHeaderContent/berry2.png";
import berry3 from "./imgHeaderContent/berry3.png";
// {styles.}
const sectionAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const HeaderContent = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.main}
    >
      <section className={styles.container}>
        <div className={styles.headerContentInner}>
          <button className={styles.buttonDelicious}>Вкуснейшие</button>
          <div className={styles.wrapperHeadline}>
            <motion.h1
              custom={1}
              variants={sectionAnimation}
              className={styles.headerContentH1}
            >
              Пирожные и капкейки <br />
              от 150 ₽/шт. с доставкой
              <br /> по Санкт Петербургу
            </motion.h1>
            <motion.h3
              custom={2}
              variants={sectionAnimation}
              className={styles.headerContentH3}
            >
              Приготовим за 3 часа в день заказа. <br /> Доставка на авто в
              холодильнике.
            </motion.h3>
          </div>
          <div className={styles.linkWrapper}>
            <a href="#">
              <button className={styles.linkButton}>Перейти в каталог</button>
            </a>

            <p className={styles.headerContentP}>
              9 различных <br /> видов на выбор
            </p>
          </div>
        </div>
        <img src={berry1} alt="" className={styles.imgBerry1} />
        <img src={berry2} alt="" className={styles.imgBerry2} />
        <img src={berry3} alt="" className={styles.imgBerry3} />
      </section>
    </motion.section>
  );
};

export default HeaderContent;
