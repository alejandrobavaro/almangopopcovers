import React, { useContext } from "react";
import PropTypes from "prop-types";
import MusicaCancionCard from "./MusicaCancionCard";
import { MusicaContexto } from "./MusicaContexto";

function MusicaCancionesLista({
  songs,
  searchQuery,
  selectedCategory,
  setSelectedCategory,
}) {
  const { addToCart } = useContext(MusicaContexto);
  const categories = ["Todos", ...new Set(songs.map(song => song.categoria).filter(Boolean))];

  return (
    <div className="music-archive">
      <div className="archive-header">
        <div className="archive-title-container">
          <h2 className="archive-title">
            <span className="title-gradient">DIGITAL</span>
            <span className="title-outline">ARCHIVE</span>
          </h2>
          <div className="archive-counter">
            <span className="counter-value">{songs.length}</span>
            <span className="counter-label">AUDIO FILES</span>
          </div>
        </div>
        
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category || 'all'}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {(category || 'Todos').toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="music-grid">
        {songs.length > 0 ? (
          songs.map((song) => (
            <MusicaCancionCard
              key={song.id}
              cancion={song}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">⎇</div>
            <p>NO AUDIO FILES FOUND</p>
            {searchQuery && (
              <p className="empty-sub">
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
  songs: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default MusicaCancionesLista;