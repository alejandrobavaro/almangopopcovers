import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, CheckCircleFill } from 'react-bootstrap-icons';

function MusicaCancionCard({ cancion, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(cancion);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="music-card">
      <div className="status-bar"></div>
      
      <div className="card-content">
        <div className="album-hologram">
          <img 
            src={cancion.imagen} 
            alt={cancion.nombre} 
            className="album-image"
            onError={(e) => e.target.src = '/img/default-album.png'}
          />
          <div className="glitch-effect"></div>
        </div>
        
        <div className="song-info">
          <div className="info-line">
            <span className="label">TRACK:</span> 
            <span className="value">{cancion.nombre}</span>
          </div>
          <div className="info-line">
            <span className="label">ARTIST:</span> 
            <span className="value">{cancion.artista}</span>
          </div>
          <div className="info-line">
            <span className="label">GENRE:</span> 
            <span className="genre-tag">{cancion.categoria}</span>
          </div>
          <div className="info-line">
            <span className="label">DURATION:</span> 
            <span className="value">{cancion.duracion}</span>
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart} 
          className="add-button"
          aria-label="Add to playlist"
        >
          {added ? (
            <CheckCircleFill className="add-icon added" />
          ) : (
            <PlusCircle className="add-icon" />
          )}
        </button>
      </div>
      
      <div className="song-id">ID: {cancion.id}</div>
    </div>
  );
}

MusicaCancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MusicaCancionCard;