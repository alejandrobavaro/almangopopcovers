import React from "react";

const MainSobreLaBanda = () => {
  const bandInfo = {
    description: [
      "Fundada en *1997* en Buenos Aires, comenzamos como un grupo de amigos apasionados por revivir los clásicos del rock y pop de los *70s, 80s y 90s*. Lo que empezó como covers en garajes se convirtió en nuestra profesión y forma de vida.",
      
      "A lo largo de nuestros *25+ años* de carrera, hemos lanzado *5 álbumes de estudio* con material original, girando por *12 países* de América Latina y compartiendo escenario con grandes artistas internacionales.",
      
      "Nuestro proyecto actual *'Retro Future'* fusiona nuestra esencia rockera con tecnología de vanguardia, ofreciendo un espectáculo único donde revivimos los hits que nos inspiraron, desde *Queen* hasta *Guns N' Roses*, pasando por *The Police* y *Bon Jovi*, con una producción visual impactante.",
      
      "El grupo está formado por *4 miembros fundadores* y *3 nuevos talentos* que se unieron en esta última etapa, combinando experiencia y energía fresca para crear un sonido que honra lo clásico pero con mirada al futuro."
    ],
    activeYears: new Date().getFullYear() - 1997,
    shows: 1200,
    countries: [
      "Argentina", "Chile", "Uruguay", "Paraguay", 
      "Brasil", "Perú", "Ecuador", "Colombia",
      "Venezuela", "México", "Estados Unidos", "España"
    ],
    discography: [
      { year: "2001", title: "Primera Llamada", type: "Álbum de estudio" },
      { year: "2004", title: "Sin Red", type: "Álbum de estudio" },
      { year: "2008", title: "3ra Dimensión", type: "Álbum conceptual" },
      { year: "2012", title: "Circuitos Cruzados", type: "Álbum doble" },
      { year: "2017", title: "25", type: "Álbum aniversario" },
      { year: "2022", title: "Retro Future", type: "Proyecto especial" }
    ],
    members: [
      { name: "Alex Vega", role: "Voz y guitarra", since: 1997, image: "/img/banda/alex.jpg" },
      { name: "Mauro Ríos", role: "Bajo y coros", since: 1997, image: "/img/banda/mauro.jpg" },
      { name: "Dani López", role: "Batería", since: 1999, image: "/img/banda/dani.jpg" },
      { name: "Pablo Chen", role: "Teclados", since: 2002, image: "/img/banda/pablo.jpg" },
      { name: "Lola Miranda", role: "Voz líder", since: 2018, image: "/img/banda/lola.jpg" },
      { name: "Julián Soto", role: "Guitarra líder", since: 2020, image: "/img/banda/julian.jpg" },
      { name: "Vicky Roca", role: "Percusión y coros", since: 2021, image: "/img/banda/vicky.jpg" }
    ]
  };

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">SOBRE LA BANDA</h2>
          <div className="about__divider"></div>
          <p className="about__subtitle">25 años haciendo vibrar escenarios</p>
        </div>
        
        <div className="about__content">
          <div className="about__image">
            <img 
              src="/img/banda/historia.jpg" 
              alt="La banda en sus inicios" 
              className="about__img"
              onError={(e) => {
                e.target.src = '/img/banda/default.jpg';
              }}
            />
          </div>
          <div className="about__info">
            {bandInfo.description.map((paragraph, index) => (
              <p key={index} className="about__description">
                {paragraph.split('*').map((text, i) => 
                  i % 2 === 1 ? (
                    <span key={i} className="about__highlight">{text}</span>
                  ) : (
                    text
                  )
                )}
              </p>
            ))}
            
            <div className="about__stats">
              <div className="stat__item">
                <span className="stat__number">{bandInfo.activeYears}+</span>
                <span className="stat__label">Años de historia</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">{bandInfo.shows}+</span>
                <span className="stat__label">Shows</span>
              </div>
              <div className="stat__item">
                <span className="stat__number">{bandInfo.countries.length}</span>
                <span className="stat__label">Países</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__discography">
          <h3 className="about__section-title">DISCOGRAFÍA</h3>
          <div className="discography__grid">
            {bandInfo.discography.map((album, index) => (
              <div key={index} className="discography__item">
                <span className="discography__year">{album.year}</span>
                <h4 className="discography__title">{album.title}</h4>
                <p className="discography__type">{album.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__members">
          <h3 className="about__section-title">INTEGRANTES</h3>
          <div className="members__grid">
            {bandInfo.members.map((member, index) => (
              <div key={index} className="member__card">
                <div className="member__image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member__image"
                    onError={(e) => {
                      e.target.src = '/img/banda/member-default.jpg';
                    }}
                  />
                </div>
                <div className="member__info">
                  <h4 className="member__name">{member.name}</h4>
                  <p className="member__role">{member.role}</p>
                  <p className="member__since">Desde {member.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSobreLaBanda;