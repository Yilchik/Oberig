import css from "./Gratitude.module.css";
import { useState, useEffect } from "react";
import Images from "../Images/Images.jsx";

const Gratitude = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto";
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
          {Images.map((image) => (
            <li className={css.gratitudePhoto} key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onClick={() => openModal(image)}
                className={css.image}
              />
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && currentImage && (
        <div className={css.modalOverlay} onClick={closeModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={css.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gratitude;
