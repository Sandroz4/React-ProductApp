import React, { useState } from 'react';
import { movies } from './data/movies';
import { styles } from './styles/styles';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MovieCard } from './components/MovieCard';
import { MovieDetails } from './components/MovieDetails';
import { EmptyState } from './components/EmptyState';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showingFavorites, setShowingFavorites] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter movies based on search and favorites
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const isFav = favorites.includes(movie.id);
    
    if (showingFavorites) {
      return matchesSearch && isFav;
    }
    return matchesSearch;
  });

  const toggleFavorite = (movieId) => {
    setFavorites(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div style={styles.app}>
      <Header 
        favoritesCount={favorites.length}
        showingFavorites={showingFavorites}
        onToggleView={() => setShowingFavorites(!showingFavorites)}
      />

      <main style={styles.main}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <div style={styles.resultsHeader}>
          <h2 style={styles.sectionTitle}>
            {showingFavorites ? 'Your Favorite Movies' : 'Popular Movies'} 
            <span style={styles.resultCount}>({filteredMovies.length})</span>
          </h2>
        </div>

        {filteredMovies.length > 0 ? (
          <div style={styles.moviesGrid}>
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onFavoriteClick={toggleFavorite}
                onMovieClick={openMovieDetails}
              />
            ))}
          </div>
        ) : (
          <EmptyState showingFavorites={showingFavorites} />
        )}
      </main>

      <MovieDetails
        movie={selectedMovie}
        isOpen={modalOpen}
        onClose={closeModal}
        isFavorite={selectedMovie ? favorites.includes(selectedMovie.id) : false}
        onFavoriteClick={toggleFavorite}
      />
    </div>
  );
};

export default App;