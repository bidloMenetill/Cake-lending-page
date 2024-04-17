import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import MainCatalog from "./Components/MainCatalog/MainCatalog";

const App = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.backgroundSection}>
        <Header />
        <HeaderContent />
      </div>
      <MainCatalog />
      <Footer />
    </section>
  );
};

export default App;
