import React from "react";

const MainNuestrosServicios = () => {
  const services = [
    {
      id: 1,
      nombre: "SHOW ESTÁNDAR",
      descripcion: "2 horas de música con 4 músicos en escena. Incluye equipo de sonido básico y playlist de 25 éxitos de los 70s, 80s y 90s. Perfecto para bares y eventos medianos.",
      precio: 150000,
      destacado: false,
      incluye: [
        "4 músicos en escena",
        "Equipo de sonido básico",
        "25 canciones clásicas",
        "2 horas de show"
      ]
    },
    {
      id: 2,
      nombre: "SHOW PREMIUM",
      descripcion: "3 horas con 6 músicos, 2 bailarines y producción completa. Incluye equipo profesional de sonido e iluminación, más 3 cambios de vestuario temáticos.",
      precio: 250000,
      destacado: true,
      incluye: [
        "6 músicos + 2 bailarines",
        "Sonido profesional",
        "Iluminación espectacular",
        "3 cambios de vestuario",
        "Playlist personalizable"
      ]
    },
    {
      id: 3,
      nombre: "EVENTOS PRIVADOS",
      descripcion: "Show personalizado con repertorio a elección. Incluye reunión previa para seleccionar canciones y adaptarnos a la temática de tu evento.",
      precio: 180000,
      destacado: false,
      incluye: [
        "Repertorio personalizado",
        "4-6 músicos (a elección)",
        "Equipo de sonido completo",
        "Coordinación previa",
        "Temática especial"
      ]
    },
    {
      id: 4,
      nombre: "FIESTAS TEMÁTICAS",
      descripcion: "Paquete completo para fiestas década específica (70s, 80s o 90s). Incluye decoración, vestuario del personal y playlist 100% temática.",
      precio: 300000,
      destacado: false,
      incluye: [
        "Show 100% temático",
        "Decoración incluida",
        "Vestuario acorde",
        "DJ para entreactos",
        "4 horas de servicio"
      ]
    },
    {
      id: 5,
      nombre: "CORPORATIVOS",
      descripcion: "Espectáculo adaptado para empresas, con opción de branding en escenario y repertorio seleccionado para el público ejecutivo.",
      precio: 320000,
      destacado: false,
      incluye: [
        "Repertorio ejecutivo",
        "Branding personalizado",
        "Sonido de alta gama",
        "Show acústico opcional",
        "Coordinación con RRHH"
      ]
    },
    {
      id: 6,
      nombre: "WEDDING BAND",
      descripcion: "Servicio completo para bodas, desde ceremonia hasta after party. Incluye versión acústica para el civil y show completo para la fiesta.",
      precio: 350000,
      destacado: true,
      incluye: [
        "Ceremonia acústica",
        "Show completo para fiesta",
        "Primer baile personalizado",
        "Playlist romántica adicional",
        "10 horas de servicio"
      ]
    },
    {
      id: 7,
      nombre: "SHOW ACÚSTICO",
      descripcion: "Versión íntima con 3 músicos, ideal para restaurantes, cócteles y eventos elegantes. Incluye versiones acústicas de los clásicos.",
      precio: 120000,
      destacado: false,
      incluye: [
        "Formato acústico",
        "3 músicos versátiles",
        "Ambiente sofisticado",
        "2 sets de 45 minutos",
        "Repertorio adaptable"
      ]
    },
    {
      id: 8,
      nombre: "GIRAS REGIONALES",
      descripcion: "Paquete completo para múltiples presentaciones en distintas locaciones. Incluye transporte, alojamiento y producción completa.",
      precio: 800000,
      destacado: false,
      incluye: [
        "3-5 shows en región",
        "Producción viajera",
        "Equipo completo",
        "Personal de apoyo",
        "Logística incluida"
      ]
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">NUESTROS SERVICIOS</h2>
          <div className="services__divider"></div>
          <p className="services__subtitle">Paquetes personalizables para cada tipo de evento</p>
        </div>
        
        <div className="services__grid">
          {services.map(service => (
            <div key={service.id} className={`service__card ${service.destacado ? 'service__card--featured' : ''}`}>
              <div className="service__header">
                <h3 className="service__name">{service.nombre}</h3>
                {service.destacado && <div className="service__badge">POPULAR</div>}
              </div>
              <p className="service__description">{service.descripcion}</p>
              
              <div className="service__includes">
                <h4 className="includes__title">INCLUYE:</h4>
                <ul className="includes__list">
                  {service.incluye.map((item, index) => (
                    <li key={index} className="includes__item">
                      <span className="includes__icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service__price">
                ${service.precio.toLocaleString('es-AR')}
                <span className="price__note">+ IVA</span>
              </div>
              
              <button className="service__button">
                <span className="button__text">CONTRATAR</span>
                <span className="button__hover"></span>
              </button>
              
              <div className="service__footer">
                <span className="footer__text">Consultar por descuentos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainNuestrosServicios;