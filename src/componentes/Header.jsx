import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import { FaSearch, FaUser, FaSignOutAlt, FaMusic, FaStore, FaHome, FaEnvelope } from "react-icons/fa";

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
    <header className="header">
      <div className="header__container">
        {/* Búsqueda para desktop */}
        {shouldShowSearchBar && (
          <div className={`header__search ${showMobileSearch ? "header__search--mobile-visible" : ""}`}>
            <div className="search__container">
              <span className="search__prompt">C:\ALMANGO\{location.pathname.replace('/', '').toUpperCase()}\</span>
              <input
                type="text"
                placeholder={location.pathname === "/tienda" ? "SEARCH_PRODUCTS" : "SEARCH_TRACKS"}
                className="search__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search__cursor"></div>
            </div>
          </div>
        )}

        {/* Logo */}
        <Link to="/" className="header__logo" onMouseEnter={playHoverSound}>
          <img
            src="/img/04-img-banners/banner4.png"
            alt="Almango Pop Covers"
            className="logo__image"
          />
        </Link>

        {/* Menú principal */}
        <nav className={`header__nav ${menuActive ? "header__nav--active" : ""}`}>
          <Link to="/" className="nav__link" onMouseEnter={playHoverSound}>
            <FaHome className="nav__icon" />
            <span className="nav__text">INICIO</span>
          </Link>
          
          <Link to="/musica" className="nav__link" onMouseEnter={playHoverSound}>
            <FaMusic className="nav__icon" />
            <span className="nav__text">MÚSICA</span>
          </Link>
          
          <Link to="/tienda" className="nav__link" onMouseEnter={playHoverSound}>
            <FaStore className="nav__icon" />
            <span className="nav__text">TIENDA</span>
          </Link>
          
          <Link to="/contacto" className="nav__link" onMouseEnter={playHoverSound}>
            <FaEnvelope className="nav__icon" />
            <span className="nav__text">CONTACTO</span>
          </Link>
        </nav>

        {/* Controles de usuario */}
        <div className="header__controls">
          {state.isAuthenticated ? (
            <button 
              className="controls__button"
              onClick={handleAuthAction}
              onMouseEnter={playHoverSound}
            >
              <FaSignOutAlt className="button__icon" />
              <span className="button__text">LOGOUT</span>
            </button>
          ) : (
            <>
              <Link to="/login" className="controls__button" onMouseEnter={playHoverSound}>
                <FaUser className="button__icon" />
                <span className="button__text">LOGIN</span>
              </Link>
              <Link to="/register" className="controls__button controls__button--register" onMouseEnter={playHoverSound}>
                <span className="button__text">REGISTER</span>
              </Link>
            </>
          )}
          
          {shouldShowSearchBar && (
            <button 
              className="controls__search-toggle"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              onMouseEnter={playHoverSound}
            >
              <FaSearch className="search-toggle__icon" />
            </button>
          )}
          
          <button 
            className="controls__menu-toggle"
            onClick={() => setMenuActive(!menuActive)}
            onMouseEnter={playHoverSound}
          >
            <div className={`menu-toggle__bar ${menuActive ? "menu-toggle__bar--active" : ""}`}></div>
            <div className={`menu-toggle__bar ${menuActive ? "menu-toggle__bar--active" : ""}`}></div>
            <div className={`menu-toggle__bar ${menuActive ? "menu-toggle__bar--active" : ""}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;