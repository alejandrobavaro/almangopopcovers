import React from "react";

const MainNuestrosServicios = ({ services = [] }) => {
  if (services.length === 0) {
    return (
      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">NUESTROS SERVICIOS</h2>
            <div className="services__divider"></div>
            <p className="services__message">Información de servicios no disponible temporalmente</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">NUESTROS SERVICIOS</h2>
          <div className="services__divider"></div>
        </div>
        
        <div className="services__grid">
          {services.map(service => (
            <div key={service.id} className="service__card">
              <h3 className="service__name">{service.name}</h3>
              <p className="service__description">{service.description}</p>
              <div className="service__price">
                ${service.price.toLocaleString('es-AR')}
              </div>
              <button className="service__button">
                <span className="button__text">CONTRATAR</span>
                <span className="button__hover"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNuestrosServicios;