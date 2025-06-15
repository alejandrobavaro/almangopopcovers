import React, { useContext, useState } from 'react';
import { 
  BsPlayFill, BsPauseFill, BsSkipEnd, BsSkipStart,
  BsVolumeUp, BsVolumeMute, BsListUl, BsX, BsMusicNoteList
} from 'react-icons/bs';
import { MusicaContexto } from './MusicaContexto';

function MusicaReproductor() {
  const {
    cart,
    currentSongIndex,
    setCurrentSongIndex,
    isPlaying,
    volume,
    currentTime,
    duration,
    progress,
    setIsPlaying,
    setVolume,
    handleSkipNext,
    handleSkipPrev,
    handleProgressChange,
    removeFromCart,
    audioError
  } = useContext(MusicaContexto);

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showMiniList, setShowMiniList] = useState(false);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (audioError) {
    console.error('Error de audio:', audioError);
  }

  return (
    <div className="music-player">
      {/* Mini playlist */}
      {cart.length > 1 && (
        <div className={`mini-playlist ${showMiniList ? 'visible' : ''}`}>
          <button 
            className="toggle-mini-list"
            onClick={() => setShowMiniList(!showMiniList)}
            aria-label={showMiniList ? 'Ocultar lista' : 'Mostrar lista'}
          >
            <BsMusicNoteList />
            <span className="count-badge">{cart.length}</span>
          </button>
          
          <div className="mini-list-container">
            {cart.map((song, index) => (
              <div 
                key={index}
                className={`mini-list-item ${index === currentSongIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSongIndex(index);
                  setIsPlaying(true);
                }}
              >
                <span className="mini-list-number">{index + 1}.</span>
                <span className="mini-list-title">{song.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reproductor principal */}
      <div className="player-container">
        <div className="now-playing">
          <div className="album-cover">
            {cart[currentSongIndex]?.imagen ? (
              <img 
                src={cart[currentSongIndex].imagen} 
                alt="Album cover" 
                className="cover-image"
                onError={(e) => e.target.src = '/img/default-album.png'}
              />
            ) : (
              <div className="empty-cover">NO IMAGE</div>
            )}
          </div>
          
          <div className="track-info">
            <div className="track-name">
              {cart[currentSongIndex]?.nombre || 'No track selected'}
            </div>
            <div className="artist-name">
              {cart[currentSongIndex]?.artista || 'Unknown artist'}
            </div>
          </div>
        </div>
        
        <div className="player-controls">
          <button 
            className="control-btn prev-btn" 
            onClick={handleSkipPrev}
            disabled={cart.length <= 1}
            aria-label="Canción anterior"
          >
            <BsSkipStart />
          </button>
          
          <button 
            className="control-btn play-btn" 
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={cart.length === 0}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          
          <button 
            className="control-btn next-btn" 
            onClick={handleSkipNext}
            disabled={cart.length <= 1}
            aria-label="Siguiente canción"
          >
            <BsSkipEnd />
          </button>
        </div>
        
        <div className="progress-container">
          <div className="time-display">{formatTime(currentTime)}</div>
          <input
            type="range"
            className="progress-bar"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleProgressChange}
            disabled={cart.length === 0}
            aria-label="Barra de progreso"
          />
          <div className="time-display">{formatTime(duration)}</div>
        </div>
        
        <div className="volume-container">
          <button className="volume-icon" aria-label="Control de volumen">
            {volume > 0 ? <BsVolumeUp /> : <BsVolumeMute />}
          </button>
          <input
            type="range"
            className="volume-slider"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            aria-label="Nivel de volumen"
          />
        </div>
        
        <button 
          className="playlist-toggle"
          onClick={() => setShowPlaylist(!showPlaylist)}
          disabled={cart.length === 0}
          aria-label="Mostrar playlist"
        >
          <BsListUl />
          <span className="playlist-count">{cart.length}</span>
        </button>
      </div>
      
      {/* Playlist completa */}
      {showPlaylist && (
        <div className="playlist-popup">
          <div className="popup-header">
            <h3>PLAYLIST ({cart.length})</h3>
            <button 
              onClick={() => setShowPlaylist(false)}
              aria-label="Cerrar playlist"
            >
              <BsX />
            </button>
          </div>
          <div className="playlist-items">
            {cart.map((song, index) => (
              <div 
                key={index}
                className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
              >
                <div 
                  className="item-main" 
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setIsPlaying(true);
                  }}
                  aria-label={`Reproducir ${song.nombre}`}
                >
                  <span className="item-number">{index + 1}.</span>
                  <div className="item-info">
                    <span className="item-title">{song.nombre}</span>
                    <span className="item-artist">{song.artista}</span>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(index)}
                  aria-label="Eliminar de la playlist"
                >
                  <BsX />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicaReproductor;