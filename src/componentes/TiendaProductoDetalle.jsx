import React from "react";
import '../assets/scss/_03-Componentes/_TiendaProductoDetalle.scss';

const TiendaProductoDetalle = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="retro-product-detail">
      {/* Cinta de cassette decorativa */}
      <div className="cassette-tape"></div>
      
      <h4 className="retro-detail-title">
        <span className="vinyl-icon">◉</span> DETALLES DEL PRODUCTO <span className="vinyl-icon">◉</span>
      </h4>
      
      <div className="retro-detail-content">
        {/* Imagen estilo vinilo */}
        <div className="detail-vinyl-frame">
          <img 
            src={producto.imagenes[0] || '/img/default-vinyl.png'} 
            alt={producto.nombre} 
            className="detail-product-image"
          />
          <div className="vinyl-center"></div>
        </div>
        
        <div className="retro-detail-info">
          <p className="retro-detail-item">
            <span className="detail-label">NOMBRE:</span> 
            <span className="detail-value">{producto.nombre}</span>
          </p>
          
          <p className="retro-detail-item">
            <span className="detail-label">PRECIO:</span> 
            <span className="detail-value neon">${producto.precio.toFixed(2)}</span>
          </p>
          
          <p className="retro-detail-item">
            <span className="detail-label">CATEGORÍA:</span> 
            <span className="detail-value">{producto.categoria}</span>
          </p>
          
          <p className="retro-detail-item">
            <span className="detail-label">DESCRIPCIÓN:</span> 
            <span className="detail-value description">{producto.descripcion}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TiendaProductoDetalle;