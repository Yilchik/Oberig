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
            <h3 className={css.teamName}>Анушенкова Ганна</h3>
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
            <h3 className={css.teamName}>Зинуров Руслан</h3>
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
      <ul className={css.teamCard}>
        <li className={css.teamPhoto}>
          <img
            src={heartImage}
            alt="Фото Філякіна Олена"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Філякіна Олена</h3>
            <p className={css.teamPosition}></p>
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
            alt="Фото Самоварова Олена"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Самоварова Олена</h3>
            <p className={css.teamPosition}></p>
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
            alt="Фото Бойко Тетяна"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Бойко Тетяна</h3>
            <p className={css.teamPosition}></p>
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
            alt="Фото Шепель Юлія"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Шепель Юлія</h3>
            <p className={css.teamPosition}></p>
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
            alt="Фото Карпіченко Роман"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Карпіченко Роман</h3>
            <p className={css.teamPosition}></p>
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
            alt="Фото Гаврилович Юрій"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Гаврилович Юрій</h3>
            <p className={css.teamPosition}>м. Краматорськ</p>
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
            alt="Фото Соловей Тетяна"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Соловей Тетяна</h3>
            <p className={css.teamPosition}>м. Кременна</p>
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
            alt="Фото Ахмаджанов Олексій"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Ахмаджанов Олексій</h3>
            <p className={css.teamPosition}>м. Зеленодольск</p>
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
            alt="Фото Марченко Павло"
            width="264"
            height="260"
            loading="lazy"
          />
          <div className={css.teamText}>
            <h3 className={css.teamName}>Марченко Павло</h3>
            <p className={css.teamPosition}>смт. Велика Новосілка</p>
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
