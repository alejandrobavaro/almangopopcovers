import React, { useState, useEffect } from "react";

const MainLoQueDicenFans = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Almango transformó nuestra fiesta corporativa en un evento inolvidable. ¡Todos bailaron toda la noche!",
      author: "María González",
      role: "Directora de RRHH, TechCorp",
      rating: 5,
      event: "Fiesta Anual TechCorp 2023"
    },
    {
      id: 2,
      quote: "La energía que transmiten es increíble. Contratarlos fue lo mejor que hicimos para nuestro resort.",
      author: "Carlos Mendoza",
      role: "Gerente, Luxury Hotels",
      rating: 5,
      event: "Temporada Verano 2023"
    },
    {
      id: 3,
      quote: "Como productor de eventos, he trabajado con muchas bandas pero ninguna con tanto profesionalismo y talento como Almango.",
      author: "Fernando Ríos",
      role: "Productor de Eventos",
      rating: 5,
      event: "Festival Pop Internacional"
    },
    {
      id: 4,
      quote: "Nuestra boda fue perfecta gracias a su música. Crearon un ambiente mágico que nuestros invitados aún recuerdan.",
      author: "Lucía y Martín",
      role: "Novios",
      rating: 5,
      event: "Boda en Pilar"
    },
    {
      id: 5,
      quote: "Increíble cómo adaptaron su repertorio para nuestro evento retro. Los clientes no paraban de pedir más canciones!",
      author: "Alejandro Ponce",
      role: "Dueño, Club Retro",
      rating: 4,
      event: "Noche de los 80s"
    },
    {
      id: 6,
      quote: "Por tercera vez los contratamos y siempre superan expectativas. El repertorio actualizado cada año mantiene fresco su show.",
      author: "Valeria Sosa",
      role: "Organizadora de Eventos",
      rating: 5,
      event: "Convención Nacional 2023"
    },
    {
      id: 7,
      quote: "El mejor tributo a los 90s que he visto. Cerramos el bar con gente pidiendo bis a las 4am!",
      author: "Roberto 'Tito' Díaz",
      role: "Dueño, Bar 90's",
      rating: 5,
      event: "Especial Fin de Año"
    },
    {
      id: 8,
      quote: "Como artista invitado, quedé impresionado por su calidad musical y calidez humana. Verdaderos profesionales.",
      author: "Julián Cruz",
      role: "Cantante Solista",
      rating: 5,
      event: "Festival Solidario"
    },
    {
      id: 9,
      quote: "Los contratamos para animar nuestro crucero y los pasajeros pedían repetición cada noche. ¡Espectaculares!",
      author: "Capitán Ernesto Soto",
      role: "Director de Entretenimiento, Cruceros del Sur",
      rating: 5,
      event: "Gira Caribeña 2023"
    }
  ];

  const [activeTestimonials, setActiveTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Inicializar con los primeros testimonios
    setActiveTestimonials(testimonials.slice(0, 3));
    
    // Rotación automática cada 8 segundos
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
      const nextIndex = (currentIndex + 3) % testimonials.length;
      const nextTestimonials = [
        ...testimonials.slice(nextIndex, nextIndex + 3),
        ...testimonials.slice(0, Math.max(0, 3 - (testimonials.length - nextIndex)))
      ];
      setActiveTestimonials(nextTestimonials);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials]);

  const renderStars = (rating) => {
    return (
      <div className="testimonial__stars">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`star ${i < rating ? 'star--filled' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">LO QUE DICEN NUESTROS FANS</h2>
          <div className="testimonials__divider"></div>
          <p className="testimonials__subtitle">Experiencias reales de quienes ya nos contrataron</p>
        </div>
        
        <div className="testimonials__grid">
          {activeTestimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial__card">
              {renderStars(testimonial.rating)}
              <div className="testimonial__quote">"{testimonial.quote}"</div>
              <div className="testimonial__meta">
                <div className="testimonial__author-info">
                  <div className="testimonial__author">{testimonial.author}</div>
                  <div className="testimonial__role">{testimonial.role}</div>
                </div>
                <div className="testimonial__event">
                  <span className="event__icon">🎤</span>
                  {testimonial.event}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__controls">
          {testimonials.slice(0, 6).map((_, index) => (
            <button 
              key={index}
              className={`control__dot ${index === currentIndex % 3 ? 'control__dot--active' : ''}`}
              onClick={() => {
                setCurrentIndex(index * 3);
                setActiveTestimonials(testimonials.slice(index * 3, index * 3 + 3));
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainLoQueDicenFans;