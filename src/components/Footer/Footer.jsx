import css from "./Footer.module.css";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <div className={css.footer}>
    <p className={css.text}>
      Зробіть свій внесок у добрі справи, приєднайтеся до руху «Оберіг» і
      станьте частиною великої справи!
    </p>
    <div className={css.footerSocialMedia}>
      <ul className={css.footerSocial}>
        <li className={css.footerSocialIcon}>
          <a
            href="https://www.instagram.com/volonter_rukh_oberih?igsh=dmU0Y2UzeWhmdHFu"
            target="_blank"
            className={css.socialLinkFooter}
          >
            <BsInstagram className={css.socialIcon} />
          </a>
        </li>
        <li className={css.footerSocialIcon}>
          <a
            href="https://www.facebook.com/profile.php?id=100079460327104"
            target="_blank"
            className={css.socialLinkFooter}
          >
            <FaFacebookF className={css.socialIcon} />
          </a>
        </li>
        <li className={css.footerSocialIcon}>
          <a href="" target="_blank" className={css.socialLinkFooter}>
            <FaLinkedinIn className={css.socialIcon} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
