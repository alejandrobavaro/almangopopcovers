import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss";

const TiendaCarritoMini2 = ({ cart }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();
  const total = cart.reduce((sum, product) => sum + product.precio * (product.quantity || 1), 0);

  return (
    <div className={`music-floating-cart ${isMinimized ? "minimized" : ""}`}>
      {location.pathname.startsWith("/tienda") && !isMinimized && (
        <div className="music-cart-header">
          <div className="music-cart-total">
            <span>TOTAL</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="music-cart-count">
            <BsCart4 />
            <span>{cart.length}</span>
          </div>
        </div>
      )}
      
      <div className="music-cart-actions">
        <Link to="/carrito" className="music-cart-link">
          <button disabled={cart.length === 0}>
            {isMinimized ? "◉" : "PAGAR"}
          </button>
        </Link>
        <button onClick={() => setIsMinimized(prev => !prev)}>
          {isMinimized ? "↑" : "↓"}
        </button>
      </div>
    </div>
  );
};

export default TiendaCarritoMini2;