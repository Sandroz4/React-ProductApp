import React from 'react';
import { styles } from '../styles/styles';

export const Header = ({ favoritesCount, showingFavorites, onToggleView }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>SFlix</h1>
        <div style={styles.headerControls}>
          <span style={styles.favCount}>
            {favoritesCount} {favoritesCount === 1 ? 'favorite' : 'favorites'}
          </span>
          <button
            onClick={onToggleView}
            style={{
              ...styles.toggleButton,
              backgroundColor: showingFavorites ? '#3b82f6' : '#e5e7eb',
              color: showingFavorites ? 'white' : '#374151'
            }}
          >
            {showingFavorites ? 'Show All Movies' : 'My Favorites'}
          </button>
        </div>
      </div>
    </header>
  );
};