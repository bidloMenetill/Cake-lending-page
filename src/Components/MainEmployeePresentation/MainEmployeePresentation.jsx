import React from "react";
import styles from "./MainEmployeePresentation.module.css";

import woman from "./ImgMainEmployeePresentation/woman.png";
import woman2 from "./ImgMainEmployeePresentation/woman1.png";

const MainEmployeePresentation = () => {
  return (
    <div className={styles.rootMainEmployeePresentation}>
      <section className={styles.container}>
        <div className={styles.innerMainEmployeePresentation}>
          <div className={styles.infoWrapper}>
            <button className={styles.buttonAnswer}>Кто будет готовить?</button>
            <h2 className={styles.employeePresentationH2}>
              Лично приготовлю <br /> и всё красиво упакую <br /> для вашего
              события
            </h2>
            <p className={styles.employeePresentationP}>
              Проконсультирую по выбору капкейкови <br />
              придумаю нестандартную идею
            </p>
            <p className={styles.employeePresentationP}>
              Приготовлю капкейки для вашего события, <br /> которые обязательно
              всем понравятся
            </p>
            <p className={styles.employeePresentationP}>
              Аккуратно и красиво всё упакую, если <br />
              вы хотите сделать приятный подарок
            </p>{" "}
            <button className={styles.buttonEmployee}>
              Задать вопрос Юлии
            </button>
          </div>
          <div className={styles.initialsWrapper}>
            <div className={styles.doubleImgWrapper}>
              <img src={woman} alt="employee" className={styles.womanImg} />
            </div>

            <img src={woman2} className={styles.woman2} alt="employee" />
            <div className={styles.wrapperCircleText}>
              <h3 className={styles.employeeCircleH3}>Юлия Кондратьева</h3>
              <p className={styles.employeeCircleP}>ваш кондитер</p>
            </div>
            <div className={styles.circleWrapper}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainEmployeePresentation;
