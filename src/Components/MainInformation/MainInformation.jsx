import React from "react";
import styles from "./MainInformation.module.css";
import skyUpper from "./imgMainInformation/sky1.png";
import skyDown from "./imgMainInformation/sky2.png";
import leaf from "./imgMainInformation/leaf.jpg";
import phone from "./imgMainInformation/phone.jpg";
import berry from "./imgMainInformation/berry.jpg";

const MainInformation = () => {
  return (
    <div className={styles.rootMainInformation}>
      <img src={skyUpper} alt="" className={styles.imgSkyUpper} />
      <section className={styles.container}>
        <div className={styles.mainInformationInner}>
          <div className={styles.mainInformationContent}>
            <button className={styles.infoButton}>
              Не нашли то что нужно?
            </button>
            <h4 className={styles.mainInformationH4}>
              Приготовим заказ <br /> любой сложности <br /> по фото или эскизу
            </h4>
            <p className={styles.mainInformationP}>
              Загрузите фотографию или эскиз капкейков <br /> и мы рассчитаем
              стоимость за 30 минут
            </p>
            <a href="">
              <button className={styles.clickButton}>
                Загрузить фотографию
              </button>
            </a>
          </div>
        </div>
      </section>
      <img src={berry} className={styles.berryImg} alt="" />
      <img src={phone} className={styles.phoneImg} alt="" />
      <img src={leaf} className={styles.leafImg} alt="" />

      <img src={skyDown} alt="" className={styles.imgSkyDown} />
    </div>
  );
};

export default MainInformation;
