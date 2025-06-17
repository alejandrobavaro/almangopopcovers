import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss";

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar, updateProductQuantity }) => {
  const [localCart, setLocalCart] = useState(cart);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const total = localCart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  const handleComprar = () => {
    setIsPaying(true);
    setTimeout(() => {
      handlePagar();
      setIsPaying(false);
    }, 1000);
  };

  const handleQuantityChange = (id, delta) => {
    setLocalCart(prevCart => prevCart.map(product => 
      product.id === id ? { ...product, quantity: Math.max(1, (product.quantity || 1) + delta) } : product
    ));
    updateProductQuantity(id, (localCart.find(p => p.id === id)?.quantity || 1) + delta);
  };

  return (
    <div className="music-cart-container">
      <h1 className="music-cart-title">RESUMEN DE COMPRA</h1>
      
      <div className="music-cart-summary">
        <div className="music-cart-totals">
          <span>TOTAL: ${total.toFixed(2)}</span>
          <span>ITEMS: {localCart.length}</span>
        </div>

        <ul className="music-product-list">
          {localCart.map(product => (
            <li key={product.id} className="music-product-item">
              <img 
                src={product.imagenes[0] || '/img/default-product.png'} 
                alt={product.nombre}
                className="music-product-image"
              />
              <div className="music-product-details">
                <h3>{product.nombre}</h3>
                <span>${product.precio.toFixed(2)}</span>
                <div className="music-quantity-controls">
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>
                <p>{product.descripcion}</p>
              </div>
              <button 
                onClick={() => removeFromCart(product.id)} 
                className="music-remove-btn"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={handleComprar} 
          disabled={isPaying || localCart.length === 0}
          className={`music-checkout-btn ${isPaying ? 'processing' : ''}`}
        >
          {isPaying ? 'PROCESANDO...' : 'FINALIZAR COMPRA'}
        </button>
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;