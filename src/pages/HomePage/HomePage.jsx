import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <section className={css.hero}>
        <div className={css.container}>
          <div className={css.title}>
            <p className={css.text}>
              В умовах сучасних викликів, з якими стикається наша країна,
              волонтерські організації стають важливими опорами для суспільства.
              Однією з таких ініціатив є Благодійний фонд «Волонтерський Рух
              Оберіг», що активно працює на благо українського народу.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
