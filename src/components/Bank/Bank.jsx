import Fuel from "../Fuel/Fuel";
import css from "./Bank.module.css";
import hryvniaImage from "../../assets/hryvnia.jpg";
import { TbPigMoney } from "react-icons/tb";

const Bank = () => (
  <section className={css.container}>
    <div className={css.info}>
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
      <div className={css.bank}>
        <img
          src={hryvniaImage}
          alt="hryvnia"
          width="437"
          height="200"
          loading="lazy"
          className={css.picture}
        />
        <div className={css.infoBank}>
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
      <Fuel />
    </div>
  </section>
);

export default Bank;
