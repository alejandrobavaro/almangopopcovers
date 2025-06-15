import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
  };

  return (
    <div className="cyber-contact-form-slider">
      {/* Efecto de borde neón */}
      <div className="cyber-border-glow"></div>
      
      <div className="cyber-form-slider-container">
        {/* Formulario estilo terminal */}
        <div className="cyber-form-column">
          <h2 className="cyber-form-title" data-text="CONTÁCTANOS">
            CONTÁCTANOS
          </h2>
          
          <form
            className="cyber-contact-form"
            action="https://formspree.io/f/xbjnlgzz"
            target="_blank"
            method="post"
          >
            <div className="cyber-form-group">
              <label htmlFor="nombre">
                <span className="cyber-input-prefix">></span> NOMBRE:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="INGRESA_TU_NOMBRE"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="telefono">
                <span className="cyber-input-prefix">></span> TELÉFONO:
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="INGRESA_TU_TELÉFONO"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="email">
                <span className="cyber-input-prefix">></span> EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="INGRESA_TU_EMAIL"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="asunto">
                <span className="cyber-input-prefix">></span> ASUNTO:
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="DESCRIBE_EL_ASUNTO"
                required
              />
              <div className="cyber-input-line"></div>
            </div>
            
            <div className="cyber-form-group">
              <label htmlFor="mensaje">
                <span className="cyber-input-prefix">></span> MENSAJE:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="ESCRIBE_TU_MENSAJE_AQUÍ..."
                required
              ></textarea>
              <div className="cyber-textarea-line"></div>
            </div>
            
            <button type="submit" className="cyber-submit-btn">
              <span className="btn-text">ENVIAR_MENSAJE</span>
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>

        {/* Carrusel de discos holográficos */}
        <div className="cyber-slider-column">
          <h2 className="cyber-slider-title">
            <span className="cyber-title-highlight">COLECCIÓN_DIGITAL</span>
          </h2>
          
        
        </div>
      </div>

      {/* Efecto de scanlines */}
      <div className="cyber-scanlines"></div>
    </div>
  );
};

export default ContactoFormularioSlider;