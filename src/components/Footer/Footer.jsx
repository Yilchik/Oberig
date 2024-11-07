import css from "./Footer.module.css";
const Footer = () => (
  <div className={css.footer}>
    <p className={css.text}>
      Зробіть свій внесок у добрі справи, приєднайтеся до руху «Оберіг» і
      станьте частиною великої справи!
    </p>
    <div className={css.footerSocialMedia}>
      <ul className={css.footerSocial}>
        <li className={css.footerSocialIcon}>
          <a href="" className={css.socialLinkFooter}>
            <svg className={css.socialIcon} width="24" height="24">
              <use href="../../assets/icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li className={css.footerSocialIcon}>
          <a
            href="https://www.facebook.com/profile.php?id=100079460327104"
            target="_blank"
            className={css.socialLinkFooter}
          >
            <svg className={css.socialIcon} width="24" height="24">
              <use href="../../assets/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li className={css.footerSocialIcon}>
          <a href="" className={css.socialLinkFooter}>
            <svg className={css.socialIcon} width="24" height="24">
              <use href="../../assets/icons.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
        <li className={css.footerSocialIcon}>
          <a href="" className={css.socialLinkFooter}>
            <svg className={css.socialIcon} width="24" height="24">
              <use href="../../assets/icons.svg#icon-twitter"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
