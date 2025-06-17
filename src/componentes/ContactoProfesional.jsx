import React, { useState } from "react";
import "../assets/scss/_03-Componentes/_ContactoProfesional.scss";

const ContactoProfesional = () => {
  const [formData, setFormData] = useState({
    evento: "",
    fecha: "",
    tipoEvento: "",
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Resetear el formulario
    setFormData({
      evento: "",
      fecha: "",
      tipoEvento: "",
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <section className="publicidad-contact-section">
      <div className="publicidad-scan-bar"></div>

      <div className="publicidad-contact-container">
        <div className="publicidad-contact-info">
          <h2 className="section-title">
            <span className="title-badge">CONTACTO PROFESIONAL</span>
          </h2>
          <p className="contact-subtitle">
            Para contrataciones, prensa y eventos especiales
          </p>

          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <span className="detail-label">Manager:</span>
              <span className="detail-value">Ale Gondra</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Teléfono:</span>
              <span className="detail-value">+54 9 11 1234-5678</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">bookings@almangopop.com</span>
            </div>
        
            <div className="contact-detail-item">
              <span className="detail-label">Redes:</span>
              <span className="detail-value">@almangopopcovers</span>
            </div>
            <div className="logo-wrapper">
              <img
                src="/img/02-logos/logo1.png"
                alt="Almango Pop Covers Logo"
                className="contact-logo"
                onError={(e) => {
                  e.target.src = "/img/placeholder-logo.png";
                }}
              />
            </div>
          </div>
        </div>

        <div className="publicidad-contact-form">
          <div className="form-header">
            <h3 className="form-title">
              <span className="title-highlight">SOLICITAR PRESUPUESTO</span>
            </h3>
            <div className="form-subtitle">
              Complete el formulario para eventos
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="evento">
                <span className="input-prefix">{">"}</span> NOMBRE DEL EVENTO:
              </label>
              <input
                type="text"
                id="evento"
                name="evento"
                value={formData.evento}
                onChange={handleChange}
                placeholder="Ej: Casino Central"
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="fecha">
                <span className="input-prefix">{">"}</span> FECHA DEL EVENTO:
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="tipoEvento">
                <span className="input-prefix">{">"}</span> TIPO DE EVENTO:
              </label>
              <select
                id="tipoEvento"
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Bar/Restaurante">Bar/Restaurante</option>
                <option value="Casino">Casino</option>
                <option value="Hotel/Resort">Hotel/Resort</option>
                <option value="Evento Corporativo">Evento Corporativo</option>
                <option value="Fiesta Privada">Fiesta Privada</option>
                <option value="Festival">Festival</option>
              </select>
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">
                <span className="input-prefix">{">"}</span> TU NOMBRE:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <span className="input-prefix">{">"}</span> EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">
                <span className="input-prefix">{">"}</span> MENSAJE ADICIONAL:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Detalles del evento, requerimientos especiales..."
                required
              ></textarea>
              <div className="textarea-line"></div>
            </div>

            <button type="submit" className="submit-button">
              <span className="button-text">ENVIAR SOLICITUD</span>
              <span className="button-glow"></span>
            </button>
          </form>
        </div>
      </div>

      <div className="publicidad-scan-bar"></div>
    </section>
  );
};

export default ContactoProfesional;
