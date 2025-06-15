import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const { state, dispatch } = useAuth();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const shouldShowSearchBar = 
    location.pathname === "/tienda" || location.pathname === "/musica";

  const handleAuthAction = () => {
    new Audio('/audio/hologram-interaction.mp3').play().catch(console.error);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header className="cyber-header-single-line">
      <div className="cyber-header-container">
        {/* Logo compacto */}
        <Link to="/" className="cyber-logo-link">
          <img
            src="/img/hologram-icon.webp"
            alt="DSV"
            className="cyber-logo-icon"
          />
          <span className="cyber-logo-text">DSV</span>
        </Link>

        {/* Búsqueda integrada */}
        {shouldShowSearchBar && (
          <div className={`cyber-search-integrated ${showMobileSearch ? "mobile-visible" : ""}`}>
            <div className="cyber-search-terminal">
              <span className="cyber-prompt">></span>
              <input
                type="text"
                placeholder={location.pathname === "/tienda" ? "SEARCH_ALBUMS" : "SEARCH_TRACKS"}
                className="cyber-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Menú compacto */}
        <nav className="cyber-nav-compact">
          <Link className="cyber-nav-item" to="/">
            <span className="cyber-nav-code">HOME</span>
          </Link>
          <Link className="cyber-nav-item" to="/musica">
            <span className="cyber-nav-code">MUSIC</span>
          </Link>
          <Link className="cyber-nav-item" to="/contacto">
            <span className="cyber-nav-code">CONTACT</span>
          </Link>
          <Link className="cyber-nav-item" to="/tienda">
            <span className="cyber-nav-code">STORE</span>
          </Link>
        </nav>

        {/* Auth + Menú móvil */}
        <div className="cyber-auth-compact">
          {state.isAuthenticated ? (
            <button className="cyber-auth-btn" onClick={handleAuthAction}>
              <span className="cyber-auth-code">LOGOUT</span>
            </button>
          ) : (
            <>
              <Link className="cyber-auth-btn" to="/login">
                <span className="cyber-auth-code">LOGIN</span>
              </Link>
              <Link className="cyber-auth-btn" to="/register">
                <span className="cyber-auth-code">REG</span>
              </Link>
            </>
          )}
          <button 
            className="cyber-mobile-search-toggle"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <span className="cyber-search-icon">⌕</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;