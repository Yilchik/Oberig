import css from "./Bank.module.css";
import hryvniaImage from "../../assets/hryvnia.jpg";
import fuelImage from "../../assets/fuel.jpg";

import { TbPigMoney } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const Bank = () => (
  <section className={css.container}>
    <div className={css.infoText}>
      <p className={css.text}>
        Благодійний фонд «Волонтерський Рух Оберіг» завжди відкритий для нових
        волонтерів і донорів.
      </p>
      <p className={css.text}>
        Є кілька способів, якими ви можете підтримати фонд:
      </p>
      <ul className={css.listUl}>
        <li className={css.list}>
          Фінансова підтримка: ви можете перерахувати кошти на рахунок фонду або
          взяти участь у зборі коштів.
        </li>
        <li className={css.list}>
          Матеріальна допомога: Продукти, одяг, ковдри , медикаменти – все це
          може стати в нагоді.
        </li>
        <li className={css.list}>
          Волонтерська участь: Долучайтеся до волонтерських ініціатив, приймайте
          участь у акціях, поширюйте інформацію про фонд.
        </li>
      </ul>
    </div>
    <div className={css.banks}>
      <div className={css.bankContainer}>
        <img
          src={hryvniaImage}
          alt="hryvnia"
          loading="lazy"
          className={css.picture}
        />
        <div className={css.info}>
          <h3 className={css.text}>Кожна гривня важлива</h3>
          <TbPigMoney className={css.icon} />
          <TbPigMoney className={css.icon} />
          <TbPigMoney className={css.icon} />
          <p className={css.text}>Найменування отримувача:</p>
          <p className={css.text}>БО БФ ВР ОБЕРІГ</p>
          <p className={css.text}>Код отримувача: 45216098</p>
          <p className={css.text}>
            Рахунок отримувача: UA773052990000026002050585026
          </p>
          <p className={css.text}>Назва банку: АТ КБ "ПРИВАТБАНК</p>
        </div>
      </div>
      <div className={css.bankContainer}>
        <img
          src={fuelImage}
          alt="Fuel"
          loading="lazy"
          className={css.picture}
        />
        <div className={css.info}>
          <h3 className={css.text}>Збір на паливо</h3>
          <BsFillFuelPumpFill className={css.icon} />
          <BsFillFuelPumpFill className={css.icon} />
          <BsFillFuelPumpFill className={css.icon} />
          <p className={css.text}>Готуємось, збираємось ....</p>
          <p className={css.text}>
            Друзі, допомога на паливо завжди актуальна.
          </p>
          <p className={css.text}>Дякуємо усім, хто допомогає постійно.</p>
          <LiaPrayingHandsSolid className={css.icon} />
          <LiaPrayingHandsSolid className={css.icon} />
          <LiaPrayingHandsSolid className={css.icon} />
          <h3 className={css.text}>4149499343830624</h3>
        </div>
      </div>
    </div>
  </section>
);

export default Bank;
