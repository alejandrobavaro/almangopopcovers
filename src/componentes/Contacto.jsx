import React from "react";
import { useNavigate } from "react-router-dom";
import ContactoProfesional from "./ContactoProfesional";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  const navigate = useNavigate();

  const contactItems = [
    {
      icon: "bi bi-facebook",
      text: "FACEBOOK",
      url: "https://www.facebook.com/alegondramusic",
      color: "#1877f2"
    },
    {
      icon: "bi bi-instagram",
      text: "INSTAGRAM",
      url: "https://www.instagram.com/alegondramusic/?hl=es",
      color: "#e1306c"
    },
    {
      icon: "bi bi-youtube",
      text: "YOUTUBE",
      url: "https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ",
      color: "#ff0000"
    },
    {
      icon: "bi bi-spotify",
      text: "SPOTIFY",
      url: "https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE",
      color: "#1db954"
    },
    {
      icon: "bi bi-envelope",
      text: "CORREO_ELECTRÓNICO",
      url: "mailto:bavaroalejandro@gmail.com",
      color: "#00f0ff"
    },
    {
      icon: "bi bi-paypal",
      text: "APOYO_ECONÓMICO",
      url: "https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC",
      color: "#003087"
    }
  ];

  return (
    <section className="cyber-contact-section">
      <div className="cyber-contact-container">
        <div className="cyber-border-glow"></div>
        
        <h1 className="cyber-contact-title" >
          CONTACTO
        </h1>
        
        <div className="cyber-divider">
          <div className="cyber-divider-line"></div>
          <div className="cyber-divider-dot"></div>
          <div className="cyber-divider-line"></div>
        </div>

        {/* Sección de redes sociales */}
        <div className="cyber-contact-grid">
          <div className="cyber-logo-column">
            <div className="cyber-logo-hologram">
              <img
                src="/img/04-img-banners/banner4.png"
                alt="Almango Pop Covers"
                className="cyber-logo-img"
                onError={(e) => {
                  e.target.src = '/img/04-img-banners/banner4.png';
                }}
              />
              <div className="cyber-hologram-effect"></div>
            </div>
          </div>

          <div className="cyber-contact-column">
            <h2 className="cyber-contact-subtitle">
              <span className="cyber-subtitle-inner">CANALES DE COMUNICACIÓN</span>
            </h2>
            
            <div className="cyber-contact-items">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-contact-item"
                  style={{ "--item-color": item.color }}
                >
                  <div className="cyber-item-icon">
                    <i className={item.icon} />
                  </div>
                  <span className="cyber-item-text">{item.text}</span>
                  <div className="cyber-item-glow"></div>
                  <div className="cyber-item-line"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider entre secciones */}
        <div className="cyber-section-divider">
          <span className="cyber-divider-text">FORMULARIO PROFESIONAL</span>
        </div>

        {/* Formulario de contacto profesional */}
        <ContactoProfesional />

        <div className="cyber-scanlines"></div>
      </div>
    </section>
  );
};

export default Contacto;