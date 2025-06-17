import React, { useEffect } from "react";

const MainHero = ({ bandName, tagline }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.hero__flicker');
      elements.forEach(el => {
        el.style.opacity = Math.random() > 0.8 ? '0.7' : '1';
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__image">
          <img 
            src="/img/04-img-banners/banner4.png" 
            alt={`${bandName} en vivo`} 
            className="hero__img"
          />
          <div className="hero__overlay">
            <div className="hero__grid"></div>
            <div className="hero__scanlines"></div>
          </div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title hero__flicker">{bandName}</h1>
          <p className="hero__tagline hero__flicker">{tagline}</p>
          <div className="hero__glitch" data-text={bandName}></div>
          <div className="hero__cta">
            <span className="hero__arrow">▼</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;