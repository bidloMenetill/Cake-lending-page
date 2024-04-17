import React from "react";
import styles from "./MainCustomerReviews.module.css";
import skyUpper from "../MainInformation/imgMainInformation/sky1.png";
import woman from "./imgCustomerReviews/imgwoman.png";
import quotes from "./imgCustomerReviews/quotes.svg";
import arrowRight from "./imgCustomerReviews/Arrow-right.svg";
import arrowLeft from "./imgCustomerReviews/Arrow-left.svg";
import skyDown from "../MainInformation/imgMainInformation/sky2.png";
import ilonMask from "./imgCustomerReviews/images.jpg";
const MainCustomerReviews = () => {
  return (
    <div className={styles.rootMainCustomerReviews}>
      <img src={skyUpper} alt="" />

      <section className={styles.container}>
        <div className={styles.innerMainCustomerReviews}>
          <h2 className={styles.h2}>Почитайте отзывы довольных клиентов</h2>

          <div className={styles.reviewsWrapper}>
            <div className={styles.textSectionWrapper}>
              <img src={quotes} alt="" />
              <h3 className={styles.h3}>
                «Результат дико порадовал, друзья были в восторге»
              </h3>
              <p className={styles.p}>
                «Заказала капкейки, как подарок на новый год. Делать <br />
                заказ было легко и приятно, ну а результат дико <br />
                порадовал, друзья были в восторге. И оформление, <br /> и на
                вкус капкейки были просто замечательные. <br /> Обязательно буду
                заказывать еще Уже строю планы, <br /> чтобы попробовать все
                начинки. Они восхитительны! <br />
                Даже кушать было жалко, такая красота!
              </p>
              <a className={styles.a} href="">
                Читать отзыв полностью
              </a>
            </div>
            <div className={styles.imgSectionWrapper}>
              <img src={woman} alt="" />
              <h4 className={styles.h4}>Ирина Ларионова</h4>
              <li className={styles.li}>Санкт-Петербург</li>
            </div>
          </div>
          <div className={styles.arrowContainer}>
            <img src={arrowLeft} alt="" className={styles.arrowLeft} />
            <img src={arrowRight} alt="" className={styles.arrowRight} />
          </div>
        </div>
      </section>

      <img src={skyDown} alt="" className={styles.skyUp} />
    </div>
  );
};
export default MainCustomerReviews;
