import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import Swal from "sweetalert2";
import ProductosTienda from "./TiendaProductos";
import TiendaCarritoMini2 from "./TiendaCarritoMini2";
import TiendaProductoDetalle from "./TiendaProductoDetalle";

import TiendaModalInicio from "./TiendaModalInicio";

import '../assets/scss/_03-Componentes/_Tienda.scss';
import '../assets/scss/_01-General/_Toastify.scss';

function Tienda({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showModal, setShowModal] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [stageLights, setStageLights] = useState(false);

  // Nuevo estado para el modo concierto
  const [concertMode, setConcertMode] = useState(false);

  useEffect(() => {
    const cargarProductosDesdeJSON = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProducts(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    cargarProductosDesdeJSON();
  }, []);

  const toggleConcertMode = () => {
    setConcertMode(!concertMode);
    if (!concertMode) {
      new Audio('/sounds/crowd-cheer.mp3').play().catch(e => console.log(e));
      setStageLights(true);
      setTimeout(() => setStageLights(false), 3000);
    }
  };

  const handleShowDetalle = (producto) => {
    setDetalle(producto);
    new Audio('/sounds/guitar-riff.mp3').play().catch(e => console.log(e));
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
    
    Toastify({
      text: `🎸 ${producto.nombre.toUpperCase()} ADDED TO CART! 🎤`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        color: "#000",
        border: "2px solid #fff",
        boxShadow: "0 0 20px #ff00ff, 0 0 40px #00ffff",
        fontWeight: "bold",
        letterSpacing: "1px",
        textShadow: "0 0 5px #fff"
      },
      className: "toastify-tienda-neon",
    }).showToast();
  };

  const handleClearCart = () => {
    Swal.fire({
      title: 'CLEAR YOUR BACKSTAGE?',
      text: "All your tour merch will disappear!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff00ff',
      cancelButtonColor: '#00ffff',
      confirmButtonText: 'YES, ROCK OUT!',
      cancelButtonText: 'KEEP SHOPPING',
      background: '#000',
      color: '#fff',
      customClass: {
        popup: 'neon-swal',
        confirmButton: 'neon-swal-button',
        cancelButton: 'neon-swal-button'
      },
      backdrop: `
        rgba(0,0,0,0.8)
        url("/images/light-pattern.gif")
        center top
        no-repeat
      `
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Toastify({
          text: "🎤 CART CLEARED! ENCORE? 🎸",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(90deg, #000, #222)",
            color: "#ff00ff",
            border: "2px solid #00ffff",
            boxShadow: "0 0 20px #ff00ff, 0 0 40px #00ffff",
            fontWeight: "bold",
            letterSpacing: "1px",
            textShadow: "0 0 5px #fff"
          },
          className: "toastify-tienda-neon",
        }).showToast();
      }
    });
  };

  const filteredProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'Todos' || product.categoria === selectedCategory)
  );

  const categories = ['Todos', ...new Set(products.map((product) => product.categoria))];

  return (
    <div className={`concert-tienda-container ${isPlaying ? 'pulse-effect' : ''} ${concertMode ? 'concert-mode' : ''}`}>
      {/* Efecto de luces de escenario */}
      {stageLights && <div className="stage-lights"></div>}
      
      {/* Efecto de humo de concierto */}
      <div className="smoke-effect"></div>
      
   
      
      <div className="concert-tienda-content">
        <ProductosTienda
          products={filteredProducts}
          addToCart={handleAddToCart}
          handleShowDetalle={handleShowDetalle}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          concertMode={concertMode}
        />
        
        <TiendaCarritoMini2
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={handleClearCart}
          concertMode={concertMode}
        />
        
        {detalle && (
          <TiendaProductoDetalle 
            producto={detalle} 
            onClose={() => setDetalle(null)}
            concertMode={concertMode}
          />
        )}
        
        {showModal && (
          <TiendaModalInicio 
            showModal={showModal} 
            closeModal={() => setShowModal(false)}
            concertMode={concertMode}
          />
        )}
      </div>
      
      {/* Audio ambiente */}
      <audio 
        src="/sounds/concert-ambience.mp3" 
        loop 
        autoPlay={concertMode}
        volume={0.3}
      />
    </div>
  );
}

export default Tienda;