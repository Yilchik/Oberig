import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logoImage from "../../assets/heart.jpg";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => (
  <div className={css.header}>
    <nav className={css.nav}>
      <NavLink to="/">
        <img src={logoImage} alt="Logo" className={css.logo} />
      </NavLink>
      <div className={css.headerText}>
        <h1>Благодійний Фонд "Волонтерський рух Оберіг"</h1>
        <p className={css.titel}>
          "Тільки тим історія належить, хто сьогодні бореться й живе"{" "}
          <span className={css.titelAvtor}>(В. Симоненко)</span>
        </p>
        <div className={css.navigation}>
          <NavLink to="/" className={buildLinkClass}>
            Головна
          </NavLink>
          <NavLink to="/history" className={buildLinkClass}>
            Історія створення
          </NavLink>
          <NavLink to="/activity" className={buildLinkClass}>
            Діяльність фонду
          </NavLink>
          <NavLink to="/help" className={buildLinkClass}>
            Як допомогти?
          </NavLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
