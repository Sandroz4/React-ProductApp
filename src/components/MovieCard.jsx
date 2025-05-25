import React from 'react';
import { Heart, Star } from 'lucide-react';
import { styles } from '../styles/styles';

export const MovieCard = ({ movie, isFavorite, onFavoriteClick, onMovieClick }) => {
  return (
    <div style={styles.movieCard} onClick={() => onMovieClick(movie)}>
      <div style={styles.posterContainer}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={styles.poster}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick(movie.id);
          }}
          style={{
            ...styles.favoriteButton,
            backgroundColor: isFavorite ? '#e53e3e' : 'rgba(255, 255, 255, 0.9)',
            color: isFavorite ? 'white' : '#666'
          }}
        >
          <Heart 
            size={20} 
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
      </div>
      
      <div style={styles.cardContent}>
        <h3 style={styles.movieTitle}>{movie.title}</h3>
        <div style={styles.movieMeta}>
          <div style={styles.rating}>
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span>{movie.rating}</span>
          </div>
          <span style={styles.year}>{movie.year}</span>
        </div>
        <div style={styles.genreContainer}>
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} style={styles.genreTag}>{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
};