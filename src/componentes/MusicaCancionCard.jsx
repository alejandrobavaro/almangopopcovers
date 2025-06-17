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
    <div className="cyberpunk-music-card-compact">
      <div className="cyberpunk-card-content-compact">
        <div className="cyberpunk-album-compact">
          <img 
            src={cancion.imagen} 
            alt={cancion.nombre} 
            className="cyberpunk-album-image-compact"
            onError={(e) => e.target.src = '/img/default-album.png'}
          />
        </div>
        
        <div className="cyberpunk-song-info-compact">
          <div className="cyberpunk-info-line-compact">
            <span className="cyberpunk-info-value-compact">{cancion.nombre}</span>
          </div>
          <div className="cyberpunk-info-line-compact">
            <span className="cyberpunk-info-artist-compact">{cancion.artista}</span>
          </div>
        </div>
        
        <div className="cyberpunk-song-meta-compact">
          <span className="cyberpunk-song-duration-compact">{cancion.duracion}</span>
          <button 
            onClick={handleAddToCart} 
            className="cyberpunk-add-button-compact"
            aria-label="Add to playlist"
          >
            {added ? (
              <CheckCircleFill className="cyberpunk-add-icon-compact cyberpunk-add-icon--active" />
            ) : (
              <PlusCircle className="cyberpunk-add-icon-compact" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

MusicaCancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MusicaCancionCard;