import css from "./Gratitude.module.css";
import medalImage from "../../assets/medal.jpg";
import { useState } from "react";

const Gratitude = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <section className={css.container} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className={css.gratitude}>
        <h2 className={css.title}>Подяки</h2>
        <ul className={css.gratitudeCard}>
          <li className={css.gratitudePhoto}>
            <img
              src={medalImage}
              alt="Фото Подяки Анушенковій Ганні"
              width="264"
              height="360"
              loading="lazy"
              onClick={openModal}
              className={css.image}
            />
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className={css.modalOverlay} onClick={closeModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={medalImage}
              alt="Фото Подяки Анушенковій Ганні"
              className={css.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gratitude;
