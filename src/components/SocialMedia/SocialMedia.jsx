import css from "./SocialMedia.module.css";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className={css.socialMedia}>
    <ul className={css.social}>
      <li className={css.socialIconList}>
        <a
          href="https://www.instagram.com/volonter_rukh_oberih?igsh=dmU0Y2UzeWhmdHFu"
          target="_blank"
          className={css.socialLink}
        >
          <BsInstagram className={css.socialIcon} />
        </a>
      </li>
      <li className={css.socialIconList}>
        <a
          href="https://www.facebook.com/profile.php?id=100079460327104"
          target="_blank"
          className={css.socialLink}
        >
          <FaFacebookF className={css.socialIcon} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialMedia;
