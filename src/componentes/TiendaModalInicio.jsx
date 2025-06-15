import React from "react";
import Modal from "react-modal";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss';

Modal.setAppElement("#root");

const TiendaModalInicio = ({ showModal, closeModal }) => {
  const handleClose = () => {
    // Efecto de sonido al cerrar
    new Audio('/sounds/vinyl-scratch.mp3').play().catch(e => console.log(e));
    closeModal();
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleClose}
      contentLabel="Promoción"
      className="RetroModal"
      overlayClassName="RetroOverlay"
      closeTimeoutMS={500}
    >
      {/* Efecto VHS */}
      <div className="vhs-overlay"></div>
      
      {/* Cinta de cassette decorativa */}
      <div className="cassette-tape-top"></div>
      
      <div className="retro-modal-wrapper">
        <button onClick={handleClose} className="retro-modal-close">
          ✕
        </button>
        
        <div className="retro-modal-content">
          <h2 className="retro-modal-title">¡OFERTAS PSICODÉLICAS!</h2>
          <p className="retro-modal-subtitle">APROVECHA ESTOS BENEFICIOS GROOVY</p>
          
          <div className="retro-promo-list">
            <div className="retro-promo-item disco">SUPER OFERTAS!</div>
            <div className="retro-promo-item">CAMISETAS 20% OFF!</div>
            <div className="retro-promo-item cassette">ENVÍOS A TODO EL PAÍS!</div>
            <div className="retro-promo-item disco">SUPER AHORRO!!</div>
          </div>
          
          <div className="retro-divider"></div>
          
          <button onClick={handleClose} className="retro-primary-btn">
            ¡QUIERO VER MÁS!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;