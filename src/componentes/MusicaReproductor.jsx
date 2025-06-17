import React, { useContext, useState, useEffect, useRef } from 'react';
import { 
  BsPlayFill, BsPauseFill, BsSkipEnd, BsSkipStart,
  BsVolumeUp, BsVolumeMute, BsListUl, BsX, BsMusicNoteList, 
  BsChevronDown, BsChevronUp, BsMusicPlayer
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
    audioError,
    audioRef
  } = useContext(MusicaContexto);

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isPlaylistMinimized, setIsPlaylistMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerMinimized, setIsPlayerMinimized] = useState(false);
  const prevVolume = useRef(volume);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Control de volumen y mute
  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume.current);
    } else {
      prevVolume.current = volume;
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Efecto para sincronizar el volumen del audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, audioRef]);

  // Efecto para mantener la reproducción al agregar canciones
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Error al intentar reproducir:", error);
        });
      }
    }
  }, [cart, audioRef, isPlaying]);

  if (audioError) {
    console.error('Error de audio:', audioError);
  }

  if (isPlayerMinimized) {
    return (
      <div className="minimized-player" onClick={() => setIsPlayerMinimized(false)}>
        <BsMusicPlayer className="player-icon" />
        {cart.length > 0 && (
          <span className="minimized-count">{cart.length}</span>
        )}
      </div>
    );
  }

  return (
    <div className="music-player">
      <button 
        className="minimize-btn"
        onClick={() => setIsPlayerMinimized(true)}
        aria-label="Minimizar reproductor"
      >
        <BsChevronDown />
      </button>

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
              <div className="empty-cover">
                <BsMusicPlayer className="placeholder-icon" />
                <span className="placeholder-text">Selecciona una canción</span>
              </div>
            )}
          </div>
          
          <div className="track-info">
            <div className="track-name">
              {cart[currentSongIndex]?.nombre || 'Selecciona una canción para reproducirla'}
            </div>
            <div className="artist-name">
              {cart[currentSongIndex]?.artista || ''}
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
        
        <div className="right-controls">
          <div className="volume-container">
            <button 
              className="volume-icon" 
              onClick={toggleMute}
              aria-label={isMuted ? 'Desactivar mute' : 'Activar mute'}
            >
              {isMuted || volume === 0 ? <BsVolumeMute /> : <BsVolumeUp />}
            </button>
            <input
              type="range"
              className="volume-slider"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Nivel de volumen"
            />
          </div>
          
          <button 
            className="playlist-toggle"
            onClick={() => {
              setShowPlaylist(!showPlaylist);
              if (!showPlaylist) setIsPlaylistMinimized(false);
            }}
            disabled={cart.length === 0}
            aria-label="Mostrar playlist"
          >
            <BsListUl />
            <span className="playlist-count">{cart.length}</span>
          </button>
        </div>
      </div>
      
      {/* Playlist completa - Lado derecho */}
      {showPlaylist && (
        <div className="playlist-popup right-side">
          <div 
            className="popup-header"
            onClick={() => setIsPlaylistMinimized(!isPlaylistMinimized)}
          >
            <div className="header-content">
              <BsMusicNoteList className="playlist-icon" />
              <h3>PLAYLIST ({cart.length})</h3>
              {cart[currentSongIndex]?.nombre && (
                <span className="current-song">{cart[currentSongIndex]?.nombre}</span>
              )}
            </div>
            <div className="header-actions">
              <button 
                className="toggle-minimize-btn"
                aria-label={isPlaylistMinimized ? 'Expandir' : 'Minimizar'}
              >
                {isPlaylistMinimized ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPlaylist(false);
                }}
                aria-label="Cerrar playlist"
                className="close-btn"
              >
                <BsX />
              </button>
            </div>
          </div>
          
          <div className={`playlist-items ${isPlaylistMinimized ? 'minimized' : ''}`}>
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
                >
                  <span className="item-number">{index + 1}.</span>
                  <div className="item-info">
                    <span className="item-title">{song.nombre}</span>
                    <span className="item-artist">{song.artista}</span>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(index);
                  }}
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