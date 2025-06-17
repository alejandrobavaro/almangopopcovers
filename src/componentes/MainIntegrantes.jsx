import React, { useState, useEffect } from "react";

const MainIntegrantes = ({ members = [] }) => {
  const [currentMember, setCurrentMember] = useState(0);

  useEffect(() => {
    if (members.length > 0) {
      const interval = setInterval(() => {
        setCurrentMember(prev => (prev + 1) % members.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [members.length]);

  if (members.length === 0) {
    return (
      <section className="members">
        <div className="members__container">
          <div className="members__header">
            <h2 className="members__title">LOS INTEGRANTES</h2>
            <p className="members__subtitle">Información no disponible temporalmente</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="members">
      <div className="members__container">
        <div className="members__header">
          <h2 className="members__title">LOS INTEGRANTES</h2>
          <p className="members__subtitle">El equipo detrás del sonido Almango</p>
        </div>

        <div className="members__content">
          {members.map((member, index) => (
            <div 
              key={member.id} 
              className={`member__bio ${index === currentMember ? 'active' : ''}`}
            >
              <div className="bio__image-container">
                <img 
                  src={member.image || '/img/integrantes/default.jpg'} 
                  alt={member.name} 
                  className="bio__image"
                  onError={(e) => {
                    e.target.src = '/img/integrantes/default.jpg';
                  }}
                />
                <div className="bio__overlay">
                  <h3 className="bio__name">{member.name}</h3>
                  <p className="bio__role">{member.role}</p>
                </div>
              </div>
              
              <div className="bio__text">
                <h4 className="bio__section-title">BIOGRAFÍA</h4>
                <p className="bio__description">{member.bio || 'Biografía no disponible'}</p>
                
                {member.details && (
                  <>
                    <h4 className="bio__section-title">DETALLES</h4>
                    <ul className="bio__details">
                      {member.details.map((detail, i) => (
                        <li key={i} className="bio__detail-item">
                          <span className="bio__detail-label">{detail.label}:</span>
                          <span className="bio__detail-value">{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
          
          <div className="members__controls">
            {members.map((_, index) => (
              <button 
                key={index}
                className={`members__dot ${index === currentMember ? 'active' : ''}`}
                onClick={() => setCurrentMember(index)}
                aria-label={`Mostrar integrante ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntegrantes;