import React from "react";

const MainLoQueDicenFans = ({ testimonials = [] }) => {
  if (testimonials.length === 0) {
    return (
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">LO QUE DICEN NUESTROS FANS</h2>
            <div className="testimonials__divider"></div>
            <p className="testimonials__message">No hay testimonios disponibles actualmente</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">LO QUE DICEN NUESTROS FANS</h2>
          <div className="testimonials__divider"></div>
        </div>
        
        <div className="testimonials__grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial__card">
              <div className="testimonial__quote">"{testimonial.quote}"</div>
              <div className="testimonial__author">{testimonial.author}</div>
              <div className="testimonial__role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainLoQueDicenFans;