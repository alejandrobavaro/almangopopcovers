import React from 'react';
import '../assets/scss/_03-Componentes/_AWhatsappIcon.scss';

function AWhatsappIcon() {
  return (
    <div id="whatsapp-icon-container">
      <a
        href="https://api.whatsapp.com/send?phone=+542235455451&text=Hola!,%20en%20que%20puedo%20ayudarte?"
        rel="noopener noreferrer"
        target="_blank"
        className="whatsapp-link"
      >
        <img
          alt="WhatsApp Icon"
          className="whatsapp-icon"
          src="/img/02-logos/logowhattsapp1.png"
        />
      </a>
    </div>
  );
}

export default AWhatsappIcon;