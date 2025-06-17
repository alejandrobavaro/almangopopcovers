import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainPublicidadSlider.scss';

const MainPublicidadSlider = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) {
          throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        const data = await response.json();
        const productosDestacados = data.filter(producto => producto.destacado);
        setProductos(productosDestacados);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const handleImageError = (e) => {
    e.target.src = '/img/placeholder-product.jpg';
    e.target.alt = 'Imagen no disponible';
  };

  if (loading) {
    return (
      <div className="publicidad-loading">
        <div className="loading-spinner"></div>
        <p>CARGANDO PRODUCTOS DESTACADOS...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="publicidad-error">
        <p>ERROR AL CARGAR PRODUCTOS</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="publicidad-empty">
        <p>NO HAY PRODUCTOS DESTACADOS DISPONIBLES</p>
      </div>
    );
  }

  return (
    <section className="publicidad-container">
      <div className="publicidad-header">
        <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
        <div className="slider-indicator">
          {activeSlide + 1} / {productos.length}
        </div>
      </div>

      <div className="main-slider-container">
        <Slider {...settings}>
          {productos.map((producto) => (
            <div key={producto.id} className="product-slide">
              <div className="slide-image-container">
                <img
                  src={producto.imagenes[0]}
                  alt={producto.nombre}
                  className="product-image"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{producto.nombre}</h3>
                <p className="product-description">{producto.descripcion}</p>
                
                <div className="product-meta">
                  <span className="product-price">
                    ${new Intl.NumberFormat('es-AR').format(producto.precio)}
                  </span>
                  <span className="product-id">ID: {producto.id}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="thumbnails-container">
        <h3 className="thumbnails-title">EXPLORAR MÁS PRODUCTOS</h3>
        <div className="thumbnails-grid">
          {productos.map((producto, index) => (
            <div 
              key={producto.id} 
              className={`thumbnail-item ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            >
              <img
                src={producto.imagenes[0]}
                alt={producto.nombre}
                className="thumbnail-image"
                onError={handleImageError}
                loading="lazy"
              />
              <span className="thumbnail-label">{producto.nombre.substring(0, 15)}...</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPublicidadSlider;