import React, { useState } from "react";
import styles from "./Footer.module.css";
import skyDown from "../MainInformation/imgMainInformation/sky1.png";

const Footer = () => {
  const [phone, setPhone] = useState("");

  const handleInputChange = (event) => {
    setPhone(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const botToken = "6469076307:AAEhjy9mYCtHg6txoLXGU-G1qzoSzLILbKY";
    const chatId = "@Bot_APIQ";

    const messageText = `Новый заказ! Телефон: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: messageText,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        console.log("Сообщение успешно отправлено!");
      } else {
        console.error(
          `Ошибка при отправке сообщения: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
    setPhone("");
  };

  return (
    <footer className={styles.footer}>
      <img src={skyDown} alt="" />
      <section className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.textContent}>
            <h2 className={styles.h2}>
              Чтобы сделать заказ, укажите ваш телефон
            </h2>
            <h3 className={styles.h3}>
              Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
            </h3>
            <form onSubmit={sendMessage} className={styles.form}>
              <div className={styles.phoneInputWrapper}>
                <input
                  onChange={handleInputChange}
                  type="tel"
                  value={phone}
                  className={styles.inputNumber}
                  placeholder={phone ? "" : "Номер телефона"}
                />
                <button type="submit" className={styles.button}>
                  Сделать заказ
                </button>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className={styles.checkbox}
                />
                <label htmlFor="myCheckbox" className={styles.checkboxLabel}>
                  Нажимая на кнопку, вы соглашаетесь с условиями обработки
                  персональных данных
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.wrapperUl}>
          <ul className={styles.ul}>
            <li className={styles.footerText}>Согласие на обработку данных</li>
            <li className={styles.footerText}>Служба поддержки</li>
            <li className={styles.footerText}>Политика конфиденциальности</li>
          </ul>
          <span className={styles.footerText}>
            © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН
            0000000000000
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
