import React from 'react';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_TiendaOfertas.scss';

const TiendaOfertas = ({ producto, onEncargar }) => {
  const { id, nombre, precio, imagenes, categoria } = producto;
  const { ofertas } = useOfertas();

  const handleEncargarClick = () => {
    // Efecto de sonido al encargar
    new Audio('/sounds/cash-register.mp3').play().catch(e => console.log(e));
    onEncargar(id);
  };

  return (
    <div className="retro-product-card">
      {/* Etiqueta de oferta estilo cartel de concierto */}
      {ofertas.includes(id) && (
        <div className="retro-offer-tag">
          <span className="offer-text">¡OFERTA!</span>
          <span className="offer-percent">30% OFF</span>
        </div>
      )}
      
      {/* Marco de vinilo para la imagen */}
      <div className="vinyl-product-frame">
        <img
          src={imagenes[0] || '/img/default-vinyl.png'}
          alt={nombre}
          className="retro-product-image"
        />
        <div className="vinyl-center"></div>
      </div>
      
      <h5 className="retro-product-title">{nombre}</h5>
      
      {/* Precio con efecto neón */}
      <h4 className="retro-product-price">
        ${precio.toFixed(2)}
        {ofertas.includes(id) && (
          <span className="original-price">${(precio / 0.7).toFixed(2)}</span>
        )}
      </h4>
      
      {/* Botón estilo pedal de guitarra */}
      {onEncargar && (
        <button
          className="retro-order-button"
          onClick={handleEncargarClick}
        >
          <span className="button-text">ENCARGAR</span>
          <span className="button-light"></span>
        </button>
      )}
    </div>
  );
};

export default TiendaOfertas;