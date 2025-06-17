import React, { useState, useEffect } from "react";
import { MusicaProvider } from "./MusicaContexto";
import MusicaCancionesLista from "./MusicaCancionesLista";
import MusicaReproductor from "./MusicaReproductor";
import '../assets/scss/_03-Componentes/_Musica.scss';

function Musica({ searchQuery, setSearchQuery, setCart, cart, addToCart, removeFromCart }) {
  const [songs, setSongs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarCanciones = async () => {
      try {
        setLoading(true);
        const response = await fetch("/canciones.json");
        if (!response.ok) throw new Error("Error al cargar canciones");
        const data = await response.json();
        setSongs(data);
        setError(null);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    cargarCanciones();
  }, []);

  const filteredSongs = songs.filter(song =>
    song.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "Todos" || song.categoria === selectedCategory)
  );

  if (loading) return (
    <div className="cyberpunk-music-loading">
      <div className="cyberpunk-spinner"></div>
      <p className="cyberpunk-loading-text">CARGANDO DATOS AUDIO...</p>
    </div>
  );

  if (error) return (
    <div className="cyberpunk-music-error">
      <p className="cyberpunk-error-main">ERROR DE SISTEMA</p>
      <p className="cyberpunk-error-detail">Fallo al cargar datos de audio: {error}</p>
    </div>
  );

  return (
    <MusicaProvider>
      <div className="cyberpunk-music-container">
        <MusicaCancionesLista
          songs={filteredSongs}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
        />
        <MusicaReproductor />
      </div>
    </MusicaProvider>
  );
}

export default Musica;