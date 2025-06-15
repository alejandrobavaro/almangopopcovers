import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_TiendaImgAgrandar.scss';

function TiendaImgAgrandar({ images, isOpen, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    // Efecto de sonido al cambiar imagen
    new Audio('/sounds/cassette-click.mp3').play().catch(e => console.log(e));
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    // Efecto de sonido al cambiar imagen
    new Audio('/sounds/cassette-click.mp3').play().catch(e => console.log(e));
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="retro-modal-overlay" onClick={closeModal}>
      {/* Efecto VHS */}
      <div className="vhs-overlay"></div>
      
      <div className="retro-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Cinta de cassette decorativa */}
        <div className="cassette-tape-top"></div>
        
        <span className="retro-close-button" onClick={closeModal}>
          ✕
        </span>
        
        <div className="vinyl-frame">
          <img 
            src={images[currentImageIndex]} 
            className="retro-modal-image" 
            alt="Producto" 
          />
          <div className="vinyl-center"></div>
        </div>
        
        <button className="retro-prev-button" onClick={handlePrevImage}>
          ◀
        </button>
        <button className="retro-next-button" onClick={handleNextImage}>
          ▶
        </button>
        
        {/* Indicador de imágenes */}
        <div className="image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

export default TiendaImgAgrandar;