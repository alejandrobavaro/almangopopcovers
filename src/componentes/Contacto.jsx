import React from "react";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <div className="cyber-contact-container">
      {/* Efecto de borde neón */}
      <div className="cyber-border-glow"></div>
      
      {/* Título principal con efecto glitch */}
      <h1 className="cyber-contact-title" data-text="CONÉCTATE_CON_ALMANGO">
        CONÉCTATE_CON_ALMANGO
      </h1>
      
      {/* Divisor futurista */}
      <div className="cyber-divider">
        <div className="cyber-divider-line"></div>
        <div className="cyber-divider-dot"></div>
        <div className="cyber-divider-line"></div>
      </div>

      {/* Contenedor principal */}
      <div className="cyber-contact-grid">
        {/* Columna de logo holográfico */}
        <div className="cyber-logo-column">
          <div className="cyber-logo-hologram">
            <img
              src="/img/cyber-logo-contact.png"
              alt="Almango Pop Covers"
              className="cyber-logo-img"
            />
            <div className="cyber-hologram-effect"></div>
          </div>
        </div>

        {/* Columna de contactos */}
        <div className="cyber-contact-column">
          <h2 className="cyber-contact-subtitle">
            <span className="cyber-subtitle-inner">CANALES_DE_COMUNICACIÓN</span>
          </h2>
          
          <div className="cyber-contact-items">
            {[
              {
                icon: "bi bi-facebook",
                text: "FACEBOOK",
                url: "https://www.facebook.com/alegondramusic"
              },
              {
                icon: "bi bi-instagram",
                text: "INSTAGRAM",
                url: "https://www.instagram.com/alegondramusic/?hl=es"
              },
              {
                icon: "bi bi-youtube",
                text: "YOUTUBE",
                url: "https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ"
              },
              {
                icon: "bi bi-spotify",
                text: "SPOTIFY",
                url: "https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE"
              },
              {
                icon: "bi bi-envelope",
                text: "CORREO_ELECTRÓNICO",
                url: "mailto:bavaroalejandro@gmail.com"
              },
              {
                icon: "bi bi-paypal",
                text: "APOYO_ECONÓMICO",
                url: "https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-contact-item"
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

      {/* Efecto de scanlines */}
      <div className="cyber-scanlines"></div>
    </div>
  );
};

export default Contacto;