import React from 'react';

function HeaderSearchBar({ categories, onCategoryChange, searchQuery, setSearchQuery, placeholder }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
    new Audio('/audio/terminal-click.mp3').play().catch(console.error);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="cyber-search-wrapper">
      <div className="cyber-search-terminal">
        <select 
          onChange={handleCategoryChange}
          className="cyber-search-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
        <span className="cyber-prompt">>></span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={placeholder.toUpperCase()}
          className="cyber-search-input"
        />
      </div>
      <div className="cyber-search-underline"></div>
    </div>
  );
}

export default HeaderSearchBar;