import React, { useState, useEffect } from "react";
import { MusicaProvider } from "./MusicaContexto";
import MusicaCancionesLista from "./MusicaCancionesLista";
import MusicaReproductor from "./MusicaReproductor";
import '../assets/scss/_03-Componentes/_Musica.scss';

function Musica({ searchQuery }) {
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
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>LOADING AUDIO DATA...</p>
    </div>
  );

  if (error) return (
    <div className="error-screen">
      <p>SYSTEM ERROR: FAILED TO LOAD AUDIO DATA</p>
      <p className="error-detail">{error}</p>
    </div>
  );

  return (
    <MusicaProvider>
      <div className="music-app">
        <MusicaCancionesLista
          songs={filteredSongs}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MusicaReproductor />
      </div>
    </MusicaProvider>
  );
}

export default Musica;