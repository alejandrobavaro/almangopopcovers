import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useOfertas } from "./TiendaOfertasContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainPublicidadSlider.scss';

const MainPublicidadSlider = () => {
  const { ofertas } = useOfertas();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        const productosOfertas = productos.filter((producto) =>
          ofertas.includes(producto.id)
        );
        setProductos(productosOfertas);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, [ofertas]);

  // Configuración del slider futurista
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
    cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)'
  };

  // Componente personalizado para flecha siguiente
  function CyberNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="cyber-arrow cyber-next" onClick={onClick}>
        <div className="cyber-arrow-core"></div>
        <span>⏵</span>
      </div>
    );
  }

  // Componente personalizado para flecha anterior
  function CyberPrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="cyber-arrow cyber-prev" onClick={onClick}>
        <div className="cyber-arrow-core"></div>
        <span>⏴</span>
      </div>
    );
  }

  return (
    <div className="cyber-publicidad-container">
      {/* Barra de escaneo superior */}
      <div className="cyber-scan-bar"></div>
      
      <div className="cyber-slider-wrapper">
        <h2 className="cyber-section-title">
          <span className="cyber-title-badge">RETRO_OFFERS.EXE</span>
        </h2>
        
        {/* Slider principal */}
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
                    />
                    <div className="cyber-slide-glitch"></div>
                  </div>
                  <div className="cyber-price-tag">
                    <span className="cyber-price-currency">$</span>
                    <span className="cyber-price-value">{producto.precio}</span>
                  </div>
                  <div className="cyber-sticker">
                    <span className="cyber-sticker-text">OFFER</span>
                    <span className="cyber-sticker-pulse"></span>
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

        {/* Miniaturas estilo terminal */}
        <h3 className="cyber-thumbnails-title">>> FEATURED_PRODUCTS</h3>
        <div className="cyber-thumbnails-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="cyber-thumbnail">
              <div className="cyber-thumbnail-frame">
                <img
                  src={producto.imagenes[0]}
                  alt={producto.nombre}
                  className="cyber-thumbnail-image"
                />
              </div>
              <div className="cyber-thumbnail-id">[{producto.id}]</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Barra de escaneo inferior */}
      <div className="cyber-scan-bar"></div>
    </div>
  );
};

export default MainPublicidadSlider;