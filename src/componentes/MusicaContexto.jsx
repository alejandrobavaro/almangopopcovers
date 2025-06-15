import React, { createContext, useState, useRef, useEffect } from 'react';

export const MusicaContexto = createContext();

export function MusicaProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMinimized, setIsMinimized] = useState(false);
  const [repeatMode, setRepeatMode] = useState('none');
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const audioRef = useRef(null);
  const isMountedRef = useRef(false);

  // Efectos y funciones de persistencia
  useEffect(() => {
    isMountedRef.current = true;
    const savedCart = localStorage.getItem('cyberMusicCart');
    const savedVolume = localStorage.getItem('cyberMusicVolume');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedVolume) setVolume(parseFloat(savedVolume));

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('cyberMusicCart', JSON.stringify(cart));
    localStorage.setItem('cyberMusicVolume', volume.toString());
  }, [cart, volume]);

  // Control de audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => isMountedRef.current && setCurrentTime(audio.currentTime);
    const updateDuration = () => isMountedRef.current && setDuration(audio.duration);
    const handleLoadedData = () => isMountedRef.current && setIsLoading(false);
    const handleWaiting = () => isMountedRef.current && setIsLoading(true);
    const handleError = () => isMountedRef.current && setAudioError(audio.error?.message);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Carga de canciones
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || cart.length === 0) return;

    const currentSong = cart[currentSongIndex];
    if (!currentSong?.url) return;

    setIsLoading(true);
    setAudioError(null);

    const source = document.createElement('source');
    source.src = currentSong.url;
    source.type = 'audio/mpeg';

    while (audio.firstChild) {
      audio.removeChild(audio.firstChild);
    }

    audio.appendChild(source);
    
    const handleLoad = async () => {
      try {
        await new Promise((resolve, reject) => {
          audio.oncanplay = resolve;
          audio.onerror = reject;
          audio.load();
        });

        if (isMountedRef.current && isPlaying) {
          await audio.play().catch(playError => {
            console.error('Play error:', playError);
            setAudioError(playError.message);
            setIsPlaying(false);
          });
        }
      } catch (loadError) {
        console.error('Load error:', loadError);
        setAudioError(loadError.message);
        setIsPlaying(false);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoad();

    return () => {
      audio.oncanplay = null;
      audio.onerror = null;
    };
  }, [currentSongIndex, cart]);

  // Control de reproducción
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    const handlePlayback = async () => {
      try {
        if (isPlaying) {
          await audio.play();
          setAudioError(null);
        } else {
          audio.pause();
        }
      } catch (err) {
        console.error('Playback error:', err);
        setAudioError(err.message);
        setIsPlaying(false);
      }
    };

    handlePlayback();
  }, [isPlaying, isLoading]);

  // Final de canción
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      } else if (repeatMode === 'all' || isShuffle) {
        handleSkipNext();
      } else if (currentSongIndex < cart.length - 1) {
        setCurrentSongIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [currentSongIndex, cart, repeatMode, isShuffle]);

  // Funciones del contexto
  const addToCart = (song) => {
    setCart(prev => {
      const exists = prev.some(s => s.id === song.id);
      if (!exists) {
        const newCart = [...prev, song];
        if (prev.length === 0) {
          setCurrentSongIndex(0);
          setIsPlaying(true);
        }
        return newCart;
      }
      return prev;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      
      if (index === currentSongIndex) {
        if (newCart.length > 0) {
          setCurrentSongIndex(Math.min(index, newCart.length - 1));
        } else {
          setIsPlaying(false);
          setCurrentSongIndex(0);
        }
      } else if (index < currentSongIndex) {
        setCurrentSongIndex(prev => prev - 1);
      }
      
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setIsPlaying(false);
    setCurrentSongIndex(0);
  };

  const playSong = (song) => {
    const songIndex = cart.findIndex(s => s.id === song.id);
    if (songIndex !== -1) {
      setCurrentSongIndex(songIndex);
      setIsPlaying(true);
    }
  };

  const handleSkipNext = () => {
    if (cart.length > 0) {
      setCurrentSongIndex(prev => 
        isShuffle ? Math.floor(Math.random() * cart.length) : (prev + 1) % cart.length
      );
    }
  };

  const handleSkipPrev = () => {
    if (cart.length > 0) {
      setCurrentSongIndex(prev => (prev - 1 + cart.length) % cart.length);
    }
  };

  const handleProgressChange = (e) => {
    if (audioRef.current) {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <MusicaContexto.Provider value={{
      cart,
      currentSongIndex,
      setCurrentSongIndex,
      isPlaying,
      volume,
      isMinimized,
      repeatMode,
      isShuffle,
      currentTime,
      duration,
      progress: duration > 0 ? (currentTime / duration) * 100 : 0,
      isLoading,
      audioError,
      audioRef,
      setIsPlaying,
      setVolume,
      setIsMinimized,
      setRepeatMode,
      setIsShuffle,
      addToCart,
      removeFromCart,
      clearCart,
      playSong,
      handleSkipNext,
      handleSkipPrev,
      handleProgressChange
    }}>
      {children}
      <audio ref={audioRef} preload="metadata" />
    </MusicaContexto.Provider>
  );
}