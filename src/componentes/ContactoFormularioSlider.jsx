import React, { useState } from "react";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear el formulario después del envío
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      asunto: "",
      mensaje: ""
    });
  };

  return (
    <div className="cyber-contact-form-slider">
      <div className="cyber-border-glow"></div>
      
      <div className="cyber-form-slider-container">
        <div className="cyber-form-column">
          <h2 className="cyber-form-title" data-text="CONTÁCTANOS">
            CONTÁCTANOS
          </h2>
          
          <form className="cyber-contact-form" onSubmit={handleSubmit}>
            <div className="cyber-form-group">
              <label htmlFor="nombre">
                <span className="cyber-input-prefix">{'>'}</span> NOMBRE:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="INGRESA_TU_NOMBRE"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="telefono">
                <span className="cyber-input-prefix">{'>'}</span> TELÉFONO:
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="INGRESA_TU_TELÉFONO"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="email">
                <span className="cyber-input-prefix">{'>'}</span> EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="INGRESA_TU_EMAIL"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="asunto">
                <span className="cyber-input-prefix">{'>'}</span> ASUNTO:
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="DESCRIBE_EL_ASUNTO"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="mensaje">
                <span className="cyber-input-prefix">{'>'}</span> MENSAJE:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="ESCRIBE_TU_MENSAJE_AQUÍ..."
                required
              ></textarea>
              <div className="cyber-textarea-line"></div>
            </div>
            
            <button type="submit" className="cyber-submit-btn">
              <span className="btn-text">ENVIAR_MENSAJE</span>
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>

        <div className="cyber-image-column">
          <h2 className="cyber-image-title">
            <span className="cyber-title-highlight">COLECCIÓN_DIGITAL</span>
          </h2>
          
          <div className="cyber-image-wrapper">
            <img 
              src="/img/02-logos/logo1.png" 
              alt="Almango Pop Covers Logo"
              className="cyber-image"
              onError={(e) => {
                e.target.src = '/img/placeholder-logo.png';
              }}
            />
          </div>
        </div>
      </div>

      <div className="cyber-scanlines"></div>
    </div>
  );
};

export default ContactoFormularioSlider;