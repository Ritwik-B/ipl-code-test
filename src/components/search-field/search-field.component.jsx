import React from 'react';

import './search-field.styles.css';

const SearchField = ({ onSearchChange }) => (
  <input
    className="search-field"
    type="search"
    placeholder="Search"
    onChange={onSearchChange}
  />
);

export default SearchField;
