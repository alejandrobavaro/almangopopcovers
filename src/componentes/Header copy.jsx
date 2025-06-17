import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import { FaSearch, FaUser, FaSignOutAlt, FaMusic, FaStore, FaHome, FaEnvelope } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const { state, dispatch } = useAuth();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const shouldShowSearchBar = 
    location.pathname === "/tienda" || location.pathname === "/musica";

  const handleAuthAction = () => {
    new Audio('/audio/hologram-interaction.mp3').play().catch(console.error);
    dispatch({ type: "LOGOUT" });
  };

  const playHoverSound = () => {
    new Audio('/audio/button-hover.mp3').play().catch(console.error);
  };

  return (
    <header className="cyber-header">
      {/* Barra de estado superior */}
      {/* <div className="cyber-status-bar">
        <div className="cyber-status-item">SYSTEM: ONLINE</div>
        <div className="cyber-status-item">USER: {state.isAuthenticated ? "AUTHENTICATED" : "GUEST"}</div>
        <div className="cyber-status-item">ALMANGO_OS v2.4.8</div>
      </div> */}

      {/* Contenido principal del header */}
      <div className="cyber-header-main">
       

        {/* Búsqueda estilo terminal */}
        {shouldShowSearchBar && (
          <div className={`cyber-search ${showMobileSearch ? "mobile-visible" : ""}`}>
            <div className="cyber-search-container">
              <span className="cyber-search-prompt">C:\ALMANGO\{location.pathname.replace('/', '').toUpperCase()}\</span>
              <input
                type="text"
                placeholder={location.pathname === "/tienda" ? "SEARCH_PRODUCTS" : "SEARCH_TRACKS"}
                className="cyber-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="cyber-search-cursor"></div>
            </div>
          </div>
        )}

        {/* Menú principal */}
        <nav className={`cyber-nav ${menuActive ? "active" : ""}`}>
          <Link 
            to="/" 
            className="cyber-nav-link"
            onMouseEnter={playHoverSound}
          >
            <FaHome className="cyber-nav-icon" />
            <span className="cyber-nav-text">INICIO</span>
            <span className="cyber-nav-code">> HOME</span>
          </Link>
          
          <Link 
            to="/musica" 
            className="cyber-nav-link"
            onMouseEnter={playHoverSound}
          >
            <FaMusic className="cyber-nav-icon" />
            <span className="cyber-nav-text">MÚSICA</span>
            <span className="cyber-nav-code">> MUSIC</span>
          </Link>
           {/* Logo con efecto neón */}
        <Link 
          to="/" 
          className="cyber-logo"
          onMouseEnter={playHoverSound}
        >
          <img
            src="/img/04-img-banners/banner4.png"
            alt="Almango Pop Covers"
            className="cyber-logo-image"
          />
          <div className="cyber-logo-glow"></div>
        </Link>
          <Link 
            to="/tienda" 
            className="cyber-nav-link"
            onMouseEnter={playHoverSound}
          >
            <FaStore className="cyber-nav-icon" />
            <span className="cyber-nav-text">TIENDA</span>
            <span className="cyber-nav-code">> STORE</span>
          </Link>
          
          <Link 
            to="/contacto" 
            className="cyber-nav-link"
            onMouseEnter={playHoverSound}
          >
            <FaEnvelope className="cyber-nav-icon" />
            <span className="cyber-nav-text">CONTACTO</span>
            <span className="cyber-nav-code">> CONTACT</span>
          </Link>
        </nav>

        {/* Controles de usuario */}
        <div className="cyber-user-controls">
          {state.isAuthenticated ? (
            <button 
              className="cyber-user-btn"
              onClick={handleAuthAction}
              onMouseEnter={playHoverSound}
            >
              <FaSignOutAlt className="cyber-user-icon" />
              <span className="cyber-user-text">LOGOUT</span>
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="cyber-user-btn"
                onMouseEnter={playHoverSound}
              >
                <FaUser className="cyber-user-icon" />
                <span className="cyber-user-text">LOGIN</span>
              </Link>
              <Link 
                to="/register" 
                className="cyber-user-btn register"
                onMouseEnter={playHoverSound}
              >
                <span className="cyber-user-text">REGISTER</span>
              </Link>
            </>
          )}
          
          {shouldShowSearchBar && (
            <button 
              className="cyber-search-toggle"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              onMouseEnter={playHoverSound}
            >
              <FaSearch className="cyber-search-icon" />
            </button>
          )}
          
          <button 
            className="cyber-menu-toggle"
            onClick={() => setMenuActive(!menuActive)}
            onMouseEnter={playHoverSound}
          >
            <div className={`cyber-menu-bar ${menuActive ? "active" : ""}`}></div>
            <div className={`cyber-menu-bar ${menuActive ? "active" : ""}`}></div>
            <div className={`cyber-menu-bar ${menuActive ? "active" : ""}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;