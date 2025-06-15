import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { BsArrowsCollapse, BsArrowsExpand, BsCart4 } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss";
import "../assets/scss/_01-General/_SweetAlert.scss";

const TiendaCarritoMini2 = ({ cart, removeFromCart, clearCart }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [localCart, setLocalCart] = useState(cart);
  const location = useLocation();
  const total = localCart.reduce((sum, product) => sum + product.precio * (product.quantity || 1), 0);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handlePurchaseClick = () => {
    if (localCart.length === 0) {
      // Efecto de sonido cuando el carrito está vacío
      new Audio('/sounds/record-scratch.mp3').play().catch(e => console.log(e));
      
      Swal.fire({
        title: "¡CARRITO VACÍO!",
        text: "AÑADE ALGO PSICODÉLICO",
        icon: "error",
        background: "#2a1e5c",
        color: "#f4e87c",
        confirmButtonText: "¡VAMOS!",
        customClass: {
          popup: "retro-swal-popup",
          title: "retro-swal-title",
          confirmButton: "retro-swal-button",
          icon: "retro-swal-icon"
        },
        buttonsStyling: false,
        iconHtml: '✕',
      });
      return;
    }

    // Efecto de sonido al comprar
    new Audio('/sounds/cash-register.mp3').play().catch(e => console.log(e));
  };

  return (
    <div className={`retro-floating-cart ${isMinimized ? "minimized" : ""}`}>
      {/* Efecto de cinta de cassette */}
      <div className="cassette-tape"></div>
      
      {location.pathname.startsWith("/tienda") && !isMinimized && (
        <div className="retro-cart-header">
          <div className="retro-cart-total">
            <span className="retro-total-label">TOTAL</span>
            <span className="retro-total-amount neon">${total.toFixed(2)}</span>
          </div>

          <div className="retro-cart-count">
            <BsCart4 className="retro-cart-icon" />
            <span className="retro-items-count">{localCart.length}</span>
          </div>
        </div>
      )}
      
      <div className="retro-cart-actions">
        <Link to="/carrito" className="retro-cart-link">
          <button
            className={`retro-checkout-btn ${isMinimized ? "minimized" : ""}`}
            onClick={handlePurchaseClick}
            disabled={localCart.length === 0}
          >
            {isMinimized ? (
              <span className="minimized-icon">◉</span>
            ) : (
              <>
                <span className="icon">✧</span> PAGAR <span className="icon">✧</span>
              </>
            )}
          </button>
        </Link>
        <button
          className="retro-toggle-btn"
          onClick={() => setIsMinimized((prevState) => !prevState)}
        >
          {isMinimized ? <BsArrowsExpand className="toggle-icon" /> : <BsArrowsCollapse className="toggle-icon" />}
        </button>
      </div>
    </div>
  );
};

export default TiendaCarritoMini2;