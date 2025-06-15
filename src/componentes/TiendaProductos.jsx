import React, { useState } from 'react';
import TiendaImgAgrandar from './TiendaImgAgrandar';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_TiendaProductos.scss';

function TiendaProductos({ products, addToCart, handleShowDetalle, searchQuery, selectedCategory }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ofertas } = useOfertas();

  const openImageModal = (images, index) => {
    // Efecto de sonido al abrir imagen
    new Audio('/sounds/vinyl-click.mp3').play().catch(e => console.log(e));
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    // Efecto de sonido al añadir al carrito
    new Audio('/sounds/cash-register.mp3').play().catch(e => console.log(e));
    addToCart(product);
  };

  return (
    <div className="retro-products-grid">
      {products.map((product) => (
        <div key={product.id} className="retro-product-card">
          {/* Etiqueta de oferta estilo cartel de concierto */}
          {ofertas.includes(product.id) && (
            <div className="retro-offer-tag">
              <span className="offer-text">¡OFERTA!</span>
              <span className="offer-percent">30% OFF</span>
            </div>
          )}
          
          {/* Marco de vinilo para la imagen */}
          <div className="vinyl-product-frame" onClick={() => openImageModal(product.imagenes, 0)}>
            <img
              src={product.imagenes[0] || '/img/default-vinyl.png'}
              alt={product.nombre}
              className="retro-product-image"
            />
            <div className="vinyl-center"></div>
          </div>
          
          <h5 className="retro-product-title">{product.nombre}</h5>
          
          {/* Precio con efecto neón */}
          <h4 className="retro-product-price">
            ${product.precio.toFixed(2)}
            {ofertas.includes(product.id) && (
              <span className="original-price">${(product.precio / 0.7).toFixed(2)}</span>
            )}
          </h4>
          
          {/* Botón estilo pedal de guitarra */}
          <button
            className="retro-add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            <span className="button-text">AÑADIR AL CARRITO</span>
            <span className="button-light"></span>
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