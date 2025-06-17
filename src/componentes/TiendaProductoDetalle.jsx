import React from "react";
import '../assets/scss/_03-Componentes/_TiendaProductoDetalle.scss';

const TiendaProductoDetalle = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="cyber-product-detail">
      {/* Barra de escaneo superior */}
      <div className="cyber-scan-bar"></div>
      
      <h3 className="cyber-detail-title">
        <span className="cyber-prompt">»</span> DETALLES DEL PRODUCTO <span className="cyber-prompt">«</span>
      </h3>
      
      <div className="cyber-detail-content">
        {/* Imagen con efecto holográfico */}
        <div className="cyber-image-container">
          <img 
            src={producto.imagenes[0] || '/img/default-hologram.webp'} 
            alt={producto.nombre} 
            className="cyber-product-image"
            loading="lazy"
          />
          <div className="cyber-image-glitch"></div>
          <div className="cyber-image-glow"></div>
        </div>
        
        <div className="cyber-detail-info">
          <div className="cyber-detail-item">
            <span className="cyber-detail-label">» NOMBRE:</span> 
            <span className="cyber-detail-value">{producto.nombre}</span>
          </div>
          
          <div className="cyber-detail-item">
            <span className="cyber-detail-label">» PRECIO:</span> 
            <span className="cyber-detail-value cyber-price">${producto.precio.toFixed(2)}</span>
          </div>
          
          <div className="cyber-detail-item">
            <span className="cyber-detail-label">» CATEGORÍA:</span> 
            <span className="cyber-detail-value">{producto.categoria}</span>
          </div>
          
          <div className="cyber-detail-item">
            <span className="cyber-detail-label">» DESCRIPCIÓN:</span> 
            <span className="cyber-detail-value cyber-description">{producto.descripcion}</span>
          </div>
        </div>
      </div>

      {/* Barra de escaneo inferior */}
      <div className="cyber-scan-bar"></div>
    </div>
  );
};

export default TiendaProductoDetalle;