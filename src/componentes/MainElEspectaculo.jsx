// import React from "react";
// import '../assets/scss/_03-Componentes/_MainElEspectaculo.scss';

// const MainElEspectaculo = ({ descripcionCreativa = [] }) => {
//   const descripcionDefault = [
//     "Nuestro espectáculo está cargando... Pronto tendrás más información."
//   ];

//   const textoParaMostrar = descripcionCreativa.length > 0 
//     ? descripcionCreativa 
//     : descripcionDefault;

//   return (
//     <section className="cyber-seccion-espectaculo">
//       <div className="cyber-encabezado-seccion">
//         <h2 className="cyber-titulo-seccion">EL ESPECTÁCULO</h2>
//         <div className="cyber-divisor-seccion"></div>
//       </div>
      
//       <div className="cyber-dos-columnas">
//         <div className="cyber-contenido-espectaculo">
//           {textoParaMostrar.map((parrafo, index) => (
//             <p key={index} className="cyber-parrafo-espectaculo">
//               {parrafo.split('*').map((texto, i) => 
//                 i % 2 === 1 ? (
//                   <span key={i} className="cyber-nombre-cancion">{texto}</span>
//                 ) : (
//                   texto
//                 )
//               )}
//             </p>
//           ))}
//         </div>
//         <div className="cyber-lado-imagen">
//           <img 
//             src="/img/banda/show-en-vivo.jpg" 
//             alt="Show en vivo" 
//             className="cyber-imagen-lateral"
//             onError={(e) => {
//               e.target.src = '/img/banda/default.jpg';
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainElEspectaculo;

import React from "react";

const MainElEspectaculo = ({ creativeDescription = [] }) => {
  const defaultDescription = [
    "Nuestro espectáculo está cargando... Pronto tendrás más información."
  ];

  const textToShow = creativeDescription.length > 0 
    ? creativeDescription 
    : defaultDescription;

  return (
    <section className="show">
      <div className="show__container">
        <div className="show__header">
          <h2 className="show__title">EL ESPECTÁCULO</h2>
          <div className="show__divider"></div>
        </div>
        
        <div className="show__content">
          <div className="show__text">
            {textToShow.map((paragraph, index) => (
              <p key={index} className="show__paragraph">
                {paragraph.split('*').map((text, i) => 
                  i % 2 === 1 ? (
                    <span key={i} className="show__song">{text}</span>
                  ) : (
                    text
                  )
                )}
              </p>
            ))}
          </div>
          <div className="show__image">
            <img 
              src="/img/banda/show-en-vivo.jpg" 
              alt="Show en vivo" 
              className="show__img"
              onError={(e) => {
                e.target.src = '/img/banda/default.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainElEspectaculo;