// import React from "react";
// import '../assets/scss/_03-Componentes/_MainShowsDestacados.scss';

// const MainShowsDestacados = ({ showsDestacados = [] }) => {
//   if (showsDestacados.length === 0) {
//     return (
//       <section className="cyber-seccion-shows">
//         <div className="cyber-encabezado-seccion">
//           <h2 className="cyber-titulo-seccion">SHOWS DESTACADOS</h2>
//           <div className="cyber-divisor-seccion"></div>
//           <p className="cyber-subtitulo-seccion">Próximos shows en preparación</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="cyber-seccion-shows">
//       <div className="cyber-encabezado-seccion">
//         <h2 className="cyber-titulo-seccion">SHOWS DESTACADOS</h2>
//         <div className="cyber-divisor-seccion"></div>
//         <p className="cyber-subtitulo-seccion">Nuestras presentaciones más memorables</p>
//       </div>
      
//       <div className="cyber-grid-shows">
//         {showsDestacados.map(show => (
//           <div key={show.id} className="cyber-tarjeta-show">
//             <div className="cyber-imagen-show">
//               <img 
//                 src={show.imagen || '/img/shows/default.jpg'} 
//                 alt={show.lugar}
//                 onError={(e) => {
//                   e.target.src = '/img/shows/default.jpg';
//                 }}
//               />
//             </div>
//             <div className="cyber-contenido-show">
//               <h3 className="cyber-lugar-show">{show.lugar}</h3>
//               <div className="cyber-fecha-show">{show.fecha}</div>
//               <p className="cyber-descripcion-show">{show.descripcion}</p>
//               <div className="cyber-tecnica-show">
//                 <span>Equipo técnico completo</span>
//                 <span>Producción profesional</span>
//                 <span>Adaptable a cualquier espacio</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MainShowsDestacados;

import React from "react";

const MainShowsDestacados = ({ featuredShows = [] }) => {
  if (featuredShows.length === 0) {
    return (
      <section className="shows">
        <div className="shows__container">
          <div className="shows__header">
            <h2 className="shows__title">SHOWS DESTACADOS</h2>
            <div className="shows__divider"></div>
            <p className="shows__subtitle">Próximos shows en preparación</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shows">
      <div className="shows__container">
        <div className="shows__header">
          <h2 className="shows__title">SHOWS DESTACADOS</h2>
          <div className="shows__divider"></div>
          <p className="shows__subtitle">Nuestras presentaciones más memorables</p>
        </div>
        
        <div className="shows__grid">
          {featuredShows.map(show => (
            <div key={show.id} className="show__card">
              <div className="show__image">
                <img 
                  src={show.image || '/img/shows/default.jpg'} 
                  alt={show.venue}
                  onError={(e) => {
                    e.target.src = '/img/shows/default.jpg';
                  }}
                />
                <div className="show__overlay">
                  <h3 className="show__venue">{show.venue}</h3>
                  <div className="show__date">{show.date}</div>
                </div>
              </div>
              <div className="show__content">
                <p className="show__description">{show.description}</p>
                <div className="show__tech">
                  <span>Equipo técnico completo</span>
                  <span>Producción profesional</span>
                  <span>Adaptable a cualquier espacio</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainShowsDestacados;