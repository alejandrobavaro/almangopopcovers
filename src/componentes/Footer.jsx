import React from "react";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="cyber-footer">
      {/* Barras de escaneo (reemplazan cintas de cassette) */}
      <div className="cyber-scan-bar"></div>
      
      <div className="cyber-footer-content">
        {/* Logo izquierdo (mismo contenido) */}
        <div className="cyber-logo-container">
          <div className="cyber-vinyl">
            <img 
              src="/img/02-logos/logoheader1-izquierda.png" 
              alt="Logo izquierdo" 
              className="cyber-vinyl-image"
            />
            <div className="cyber-vinyl-center"></div>
            <div className="cyber-vinyl-glow"></div>
          </div>
        </div>

        {/* Redes sociales (mismo contenido) */}
        <div className="cyber-social-section">
          <h3 className="cyber-social-title">
            <span className="cyber-prompt">>></span> CONÉCTATE CON NOSOTROS
          </h3>
          <div className="cyber-social-buttons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <span className="cyber-btn-icon">IG</span>
              <span className="cyber-btn-label">INSTA</span>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <span className="cyber-btn-icon">YT</span>
              <span className="cyber-btn-label">YT</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <span className="cyber-btn-icon">FB</span>
              <span className="cyber-btn-label">FB</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <span className="cyber-btn-icon">TW</span>
              <span className="cyber-btn-label">TW</span>
            </a>
          </div>
        </div>

        {/* Logo derecho (mismo contenido) */}
        <div className="cyber-logo-container">
          <div className="cyber-vinyl">
            <img 
              src="/img/02-logos/logoheader2-derecha.png" 
              alt="Logo derecho" 
              className="cyber-vinyl-image"
            />
            <div className="cyber-vinyl-center"></div>
            <div className="cyber-vinyl-glow"></div>
          </div>
        </div>
      </div>

      {/* Barra de escaneo inferior */}
      <div className="cyber-scan-bar"></div>

      {/* Copyright (mismo contenido) */}
      <div className="cyber-copyright">
        <div className="cyber-neon-sign">
          <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">
            <span className="cyber-flicker">✧</span> GONDRA WORLD DEV <span className="cyber-flicker">✧</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;