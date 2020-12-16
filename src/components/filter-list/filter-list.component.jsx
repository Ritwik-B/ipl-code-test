import React from 'react';

import FILTER_DATA from '../../data/filter.data.json';

import './filter-list.styles.css';

const FilterList = () => (
  <div className="filter-container">
    {FILTER_DATA.map((button) => (
      <span className="filter-button">{button.catergory}</span>
    ))}
  </div>
);

export default FilterList;
