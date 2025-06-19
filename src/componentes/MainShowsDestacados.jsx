import React from "react";
import '../assets/scss/_03-Componentes/_MainShowsDestacados.scss';

const MainShowsDestacados = ({ showsDestacados = [] }) => {
  // Generamos 27 shows ficticios adicionales
  const generateMockShows = () => {
    const mockShows = [];
    const locations = [
      "Teatro Colón", "Luna Park", "Movistar Arena", "Gran Rex", 
      "CCK", "Estadio River Plate", "Estadio Vélez", "Teatro Ópera",
      "Teatro Broadway", "Hollywood Bowl", "Royal Albert Hall", 
      "Red Rocks Amphitheatre", "Sydney Opera House", "Tokyo Dome",
      "Staples Center", "Madison Square Garden", "Wembley Arena",
      "Berghain", "Fabric", "Printworks", "Space Ibiza", "Pacha",
      "Ushuaïa", "Hï Ibiza", "Amnesia", "DC-10", "Paradiso"
    ];
    
    const descriptions = [
      "Noche histórica con entradas agotadas y energía electrizante.",
      "Presentación exclusiva para invitados VIP y prensa especializada.",
      "Concierto benéfico a favor de la fundación musical para niños.",
      "Edición especial del show con orquesta sinfónica completa.",
      "Versión acústica íntima con materiales inéditos y sorpresas.",
      "Festival internacional con artistas invitados de todo el mundo.",
      "Transmisión en vivo para plataformas digitales globales.",
      "Grabación en directo del próximo álbum en vivo de la banda.",
      "Colaboración especial con DJs internacionales de renombre.",
      "Maratón musical de 5 horas con todos los éxitos y rarezas.",
      "Show conceptual basado en la última producción discográfica.",
      "Evento con realidad aumentada y experiencias inmersivas.",
      "Concierto en formato 360° con proyecciones holográficas.",
      "Presentación del nuevo material con tecnología de punta.",
      "Noche temática con vestuario especial y puesta en escena única.",
      "Concierto bajo las estrellas en ubicación privilegiada.",
      "Evento diurno con actividades interactivas para los fans.",
      "Show sorpresa en ubicación secreta anunciada horas antes.",
      "Concierto flotante en barco por el río con vista panorámica.",
      "Edición limitada con capacidad reducida para experiencia premium."
    ];

    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["2023", "2024", "2025"];

    for (let i = 0; i < 27; i++) {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomDay = Math.floor(Math.random() * 28) + 1;
      const randomMonth = months[Math.floor(Math.random() * months.length)];
      const randomYear = years[Math.floor(Math.random() * years.length)];
      const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
      
      mockShows.push({
        id: i + 100, // IDs altos para no confundir con los reales
        lugar: randomLocation,
        fecha: `${randomDay < 10 ? '0' + randomDay : randomDay}/${randomMonth}/${randomYear}`,
        descripcion: randomDesc,
        imagen: `/img/shows/show-${Math.floor(Math.random() * 10) + 1}.jpg`
      });
    }

    return mockShows;
  };

  const allShows = showsDestacados.length > 0 
    ? [...showsDestacados, ...generateMockShows()].slice(0, 30) // Limitar a 30 shows
    : generateMockShows().slice(0, 6); // Mostrar solo 6 si no hay shows destacados

  if (allShows.length === 0) {
    return (
      <section className="cyber-seccion-shows">
        <div className="cyber-encabezado-seccion">
          <h2 className="cyber-titulo-seccion">SHOWS DESTACADOS</h2>
          <div className="cyber-divisor-seccion"></div>
          <p className="cyber-subtitulo-seccion">Próximos shows en preparación</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cyber-seccion-shows">
      <div className="cyber-encabezado-seccion">
        <h2 className="cyber-titulo-seccion">SHOWS DESTACADOS</h2>
        <div className="cyber-divisor-seccion"></div>
        <p className="cyber-subtitulo-seccion">
          {showsDestacados.length > 0 
            ? "Nuestras presentaciones más memorables" 
            : "Próximos shows en preparación"}
        </p>
      </div>
      
      <div className="cyber-grid-shows">
        {allShows.map(show => (
          <div key={show.id} className="cyber-tarjeta-show">
            <div className="cyber-imagen-show">
              <img 
                src={show.imagen || '/img/shows/default.jpg'} 
                alt={show.lugar}
                onError={(e) => {
                  e.target.src = '/img/shows/default.jpg';
                }}
              />
              <div className="cyber-show-overlay">
                <h3 className="cyber-show-venue">{show.lugar}</h3>
                <div className="cyber-show-date">{show.fecha}</div>
              </div>
            </div>
            <div className="cyber-contenido-show">
              <p className="cyber-descripcion-show">{show.descripcion}</p>
              <div className="cyber-tecnica-show">
                <span>Equipo técnico completo</span>
                <span>Producción profesional</span>
                <span>Adaptable a cualquier espacio</span>
              </div>
              <button className="cyber-show-button">
                VER DETALLES
                <span className="cyber-button-glow"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainShowsDestacados;