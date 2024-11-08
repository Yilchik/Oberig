import css from "./Team.module.css";
import heartImage from "../../assets/heart.jpg";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => (
  <section className={css.container}>
    <div className={css.team}>
      <h2 className={css.title}>Волонтерська команда</h2>
      <ul className={css.teamCard}>
        <li className={css.teamPhoto}>
          <img
            src={heartImage}
            alt="Фото Анушенкова Ганна"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h4 className={css.teamName}>Анушенкова Ганна</h4>
            <p className={css.teamPosition}>Голова</p>
            <div className={css.socialMedia}>
              <ul className={css.social}>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <BsInstagram className={css.socialIcon} />
                  </a>
                </li>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <FaFacebookF className={css.socialIcon} />
                  </a>
                </li>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <FaLinkedinIn className={css.socialIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={css.teamPhoto}>
          <img
            src={heartImage}
            alt="Фото Зинуров Руслан"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h4 className={css.teamName}>Зинуров Руслан</h4>
            <p className={css.teamPosition}>Заступник</p>
            <div className={css.socialMedia}>
              <ul className={css.social}>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <BsInstagram className={css.socialIcon} />
                  </a>
                </li>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <FaFacebookF className={css.socialIcon} />
                  </a>
                </li>
                <li className={css.socialIconList}>
                  <a href="" target="_blank" className={css.socialLink}>
                    <FaLinkedinIn className={css.socialIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Team;
