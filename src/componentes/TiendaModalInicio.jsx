import React from "react";
import Modal from "react-modal";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss';

Modal.setAppElement("#root");

const TiendaModalInicio = ({ showModal, closeModal }) => {
  const handleClose = () => {
    new Audio('/audio/hologram-close.mp3').play().catch(e => console.log(e));
    closeModal();
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleClose}
      contentLabel="Promoción"
      className="modal-core"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
    >
      <div className="scan-bar"></div>
      
      <div className="modal-body">
        <button onClick={handleClose} className="close-btn">×</button>
        
        <div className="content">
          <h2>OFERTAS DIGITALES</h2>
          <p>» APROVECHA ESTOS BENEFICIOS</p>
          
          <div className="promo-grid">
            <div>» SUPER OFERTAS</div>
            <div>» DESCUENTOS 30%</div>
            <div>» ENVIOS GRATIS</div>
            <div>» OFERTAS RELOADED</div>
          </div>
          
          <div className="divider"></div>
          
          <button onClick={handleClose} className="action-btn">
            VER OFERTAS
          </button>
        </div>
      </div>

      <div className="scan-bar"></div>
    </Modal>
  );
};

export default TiendaModalInicio;