import React, { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import FilterList from './components/filter-list/filter-list.component.jsx';
import Default from './components/default/default.component.jsx';

import PLAYER_IPL_DATA from './data/player.data.json';
import TEAM_IPL_DATA from './data/team.data.json';

import './App.css';

const App = () => {
  const [filterCategory, setFilterCategory] = useState('Player_Name');
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (filterCategory === 'Player_Name') {
      handleCategoryData(PLAYER_IPL_DATA);
    } else {
      handleCategoryData(TEAM_IPL_DATA);
    }
  }, [filterCategory]);

  const handleCategoryData = async (data) => {
    await setData(data);
  }; // workaround for hooks restriction.

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // const handleFilterChange = (filter) => setFilterCategory(filter);

  const filterData = (newData) =>
    newData.filter((entity) =>
      entity[filterCategory].toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="App">
      <h1>IPL Directory</h1>
      <SearchField
        onSearchChange={handleSearchChange}
        filterCategory={filterCategory}
      />
      <div className="filter-card-list-container">
        <FilterList
          onFilterChange={setFilterCategory}
          filterCategory={filterCategory}
        />
        {searchTerm ? (
          <CardList
            entityData={filterData(data)}
            filterCategory={filterCategory}
          />
        ) : (
          <Default />
        )}
      </div>
    </div>
  );
};

export default App;
