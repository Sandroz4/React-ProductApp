import React from 'react';
import { Search } from 'lucide-react';
import { styles } from '../styles/styles';

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchBox}>
        <Search style={styles.searchIcon} />
        <input
          type="text"
          placeholder="What movie are you looking for?"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={styles.searchInput}
        />
      </div>
    </div>
  );
};
