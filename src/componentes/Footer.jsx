import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="cyber-scan-bar"></div>

      <div className="cyber-footer-content">
        {/* Logo izquierdo */}
        <div className="cyber-logo-container cyber-logo-left">
          <div className="cyber-vinyl">
            <img 
              src="/img/02-logos/logo2.png" 
              alt="Logo izquierdo" 
              className="cyber-vinyl-image"
            />
          </div>
        </div>

        {/* Redes sociales */}
        <div className="cyber-social-section">
          <h3 className="cyber-social-title">
            <span className="cyber-prompt"><span className="cyber-flicker">✧</span> CONÉCTATE CON NOSOTROS <span className="cyber-flicker">✧</span></span>  
          </h3>
          <div className="cyber-social-buttons">
            <a href="https://www.instagram.com/almangopopmusic" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@almangopopcovers" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/almangopopmusic" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <FaFacebookF />
            </a>
            <a href="https://x.com/almangopopmusic" target="_blank" rel="noopener noreferrer" className="cyber-social-btn">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Logo derecho */}
        <div className="cyber-logo-container cyber-logo-right">
          <div className="cyber-vinyl">
            <img 
              src="/img/02-logos/logo2.png" 
              alt="Logo derecho" 
              className="cyber-vinyl-image"
            />
          </div>
        </div>
      </div>

      <div className="cyber-scan-bar"></div>

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