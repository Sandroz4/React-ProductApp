import React from 'react';
import { styles } from '../styles/styles';

export const EmptyState = ({ showingFavorites }) => {
  return (
    <div style={styles.emptyState}>
      <div style={styles.emptyIcon}>🎭</div>
      <h3 style={styles.emptyTitle}>
        {showingFavorites ? 'No favorites yet!' : 'Nothing found'}
      </h3>
      <p style={styles.emptyText}>
        {showingFavorites 
          ? 'Start building your movie collection by clicking the heart on any movie.' 
          : 'Try searching for something else, or check your spelling.'}
      </p>
    </div>
  );
};