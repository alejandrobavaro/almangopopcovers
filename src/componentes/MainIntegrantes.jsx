import React, { useState, useEffect } from "react";
import '../assets/scss/_03-Componentes/_MainIntegrantes.scss';

const MainIntegrantes = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Datos integrados directamente en el componente
  const members = [
    {
      id: 1,
      name: "Ale Gondra",
      role: "Voz líder/Guitarra/Coros/Producción",
      bio: "Fundador y arquitecto del sonido Almango. Con más de 15 años en la escena musical, Ale combina su formación clásica con técnicas de producción vanguardistas. Sus riffs de guitarra son reconocidos por su firma digital-glitch única.",
      details: [
        { label: "Influencias", value: "Deftones, Radiohead, Nine Inch Nails" },
        { label: "Equipo", value: "Gibson Futura X-7, SynthWave Pro" },
        { label: "Fun Fact", value: "Diseñó el algoritmo de distorsión 'NeonFuzz'" }
      ],
      image: "/img/integrantes/integrante1a.jpg",
      stats: {
        creativity: 95,
        tech: 88,
        stage: 90
      }
    },
    {
      id: 2,
      name: "Pato Conti",
      role: "Voz líder/Teclados/Coros",
      bio: "El arquitecto sonoro detrás de los paisajes digitales de Almango. Pato domina tanto sintetizadores vintage como los últimos módulos Eurorack, creando atmósferas que oscilan entre lo orgánico y lo artificial.",
      details: [
        { label: "Setup", value: "Moog Sub37, Roland Gaia 2" },
        { label: "Specialty", value: "Diseño de patches holográficos" },
        { label: "Trivia", value: "Ex-programador de inteligencia artificial musical" }
      ],
      image: "/img/integrantes/integrante2a.jpg",
      stats: {
        creativity: 92,
        tech: 95,
        stage: 85
      }
    },
    {
      id: 3,
      name: "Nicolas Traffi",
      role: "Bajo/Coros",
      bio: "El latido cyborg de la banda. Nico fusiona grooves funk con líneas de bajo glitch, utilizando técnicas extendidas y un rig personalizado que incluye filtros granuladores en tiempo real.",
      details: [
        { label: "Signature", value: "Bajo 6 cuerdas modulado" },
        { label: "Técnica", value: "Slap holográfico (patentado)" },
        { label: "Secreto", value: "Desarrolló el plugin 'BassWave X9'" }
      ],
      image: "/img/integrantes/integrante3a.jpg",
      stats: {
        creativity: 90,
        tech: 85,
        stage: 92
      }
    },
    {
      id: 4,
      name: "Santi Sottille",
      role: "Batería",
      bio: "El motor rítmico cuántico. Santi programa patrones de drum machine con ejecución acústica, usando un kit híbrido que responde a gestos y dispara samples espacializados en 360°.",
      details: [
        { label: "Kit", value: "Acústico-electrónico hybrid V3.4" },
        { label: "Estilo", value: "Neuro-glitch con raíces jazz" },
        { label: "Logro", value: "Récord BPM humano-máquina: 280" }
      ],
      image: "/img/integrantes/integrante4a.jpg",
      stats: {
        creativity: 88,
        tech: 90,
        stage: 94
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentMember(prev => (prev + 1) % members.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovering, members.length]);

  const renderStatBars = (stats) => {
    return Object.entries(stats).map(([key, value]) => (
      <div key={key} className="bio__stat">
        <span className="bio__stat-label">{key.toUpperCase()}</span>
        <div className="bio__stat-bar">
          <div 
            className="bio__stat-fill"
            style={{ width: `${value}%` }}
            data-value={value}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section className="cyber-magazine">
      <div className="cyber-magazine__container">
        <div className="cyber-magazine__header">
          <h2 className="cyber-magazine__title">
            <span className="cyber-flicker">✧</span> INTEGRANTES <span className="cyber-flicker">✧</span>
          </h2>
          <p className="cyber-magazine__subtitle">LA ALMANGO POP COVERS BAND</p>
        </div>

        <div className="cyber-magazine__content">
          {members.map((member, index) => (
            <article 
              key={member.id} 
              className={`cyber-profile ${index === currentMember ? 'active' : ''}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="cyber-profile__visual">
                <div className="cyber-hologram">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="cyber-hologram__image"
                  />
                  <div className="cyber-hologram__glow"></div>
                  <div className="cyber-hologram__grid"></div>
                  <div className="cyber-hologram__scanline"></div>
                </div>
                
                <div className="cyber-profile__badges">
                  <span className="cyber-badge cyber-badge--primary">ID: {member.id.toString(16).toUpperCase()}</span>
                  <span className="cyber-badge cyber-badge--secondary">{member.role}</span>
                </div>
              </div>
              
              <div className="cyber-profile__data">
                <h3 className="cyber-profile__name">
                  <span className="cyber-underline">{member.name}</span>
                </h3>
                
                <div className="cyber-profile__stats">
                  {renderStatBars(member.stats)}
                </div>
                
                <div className="cyber-profile__bio">
                  <h4 className="cyber-profile__section-title">
                    <span className="cyber-flicker">//</span> BIO
                  </h4>
                  <p className="cyber-profile__text">{member.bio}</p>
                </div>
                
                <div className="cyber-profile__details">
                  <h4 className="cyber-profile__section-title">
                    <span className="cyber-flicker">//</span> SPECS
                  </h4>
                  <ul className="cyber-details__list">
                    {member.details.map((detail, i) => (
                      <li key={i} className="cyber-details__item">
                        <span className="cyber-details__label">{detail.label}</span>
                        <span className="cyber-details__value">{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
          
          <div className="cyber-magazine__controls">
            {members.map((_, index) => (
              <button 
                key={index}
                className={`cyber-control__dot ${index === currentMember ? 'active' : ''}`}
                onClick={() => setCurrentMember(index)}
                aria-label={`Show member ${index + 1}`}
              >
                <span className="cyber-control__pulse"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntegrantes;