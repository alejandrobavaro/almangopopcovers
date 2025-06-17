import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_MainContent.scss";
import MainHero from "../componentes/MainHero";
import MainIntegrantes from "../componentes/MainIntegrantes";
import MainElEspectaculo from "../componentes/MainElEspectaculo";
import MainSobreLaBanda from "../componentes/MainSobreLaBanda";
import MainShowsDestacados from "../componentes/MainShowsDestacados";
import MainNuestrosServicios from "../componentes/MainNuestrosServicios";
import MainLoQueDicenFans from "../componentes/MainLoQueDicenFans";
import ContactoProfesional from "../componentes/ContactoProfesional";

const MainContent = () => {
  const [datos, setDatos] = useState({
    cargando: true,
    error: null,
    infoBanda: {
      nombre: "Almango Pop Covers",
      eslogan: "La mejor experiencia musical",
      descripcion: "Banda especializada en covers de pop, rock y dance.",
      añosActivos: 10,
      showsRealizados: 250,
      paises: ["Argentina", "Uruguay"]
    },
    integrantes: [],
    descripcionCreativa: [],
    showsDestacados: [],
    servicios: [],
    testimonios: []
  });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const urls = [
          '/integrantes.json',
          '/descripcion-creativa.json',
          '/shows-destacados.json',
          '/servicios.json',
          '/testimonios.json'
        ];

        const responses = await Promise.all(
          urls.map(url => 
            fetch(url)
              .then(res => {
                if (!res.ok) throw new Error(`Error ${res.status}`);
                return res.json();
              })
              .catch(error => {
                console.error(`Error cargando ${url}:`, error);
                return null;
              })
          )
        );

        setDatos({
          ...datos,
          cargando: false,
          integrantes: responses[0] || [],
          descripcionCreativa: responses[1] || [],
          showsDestacados: responses[2] || [],
          servicios: responses[3] || [],
          testimonios: responses[4] || []
        });

      } catch (error) {
        console.error("Error cargando datos:", error);
        setDatos(prev => ({
          ...prev,
          cargando: false,
          error: "Error al cargar los datos"
        }));
      }
    };

    cargarDatos();
  }, []);

  if (datos.cargando) {
    return (
      <main className="cyberpunk-main">
        <div className="cyberpunk-loader">
          <div className="cyberpunk-spinner"></div>
          <p className="cyberpunk-loader-text">CARGANDO DATOS...</p>
        </div>
      </main>
    );
  }

  if (datos.error) {
    return (
      <main className="cyberpunk-main">
        <div className="cyberpunk-error">
          <p className="cyberpunk-error-text">ERROR: {datos.error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="cyberpunk-main">
      <MainHero 
        nombreBanda={datos.infoBanda.nombre} 
        eslogan={datos.infoBanda.eslogan} 
      />
      
      <section className="cyberpunk-section">
        <MainIntegrantes integrantes={datos.integrantes} />
      </section>
      
      <section className="cyberpunk-section cyberpunk-section--alt">
        <MainElEspectaculo descripcionCreativa={datos.descripcionCreativa} />
      </section>
      
      <section className="cyberpunk-section">
        <MainSobreLaBanda infoBanda={datos.infoBanda} />
      </section>
      
      <section className="cyberpunk-section cyberpunk-section--alt">
        <MainShowsDestacados showsDestacados={datos.showsDestacados} />
      </section>
      
      <section className="cyberpunk-section">
        <MainNuestrosServicios servicios={datos.servicios} />
      </section>
      
      <section className="cyberpunk-section cyberpunk-section--alt">
        <MainLoQueDicenFans testimonios={datos.testimonios} />
      </section>
      
      <section className="cyberpunk-section">
        <ContactoProfesional />
      </section>
    </main>
  );
};

export default MainContent;