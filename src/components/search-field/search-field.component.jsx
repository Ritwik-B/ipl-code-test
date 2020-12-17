import React from 'react';

import './search-field.styles.css';

const SearchField = ({ onSearchChange, filterCategory }) => (
  <input
    className="search-field"
    type="search"
    placeholder={`Search ${filterCategory}`}
    onChange={onSearchChange}
  />
);

export default SearchField;
