import React from 'react';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const LoadingSpinner = () => {
  return (
    <div className="retro-loading-spinner">
      <div className="vinyl-spinner">
        <div className="vinyl-label"></div>
        <div className="vinyl-center"></div>
      </div>
      <p className="loading-text">CARGANDO...</p>
    </div>
  );
};

export default LoadingSpinner;