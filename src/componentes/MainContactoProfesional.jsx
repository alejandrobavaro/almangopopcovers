import React from "react";
import '../assets/scss/_03-Componentes/_MainContactoProfesional.scss';

const MainContactoProfesional = () => {
  return (
    <section className="cyber-contact-section">
      <div className="cyber-contact-container">
        <div className="cyber-contact-info">
          <h2 className="cyber-contact-title">CONTACTO PROFESIONAL</h2>
          <p className="cyber-contact-text">Para contrataciones, prensa y eventos especiales</p>
          
          <div className="cyber-contact-details">
            <div className="cyber-contact-item">
              <span className="cyber-contact-label">Manager:</span>
              <span className="cyber-contact-value">Ale Gondra</span>
            </div>
            <div className="cyber-contact-item">
              <span className="cyber-contact-label">Teléfono:</span>
              <span className="cyber-contact-value">+54 9 11 1234-5678</span>
            </div>
            <div className="cyber-contact-item">
              <span className="cyber-contact-label">Email:</span>
              <span className="cyber-contact-value">bookings@almangopop.com</span>
            </div>
            <div className="cyber-contact-item">
              <span className="cyber-contact-label">Redes:</span>
              <span className="cyber-contact-value">
                @almangopopcovers (Instagram/Facebook)
              </span>
            </div>
          </div>
        </div>
        
        <div className="cyber-contact-form">
          <h3>SOLICITAR PRESUPUESTO</h3>
          <form>
            <div className="cyber-form-group">
              <label>Nombre del evento/lugar</label>
              <input type="text" placeholder="Ej: Casino Central" />
            </div>
            <div className="cyber-form-group">
              <label>Fecha del evento</label>
              <input type="date" />
            </div>
            <div className="cyber-form-group">
              <label>Tipo de evento</label>
              <select>
                <option>Seleccione una opción</option>
                <option>Bar/Restaurante</option>
                <option>Casino</option>
                <option>Hotel/Resort</option>
                <option>Evento Corporativo</option>
                <option>Fiesta Privada</option>
                <option>Festival</option>
              </select>
            </div>
            <div className="cyber-form-group">
              <label>Tu nombre</label>
              <input type="text" placeholder="Nombre completo" />
            </div>
            <div className="cyber-form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />
            </div>
            <div className="cyber-form-group">
              <label>Mensaje adicional</label>
              <textarea placeholder="Detalles del evento, requerimientos especiales..."></textarea>
            </div>
            <button type="submit" className="cyber-form-button">
              <span className="cyber-button-hover"></span>
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainContactoProfesional;