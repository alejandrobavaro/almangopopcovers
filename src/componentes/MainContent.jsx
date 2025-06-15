import React from "react";
import '../assets/scss/_03-Componentes/_MainContent.scss';

function MainContent() {
  // Lista de imágenes para los discos de vinilo
  const vinylRecords = [
    { id: 1, src: "/img/retro-vinyl-1.png", alt: "Vinilo 70s", title: "VINILO 70S", year: "RETRO EDITION", format: "ANALOG VINYL" },
    { id: 2, src: "/img/retro-vinyl-2.png", alt: "Vinilo 80s", title: "VINILO 80S", year: "RETRO EDITION", format: "ANALOG VINYL" },
    { id: 3, src: "/img/retro-vinyl-3.png", alt: "Vinilo 90s", title: "VINILO 90S", year: "RETRO EDITION", format: "ANALOG VINYL" }
  ];

  // Lista de imágenes para los cassettes
  const cassettes = [
    { id: 1, src: "/img/retro-cassette-1.png", alt: "Cassette 70s", title: "CASSETTE 70S", year: "RETRO EDITION", format: "MAGNETIC TAPE" },
    { id: 2, src: "/img/retro-cassette-2.png", alt: "Cassette 80s", title: "CASSETTE 80S", year: "RETRO EDITION", format: "MAGNETIC TAPE" },
    { id: 3, src: "/img/retro-cassette-3.png", alt: "Cassette 90s", title: "CASSETTE 90S", year: "RETRO EDITION", format: "MAGNETIC TAPE" }
  ];

  return (
    <main className="cyber-main-content">
      {/* Sección de discos de vinilo */}
      <div className="cyber-media-section">
        <h2 className="cyber-section-title">
          <span className="cyber-title-gradient">ANALOG</span>
          <span className="cyber-title-outline">VINYLS</span>
        </h2>
        
        <div className="cyber-media-grid">
          {vinylRecords.map((item) => (
            <div key={item.id} className="cyber-media-card">
              <div className="cyber-media-hologram">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="cyber-media-image spinning"
                />
                <div className="cyber-media-glitch"></div>
              </div>
              <div className="cyber-media-info">
                <h3 className="cyber-media-title">{item.title}</h3>
                <div className="cyber-media-meta">
                  <span className="cyber-media-year">{item.year}</span>
                  <span className="cyber-media-format">{item.format}</span>
                </div>
                <div className="cyber-media-actions">
                  <button className="cyber-media-button">
                    <span className="cyber-button-hover"></span>
                    PLAY
                  </button>
                  <button className="cyber-media-button alt">
                    <span className="cyber-button-hover"></span>
                    COLLECT
                  </button>
                </div>
              </div>
              <div className="cyber-media-reflection"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Divisor futurista */}
      <div className="cyber-divider">
        <div className="cyber-divider-line"></div>
        <div className="cyber-divider-icon">⚡</div>
        <div className="cyber-divider-line"></div>
      </div>

      {/* Sección de cassettes */}
      <div className="cyber-media-section">
        <h2 className="cyber-section-title">
          <span className="cyber-title-gradient">MAGNETIC</span>
          <span className="cyber-title-outline">TAPES</span>
        </h2>
        
        <div className="cyber-media-grid">
          {cassettes.map((item) => (
            <div key={item.id} className="cyber-media-card">
              <div className="cyber-media-hologram">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="cyber-media-image"
                />
                <div className="cyber-media-glitch"></div>
              </div>
              <div className="cyber-media-info">
                <h3 className="cyber-media-title">{item.title}</h3>
                <div className="cyber-media-meta">
                  <span className="cyber-media-year">{item.year}</span>
                  <span className="cyber-media-format">{item.format}</span>
                </div>
                <div className="cyber-media-actions">
                  <button className="cyber-media-button">
                    <span className="cyber-button-hover"></span>
                    PLAY
                  </button>
                  <button className="cyber-media-button alt">
                    <span className="cyber-button-hover"></span>
                    COLLECT
                  </button>
                </div>
              </div>
              <div className="cyber-media-reflection"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección del logo */}
      <div className="cyber-logo-section">
        <img
          src="/img/retro-main-logo.png"
          alt="Almango Pop Covers"
          className="cyber-main-logo"
        />
        <div className="cyber-tagline">
          <span>//</span> REVIVE THE ANALOG SOUND <span>//</span>
        </div>
      </div>
    </main>
  );
}

export default MainContent;