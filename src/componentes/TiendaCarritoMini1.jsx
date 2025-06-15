import React from 'react';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini1.scss';

function TiendaCarritoMini1({ items, total }) {
  return (
    <div className="retro-mini-cart">
      {/* Cinta de cassette decorativa */}
      <div className="cassette-tape"></div>
      
      <h2 className="retro-cart-title">
        <span className="vinyl-icon">◉</span> CARRITO <span className="vinyl-icon">◉</span>
      </h2>
      
      {items.length === 0 ? (
        <p className="retro-empty-cart">¡VACÍO! AÑADE ALGO GROOVY</p>
      ) : (
        <>
          <ul className="retro-mini-list">
            {items.slice(0, 3).map((item, index) => {
              const price = typeof item.precio === 'number' ? item.precio.toFixed(2) : '0.00';
              
              return (
                <li key={index} className="retro-mini-item">
                  <div className="product-image-container">
                    <img
                      src={item.imagen || '/img/default-vinyl.png'}
                      alt={item.nombre || 'Producto'}
                      className="retro-product-image"
                    />
                    <div className="vinyl-ring"></div>
                  </div>
                  <span className="retro-product-name">{item.nombre || 'Producto retro'}</span>
                  <span className="retro-product-price">${price}</span>
                </li>
              );
            })}
          </ul>
          <p className="retro-total">
            TOTAL: <span className="neon">${typeof total === 'number' ? total.toFixed(2) : '0.00'}</span>
          </p>
          <button className="retro-view-more">
            VER MÁS <span className="blink">»</span>
          </button>
        </>
      )}
    </div>
  );
}

export default TiendaCarritoMini1;