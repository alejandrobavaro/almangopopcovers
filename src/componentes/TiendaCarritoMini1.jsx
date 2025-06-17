import React from 'react';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini1.scss';

function TiendaCarritoMini1({ items, total }) {
  return (
    <div className="music-mini-cart">
      <h2 className="music-cart-title">🛒 CARRITO</h2>
      
      {items.length === 0 ? (
        <p className="music-empty-cart">¡VACÍO! AÑADE ALGO</p>
      ) : (
        <>
          <ul className="music-cart-list">
            {items.slice(0, 3).map((item, index) => (
              <li key={index} className="music-cart-item">
                <img
                  src={item.imagen || '/img/default-product.png'}
                  alt={item.nombre}
                  className="music-product-img"
                />
                <div className="music-product-info">
                  <span>{item.nombre}</span>
                  <span>${item.precio?.toFixed(2) || '0.00'}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="music-cart-total">TOTAL: <span>${total?.toFixed(2) || '0.00'}</span></p>
          <button className="music-view-btn">VER MÁS</button>
        </>
      )}
    </div>
  );
}

export default TiendaCarritoMini1;