import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainPublicidadSlider.scss';

const MainPublicidadSlider = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const productos = await response.json();
        
        // Mostramos solo productos destacados
        const productosDestacados = productos.filter(producto => producto.destacado);
        
        setProductos(productosDestacados);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // Configuración del slider responsive
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <CyberNextArrow />,
    prevArrow: <CyberPrevArrow />,
    fade: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  function CyberNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="cyber-arrow cyber-next" onClick={onClick} aria-label="Next slide">
        <div className="cyber-arrow-core"></div>
        <span>⏵</span>
      </div>
    );
  }

  function CyberPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="cyber-arrow cyber-prev" onClick={onClick} aria-label="Previous slide">
        <div className="cyber-arrow-core"></div>
        <span>⏴</span>
      </div>
    );
  }

  const handleImageError = (e) => {
    e.target.src = '/img/placeholder-product.jpg';
    e.target.alt = 'Imagen no disponible';
  };

  if (loading) {
    return (
      <div className="cyber-publicidad-container">
        <div className="cyber-loading">
          <div className="cyber-spinner"></div>
          <p>CARGANDO PRODUCTOS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cyber-publicidad-container">
        <div className="cyber-error">
          <p>ERROR AL CARGAR LOS PRODUCTOS: {error}</p>
        </div>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="cyber-publicidad-container">
        <div className="cyber-empty">
          <p>EXPLORA NUESTROS PRODUCTOS PRÓXIMAMENTE</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cyber-publicidad-container">
      <div className="cyber-scan-bar"></div>
      
      <div className="cyber-slider-wrapper">
        <h2 className="cyber-section-title">
          <span className="cyber-title-badge">
            PRODUCTOS DESTACADOS
          </span>
        </h2>
        
        <div className="cyber-main-slider">
          <Slider {...settings}>
            {productos.map((producto) => (
              <div key={producto.id} className="cyber-slide">
                <div className="cyber-slide-content">
                  <div className="cyber-slide-hologram">
                    <img
                      src={producto.imagenes[0]}
                      alt={producto.nombre}
                      className="cyber-slide-image"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="cyber-slide-glitch"></div>
                  </div>
                  <div className="cyber-price-tag">
                    <span className="cyber-price-currency">$</span>
                    <span className="cyber-price-value">
                      {new Intl.NumberFormat('es-AR').format(producto.precio)}
                    </span>
                  </div>
                  <div className="cyber-product-info">
                    <h3 className="cyber-product-name">{producto.nombre}</h3>
                    <p className="cyber-product-code">ID: {producto.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <h3 className="cyber-thumbnails-title">MÁS PRODUCTOS</h3>
        <div className="cyber-thumbnails-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="cyber-thumbnail">
              <div className="cyber-thumbnail-frame">
                <img
                  src={producto.imagenes[0]}
                  alt={producto.nombre}
                  className="cyber-thumbnail-image"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <div className="cyber-thumbnail-id">[{producto.id}]</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cyber-scan-bar"></div>
    </div>
  );
};

export default MainPublicidadSlider;