import css from "./Fuel.module.css";
import fuelImage from "../../assets/fuel.jpg";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const Fuel = () => (
  <div className={css.fuel}>
    <img
      src={fuelImage}
      alt="Fuel"
      width="359"
      height="200"
      loading="lazy"
      className={css.picture}
    />
    <div className={css.infoFuel}>
      <h3 className={css.text}>Збір на паливо</h3>
      <BsFillFuelPumpFill className={css.icon} />
      <BsFillFuelPumpFill className={css.icon} />
      <BsFillFuelPumpFill className={css.icon} />
      <p className={css.text}>Готуємось, збираємось ....</p>
      <p className={css.text}>Друзі, допомога на паливо завжди актуальна.</p>
      <p className={css.text}>Дякуємо усім, хто допомогає постійно.</p>
      <LiaPrayingHandsSolid className={css.icon} />
      <LiaPrayingHandsSolid className={css.icon} />
      <LiaPrayingHandsSolid className={css.icon} />
      <h3 className={css.text}>4149499343830624</h3>
    </div>
  </div>
);

export default Fuel;
