import React, { useContext } from "react";
import PropTypes from "prop-types";
import MusicaCancionCard from "./MusicaCancionCard";
import { MusicaContexto } from "./MusicaContexto";

function MusicaCancionesLista({
  songs = [],
  searchQuery = "",
  selectedCategory = "Todos",
  setSelectedCategory = () => {},
}) {
  const { addToCart } = useContext(MusicaContexto);
  const categories = ["Todos", ...new Set(songs.map(song => song?.categoria).filter(Boolean))];

  // Filtrado seguro de canciones
  const filteredSongs = songs.filter(song => {
    if (!song) return false;
    const matchesSearch = song.nombre?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || song.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="cyberpunk-music-archive">
      <div className="cyberpunk-archive-header">
        <div className="cyberpunk-archive-title">
          <h2 className="cyberpunk-archive-title-text">
            <span className="cyberpunk-title-gradient">DIGITAL</span>
            <span className="cyberpunk-title-outline">ARCHIVE</span>
          </h2>
          <div className="cyberpunk-archive-counter">
            <span className="cyberpunk-counter-value">{filteredSongs.length}</span>
            <span className="cyberpunk-counter-label">AUDIO FILES</span>
          </div>
        </div>
        
        <div className="cyberpunk-category-selector">
          {categories.map(category => (
            <button
              key={category || 'all'}
              className={`cyberpunk-category-btn ${selectedCategory === category ? 'cyberpunk-category-btn--active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {(category || 'Todos').toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="cyberpunk-music-grid-compact">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <MusicaCancionCard
              key={song?.id || index}
              cancion={song}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <div className="cyberpunk-empty-state">
            <div className="cyberpunk-empty-icon">⎇</div>
            <p className="cyberpunk-empty-text">NO AUDIO FILES FOUND</p>
            {searchQuery && (
              <p className="cyberpunk-empty-subtext">
                No results for "{searchQuery}" in {selectedCategory}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

MusicaCancionesLista.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nombre: PropTypes.string,
    artista: PropTypes.string,
    duracion: PropTypes.string,
    categoria: PropTypes.string,
    imagen: PropTypes.string
  })),
  searchQuery: PropTypes.string,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

export default MusicaCancionesLista;