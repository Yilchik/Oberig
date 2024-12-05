import css from "./Gratitude.module.css";
import medalImage from "../../assets/medal.jpg";

const Gratitude = () => (
  <section className={css.container}>
    <div className={css.gratitude}>
      <h2 className={css.title}>Подяки</h2>
      <ul className={css.gratitudeCard}>
        <li className={css.gratitudePhoto}>
          <img
            src={medalImage}
            alt="Фото Подяки Анушенковій Ганні"
            width="264"
            height="300"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </section>
);

export default Gratitude;
