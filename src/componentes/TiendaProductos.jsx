import React, { useState } from 'react';
import TiendaImgAgrandar from './TiendaImgAgrandar';
import '../assets/scss/_03-Componentes/_TiendaProductos.scss';

function TiendaProductos({ products, addToCart, handleShowDetalle, searchQuery, selectedCategory }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (images, index) => {
    new Audio('/audio/hologram-interaction.mp3').play().catch(e => console.log(e));
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    new Audio('/audio/digital-transaction.mp3').play().catch(e => console.log(e));
    addToCart(product);
  };

  return (
    <div className="cyber-products-grid">
      {products.map((product) => (
        <div key={product.id} className="cyber-product-card">
          {/* Contenedor de imagen con efecto holográfico */}
          <div 
            className="cyber-product-image-container" 
            onClick={() => openImageModal(product.imagenes, 0)}
          >
            <img
              src={product.imagenes[0] || '/img/default-hologram.webp'}
              alt={product.nombre}
              className="cyber-product-image"
            />
            <div className="cyber-image-glitch"></div>
            <div className="cyber-image-scanlines"></div>
          </div>
          
          <h3 className="cyber-product-title">
            <span className="cyber-product-code">>></span> {product.nombre}
          </h3>
          
          {/* Precio con estilo terminal */}
          <div className="cyber-product-price">
            <span className="cyber-price-value">${product.precio.toFixed(2)}</span>
          </div>
          
          {/* Botón estilo interfaz cyberpunk */}
          <button
            className="cyber-add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            <span className="cyber-btn-text">[AÑADIR_AL_CARRITO]</span>
            <span className="cyber-btn-glow"></span>
          </button>
        </div>
      ))}
      
      {isModalOpen && (
        <TiendaImgAgrandar
          images={selectedImages}
          isOpen={isModalOpen}
          closeModal={closeImageModal}
        />
      )}
    </div>
  );
}

export default TiendaProductos;