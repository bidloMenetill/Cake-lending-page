import React from "react";
import styles from "./MainContentFromInstargam.module.css";

import { instagramCakes } from ".";
const MainContentFromInstargam = () => {
  return (
    <div className={styles.rootMainContentFromInstargam}>
      <section className={styles.container}>
        <div className={styles.innerMainContentFromInstargam}>
          <h2 className={styles.h2}>Сделали более 3.000 заказов за 2 года</h2>
          <h3 className={styles.h3}>
            Посмотрите фото реальных заказов из нашего instagram
          </h3>

          <div className={styles.rootEat}>
            {instagramCakes?.map((el) => (
              <div className={styles.eatWrapper}>
                <img src={el} alt="" className={styles.eatImg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContentFromInstargam;
