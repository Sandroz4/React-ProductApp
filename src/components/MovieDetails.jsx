import React from 'react';
import { Heart, Star, Calendar, Clock, X } from 'lucide-react';
import { styles } from '../styles/styles';

export const MovieDetails = ({ movie, isOpen, onClose, isFavorite, onFavoriteClick }) => {
  if (!isOpen || !movie) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <img
            src={movie.poster}
            alt={movie.title}
            style={styles.modalPoster}
          />
          <button onClick={onClose} style={styles.closeButton}>
            <X size={24} />
          </button>
        </div>
        
        <div style={styles.modalBody}>
          <div style={styles.movieHeader}>
            <div>
              <h1 style={styles.modalTitle}>{movie.title}</h1>
              <div style={styles.movieInfo}>
                <span style={styles.infoItem}>
                  <Calendar size={16} />
                  {movie.year}
                </span>
                <span style={styles.infoItem}>
                  <Clock size={16} />
                  {movie.duration}
                </span>
                <span style={styles.infoItem}>
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  {movie.rating}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => onFavoriteClick(movie.id)}
              style={{
                ...styles.modalFavoriteButton,
                backgroundColor: isFavorite ? '#e53e3e' : '#f7f7f7',
                color: isFavorite ? 'white' : '#666'
              }}
            >
              <Heart 
                size={24} 
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </button>
          </div>
          
          <div style={styles.modalGenres}>
            {movie.genre.map((g) => (
              <span key={g} style={styles.modalGenreTag}>{g}</span>
            ))}
          </div>
          
          <div style={styles.descriptionSection}>
            <h2 style={styles.descriptionTitle}>Plot</h2>
            <p style={styles.description}>{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};