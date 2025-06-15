import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss";
import "../assets/scss/_01-General/_SweetAlert.scss";

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar, updateProductQuantity, concertMode }) => {
  const [localCart, setLocalCart] = useState(cart);
  const [isPaying, setIsPaying] = useState(false);
  const [laserEffect, setLaserEffect] = useState(false);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const total = localCart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  const handleComprar = () => {
    setIsPaying(true);
    setLaserEffect(true);
    
    // Efecto de sonido al comprar
    new Audio('/sounds/guitar-solo.mp3').play().catch(e => console.log(e));
    
    setTimeout(() => {
      handlePagar();
      setIsPaying(false);
      setLaserEffect(false);
      
      Swal.fire({
        title: "ENCORE!",
        html: `
          <div class="confetti-container">
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
          </div>
          <p>YOUR BACKSTAGE PASS IS READY!</p>
          <p class="neon-subtext">Your tour merch is on its way</p>
        `,
        icon: "success",
        background: "#000",
        color: "#fff",
        confirmButtonText: "ROCK ON!",
        customClass: {
          popup: "concert-swal-popup",
          title: "concert-swal-title",
          confirmButton: "concert-swal-button",
          htmlContainer: "concert-swal-html"
        },
        buttonsStyling: false,
        showConfirmButton: true,
        backdrop: `
          rgba(0,0,0,0.8)
          url("/images/light-pattern.gif")
          center top
          no-repeat
        `
      });
    }, 3000);
  };

  const handleQuantityChange = (id, delta) => {
    // Efecto de sonido al cambiar cantidad
    new Audio('/sounds/synth-beep.mp3').play().catch(e => console.log(e));
    
    setLocalCart(prevCart => {
      return prevCart.map(product => 
        product.id === id
          ? { ...product, quantity: Math.max(1, (product.quantity || 1) + delta) }
          : product
      );
    });
    updateProductQuantity(id, (localCart.find(product => product.id === id)?.quantity || 1) + delta);
  };

  return (
    <div className={`concert-cart-container ${concertMode ? 'concert-mode' : ''} ${laserEffect ? 'laser-show' : ''}`}>
      {/* Efecto de luces láser */}
      <div className="laser-effects"></div>
      
      {/* Humo de escenario */}
      <div className="stage-smoke"></div>
      
      {/* Efecto de destello */}
      {laserEffect && <div className="flash-effect"></div>}
      
      <section className="concert-cart-header">
        <h1 className="concert-cart-title">
          <span className="icon">🎸</span> BACKSTAGE PASS <span className="icon">🎤</span>
        </h1>
        <div className="audio-visualizer">
          {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
            <div 
              key={bar} 
              className="visualizer-bar" 
              style={{ 
                height: `${Math.random() * 80 + 20}%`,
                animationDelay: `${bar * 0.05}s`,
                background: concertMode ? `linear-gradient(to top, #ff00ff, #00ffff)` : `linear-gradient(to top, #f4e87c, #ff6b6b)`
              }}
            ></div>
          ))}
        </div>
      </section>

      <div className="concert-cart-content">
        <div className={`concert-summary ${concertMode ? 'neon-border' : ''}`}>
          <h3 className="concert-summary-title">
            {concertMode ? (
              <>
                <span className="neon-text">✦✦✦</span> TOUR MERCH SUMMARY <span className="neon-text">✦✦✦</span>
              </>
            ) : (
              <>
                <span className="highlight">✧✧✧</span> RESUMEN DE COMPRA <span className="highlight">✧✧✧</span>
              </>
            )}
          </h3>

          <div className="concert-cart-details">
            <div className="concert-total-info">
              <p className="concert-total-text">
                TOTAL: <span className={concertMode ? 'neon-cyan' : 'neon'}>{total.toFixed(2)}</span>
              </p>
              <p className="concert-quantity-text">
                ITEMS: <span className={concertMode ? 'neon-pink' : 'neon'}>{localCart.length}</span>
              </p>
            </div>

            <ul className="concert-product-list">
              {localCart.map((product) => (
                <li 
                  key={product.id} 
                  className={`concert-product-item ${concertMode ? 'glow-effect' : ''}`}
                >
                  <div className="product-image-container">
                    <img
                      src={product.imagenes[0]}
                      alt={product.nombre}
                      className="concert-product-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = concertMode ? "/img/default-guitar.png" : "/img/default-vinyl.png";
                      }}
                    />
                    {!concertMode && <div className="vinyl-ring"></div>}
                    {concertMode && <div className="glow-ring"></div>}
                  </div>
                  <div className="concert-product-info">
                    <span className="concert-product-name">{product.nombre}</span>
                    <div className="concert-price-quantity">
                      <span className="concert-product-price">${(product.precio || 0).toFixed(2)}</span>
                      <div className={`concert-quantity-controls ${concertMode ? 'neon-controls' : ''}`}>
                        <button
                          className="concert-quantity-btn"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          −
                        </button>
                        <span className="concert-quantity-display">
                          {product.quantity || 1}
                        </span>
                        <button
                          className="concert-quantity-btn"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="concert-product-desc">
                      {product.descripcion}
                    </div>
                  </div>
                  <button
                    className={`concert-delete-btn ${concertMode ? 'neon-delete' : ''}`}
                    onClick={() => {
                      new Audio(concertMode ? '/sounds/cymbal-crash.mp3' : '/sounds/record-scratch.mp3').play().catch(e => console.log(e));
                      removeFromCart(product.id);
                    }}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="concert-checkout-section">
              <button 
                onClick={handleComprar} 
                className={`concert-checkout-btn ${isPaying ? 'processing' : ''} ${concertMode ? 'neon-btn' : ''}`}
                disabled={isPaying || localCart.length === 0}
              >
                {isPaying ? (
                  <span className="processing-text">
                    {concertMode ? 'ROCKIN\' TRANSACTION...' : 'PROCESANDO...'}
                  </span>
                ) : (
                  <>
                    {concertMode ? (
                      <>
                        <span className="icon">🎸</span> GET TOUR PASS <span className="icon">🎤</span>
                      </>
                    ) : (
                      <>
                        <span className="icon">✧</span> REALIZAR PAGO <span className="icon">✧</span>
                      </>
                    )}
                  </>
                )}
                <div className="audio-loader">
                  {[1, 2, 3, 4, 5, 6].map((bar) => (
                    <div 
                      key={bar} 
                      className="loader-bar" 
                      style={{ 
                        height: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${bar * 0.1}s`,
                        background: concertMode ? 
                          `linear-gradient(to top, ${bar % 2 === 0 ? '#ff00ff' : '#00ffff'}, ${bar % 2 === 0 ? '#9d00ff' : '#00ff9d'})` :
                          `linear-gradient(to top, #f4e87c, #ff6b6b)`
                      }}
                    ></div>
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;