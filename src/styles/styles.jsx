export const styles = {
  // App styles
  app: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  
  // Header styles
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e2e8f0',
    padding: '1.5rem 0'
  },
  
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a202c',
    margin: 0
  },
  
  headerControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  
  favCount: {
    fontSize: '0.9rem',
    color: '#64748b'
  },
  
  toggleButton: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  
  // Main content styles
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  
  // Search styles
  searchContainer: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center'
  },
  
  searchBox: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px'
  },
  
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    pointerEvents: 'none'
  },
  
  searchInput: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box'
  },
  
  // Results header
  resultsHeader: {
    marginBottom: '1.5rem'
  },
  
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0
  },
  
  resultCount: {
    color: '#6b7280',
    fontWeight: '400',
    marginLeft: '0.5rem'
  },
  
  // Movie grid styles
  moviesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  
  // Movie card styles
  movieCard: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative'
  },
  
  posterContainer: {
    position: 'relative'
  },
  
  poster: {
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  },
  
  favoriteButton: {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  
  cardContent: {
    padding: '1rem'
  },
  
  movieTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 0.5rem 0',
    lineHeight: '1.3'
  },
  
  movieMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem'
  },
  
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  
  year: {
    fontSize: '0.9rem',
    color: '#6b7280'
  },
  
  genreContainer: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  
  genreTag: {
    fontSize: '0.75rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.5rem',
    borderRadius: '1rem',
    fontWeight: '500'
  },
  
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 1000
  },
  
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  
  modalHeader: {
    position: 'relative'
  },
  
  modalPoster: {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  },
  
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  },
  
  modalBody: {
    padding: '1.5rem'
  },
  
  movieHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  
  modalTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '0 0 0.75rem 0'
  },
  
  movieInfo: {
    display: 'flex',
    gap: '1rem',
    color: '#6b7280',
    fontSize: '0.9rem'
  },
  
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  
  modalFavoriteButton: {
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  
  modalGenres: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  
  modalGenreTag: {
    fontSize: '0.85rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.375rem 0.75rem',
    borderRadius: '1rem',
    fontWeight: '500'
  },
  
  descriptionSection: {
    marginTop: '1rem'
  },
  
  descriptionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 0.75rem 0'
  },
  
  description: {
    color: '#4b5563',
    lineHeight: '1.6',
    margin: 0,
    fontSize: '1rem'
  },
  
  // Empty state styles
  emptyState: {
    textAlign: 'center',
    padding: '3rem 1rem'
  },
  
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#4b5563',
    margin: '0 0 0.5rem 0'
  },
  
  emptyText: {
    color: '#6b7280',
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1.5'
  }
};