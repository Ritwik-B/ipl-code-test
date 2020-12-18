import React from 'react';

import FILTER_DATA from '../../data/filter.data.json';

import './filter-list.styles.css';

const FilterList = ({ onFilterChange, filterCategory }) => (
  <div className="filter-container">
    {FILTER_DATA.map((button) => (
      <span
        key={button.Id}
        className={`${
          filterCategory === button.property
            ? 'active-filter-button'
            : 'filter-button'
        }`}
        onClick={() => onFilterChange(button.property)}
      >
        {button.catergory}
      </span>
    ))}
  </div>
);

export default FilterList;
