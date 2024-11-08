import SocialMedia from "../SocialMedia/SocialMedia";
import css from "./Footer.module.css";

const Footer = () => (
  <div className={css.footer}>
    <p className={css.text}>
      Зробіть свій внесок у добрі справи, приєднайтеся до руху «Оберіг» і
      станьте частиною великої справи!
    </p>
    <SocialMedia />
  </div>
);

export default Footer;
