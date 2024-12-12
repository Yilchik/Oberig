import { useState, useEffect } from "react";
import css from "./Gratitude.module.css";
import Images from "../../Images";

const Gratitude = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className={css.container}>
      <div className={css.gratitude}>
        <h2 className={css.title}>Подяки</h2>
        <ul className={css.gratitudeCard}>
          {Images.map((image, index) => (
            <li className={css.gratitudePhoto} key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onClick={() => openModal(index)}
                className={css.image}
              />
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && currentIndex !== null && (
        <div className={css.modalOverlay} onClick={closeModal}>
          <img
            src={Images[currentIndex].src}
            alt={Images[currentIndex].alt}
            className={css.modalImage}
            onClick={showNextImage}
          />
        </div>
      )}
    </section>
  );
};

export default Gratitude;
