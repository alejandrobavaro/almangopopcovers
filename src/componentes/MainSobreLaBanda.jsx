import React from "react";

const MainSobreLaBanda = ({ bandInfo = {} }) => {
  const defaultInfo = {
    description: "Información sobre la banda no disponible temporalmente.",
    activeYears: 0,
    shows: 0,
    countries: []
  };

  const data = { ...defaultInfo, ...bandInfo };

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">SOBRE LA BANDA</h2>
          <div className="about__divider"></div>
        </div>
        
        <div className="about__content">
          <div className="about__image">
            <img 
              src="/img/banda/ensayo.jpg" 
              alt="Ensayo de la banda" 
              className="about__img"
              onError={(e) => {
                e.target.src = '/img/banda/default.jpg';
              }}
            />
          </div>
          <div className="about__info">
            <p className="about__description">{data.description}</p>
            <div className="about__stats">
              <div className="stat__item">
                <span className="stat__number">{data.activeYears}</span>
                <span className="stat__label">Años activos</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">{data.shows}</span>
                <span className="stat__label">Shows</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">{data.countries.length}</span>
                <span className="stat__label">Países</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSobreLaBanda;