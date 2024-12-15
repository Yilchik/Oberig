import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import logoImage from "../../assets/logoDoloni.png";
import { GrClose } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <div className={css.navig}>
          <NavLink to="/">
            <img src={logoImage} alt="Logo" className={css.logo} />
          </NavLink>
          <div className={css.headerText}>
            <h1>Благодійний Фонд "Волонтерський рух Оберіг"</h1>
            <p className={css.titel}>
              "Тільки тим історія належить, хто сьогодні бореться й живе"{" "}
              <span className={css.titelAvtor}>(В. Симоненко)</span>
            </p>
          </div>
          <button type="button" className={css.btnMenu} onClick={toggleMenu}>
            <IoIosMenu className={css.icon} />
          </button>
        </div>
        <div
          className={clsx(css.modalHeader, isMenuOpen && css.isOpen)}
          onClick={closeMenu}
        >
          <div className={css.headerMenu} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={css.btnClose} onClick={closeMenu}>
              <GrClose className={css.icon} />
            </button>
            <div className={css.navMenu}>
              <NavLink to="/" className={buildLinkClass} onClick={closeMenu}>
                Головна
              </NavLink>
              <NavLink
                to="/history"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Історія створення
              </NavLink>
              <NavLink
                to="/activity"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Діяльність фонду
              </NavLink>
              <NavLink
                to="/help"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Як допомогти?
              </NavLink>
              <NavLink
                to="/gratitude"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Подяки
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
