import React from "react";
import '../assets/scss/_03-Componentes/_MainElEspectaculo.scss';

const MainElEspectaculo = () => {
  const descripcionDetallada = [
    "Nuestro espectáculo *Cyber Pop Revolution* es un viaje electrizante a través de los mayores éxitos de las últimas décadas, fusionando la esencia de los clásicos con una producción audiovisual de vanguardia.",

    "Revivimos los hits icónicos de *Madonna, Michael Jackson, Britney Spears, Backstreet Boys y Spice Girls* con arreglos fieles a los originales pero con nuestro toque futurista, creando una experiencia que emociona tanto a nostálgicos como a nuevas generaciones.",

    "Cada era musical cobra vida con *coreografías precisas, vestuario temático* y cambios de escena espectaculares, transportando al público directamente a la época dorada de cada canción.",

    "El show incluye *5 segmentos temáticos* cuidadosamente diseñados: desde los sintetizadores new wave de los 80, pasando por el pop explosivo de los 90, hasta los ritmos electrónicos de los 2000, cada transición es una sorpresa visual y musical.",

    "Nuestra *producción técnica* incluye pantallas LED de última generación, iluminación robótica sincronizada y efectos especiales que transforman el escenario en un universo pop futurista, con tecnología que parece salida de una película de ciencia ficción.",

    "El *backline profesional* combina instrumentos vintage con tecnología moderna: teclados analógicos recrean los sonidos clásicos, mientras los sistemas digitales nos permiten reproducir cada detalle de las producciones originales.",

    "Las *coreografías*, diseñadas por expertos en recreación de movimientos iconicos, incluyen desde los pasos de *Thriller* hasta los giros de *Baby One More Time*, ejecutados con precisión milimétrica por nuestro equipo de bailarines.",

    "El *vestuario* es un espectáculo en sí mismo: más de 30 cambios en el show que van desde los looks de *Like a Virgin* hasta los trajes futuristas de *Blackout*, todos diseñados por especialistas en moda retro-futurista.",

    "El *finale* es una explosión sensorial que combina nuestros mayores éxitos en un megamix acompañado de pirotecnia digital, confeti inteligente y un show de drones que dibuja iconos pop en el cielo.",

    "Más que un concierto, *Cyber Pop Revolution* es una máquina del tiempo high-tech que celebra la historia de la música pop con una producción que redefine lo posible en un escenario."
];

const playlist = [
    { id: 1, cancion: "Like a Prayer - Madonna", duracion: "5:42", destacado: true, decada: "80s" },
    { id: 2, cancion: "Billie Jean - Michael Jackson", duracion: "4:54", destacado: true, decada: "80s" },
    { id: 3, cancion: "Wannabe - Spice Girls", duracion: "3:55", destacado: true, decada: "90s" },
    { id: 4, cancion: "Everybody (Backstreet's Back) - BSB", duracion: "4:47", decada: "90s" },
    { id: 5, cancion: "Toxic - Britney Spears", duracion: "3:21", destacado: true, decada: "2000s" },
    { id: 6, cancion: "Can't Get You Out of My Head - Kylie", duracion: "3:51", decada: "2000s" },
    { id: 7, cancion: "Take On Me - A-ha", duracion: "3:48", decada: "80s" },
    { id: 8, cancion: "Vogue - Madonna", duracion: "5:18", decada: "90s" },
    { id: 9, cancion: "Larger Than Life - BSB", duracion: "3:52", decada: "90s" },
    { id: 10, cancion: "Smooth Criminal - MJ", duracion: "4:17", decada: "80s" },
    { id: 11, cancion: "Oops!... I Did It Again - Britney", duracion: "3:31", decada: "2000s" },
    { id: 12, cancion: "Cyber Pop Megamix (Finale)", duracion: "7:22", destacado: true, decada: "2020s" }
];

const techSpecs = [
  {
      categoria: "AUDIO",
      items: [
          "Sistema line array L-Acoustics K2 (24 módulos)",
          "Consola digital Yamaha CL5 para mezcla perfecta",
          "Micrófonos inalámbricos Shure Axient para movilidad total",
          "Sistema de monitores personalizados para cada artista"
      ]
  },
  {
      categoria: "ESCENOGRAFÍA",
      items: [
          "Pantallas LED curvadas de 6mm pitch (120m² total)",
          "Piso de escenario interactivo con sensores de movimiento",
          "Estructuras móviles que transforman el espacio",
          "Sistema de pirotecnia digital Cold Spark"
      ]
  },
  {
      categoria: "VESTUARIO",
      items: [
          "30 cambios de vestuario con replicas exactas",
          "Trajes con tecnología LED integrada",
          "Calzado escénico con suela holográfica",
          "Sistema rápido de cambios en escena"
      ]
  },
  {
      categoria: "EFECTOS ESPECIALES",
      items: [
          "12 drones con luces RGBW sincronizados",
          "Sistema de confeti inteligente con 8 colores",
          "Cañones de humo y CO2 controlados por MIDI",
          "Proyectores láser de 30W certificados"
      ]
  }
];
  return (
    <section className="cyber-seccion-espectaculo">
      <div className="cyber-encabezado-seccion">
        <h2 className="cyber-titulo-seccion">EL ESPECTÁCULO</h2>
        <div className="cyber-divisor-seccion"></div>
      </div>
      
      <div className="cyber-contenido-espectaculo">
        {descripcionDetallada.map((parrafo, index) => (
          <p key={index} className="cyber-parrafo-espectaculo">
            {parrafo.split('*').map((texto, i) => 
              i % 2 === 1 ? (
                <span key={i} className="cyber-destacado">{texto}</span>
              ) : (
                texto
              )
            )}
          </p>
        ))}
      </div>

      <div className="cyber-playlist-container">
        <h3 className="cyber-playlist-titulo">PLAYLIST DEL ESPECTÁCULO</h3>
        <div className="cyber-playlist">
          {playlist.map(track => (
            <div key={track.id} className={`cyber-track ${track.destacado ? 'cyber-track-destacado' : ''}`}>
              <span className="cyber-track-number">0{track.id}</span>
              <span className="cyber-track-name">{track.cancion}</span>
              <span className="cyber-track-duration">{track.duracion}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cyber-tech-specs">
        <h3 className="cyber-tech-titulo">ESPECIFICACIONES TÉCNICAS</h3>
        <div className="cyber-tech-grid">
          <div className="cyber-tech-category">
            <h4>AUDIO</h4>
            <ul>
              <li>Sistema de sonido L-Acoustics K2 + KS28</li>
              <li>Consola DiGiCo SD7</li>
              <li>Microfonía Shure Axient Digital</li>
              <li>Sistema de monitores personalizados</li>
            </ul>
          </div>
          <div className="cyber-tech-category">
            <h4>ILUMINACIÓN</h4>
            <ul>
              <li>12x Robe MegaPointe</li>
              <li>8x Robe BMFL WashBeam</li>
              <li>Consola MA Lighting grandMA3</li>
              <li>Sistema de control DMX wireless</li>
            </ul>
          </div>
          <div className="cyber-tech-category">
            <h4>VIDEO</h4>
            <ul>
              <li>Pantallas LED 6mm pitch</li>
              <li>4x proyectores laser 30,000 lúmenes</li>
              <li>Sistema de procesamiento disguise</li>
              <li>Contenido original en 8K</li>
            </ul>
          </div>
          <div className="cyber-tech-category">
            <h4>EFECTOS ESPECIALES</h4>
            <ul>
              <li>Sistema pirotécnico sincronizado</li>
              <li>50 drones LED RGBW</li>
              <li>Generadores de humo y CO2</li>
              <li>Sistema de confeti controlado por tiempo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainElEspectaculo;