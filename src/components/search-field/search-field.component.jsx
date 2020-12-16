import React from 'react';

import './search-field.styles.css';

const SearchField = ({ onSearchChange }) => (
  <input
    className="search-field"
    type="search"
    placeholder="search players"
    onChange={onSearchChange}
  />
);

export default SearchField;
