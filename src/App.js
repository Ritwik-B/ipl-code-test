import React, { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import FilterList from './components/filter-list/filter-list.component.jsx';

import PLAYER_IPL_DATA from './data/player.data.json';
import TEAM_IPL_DATA from './data/team.data.json';

import './App.css';

const App = () => {
  const [filterCategory, setFilterCategory] = useState('Player_Name');
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorydata = (data) => setData(data); // workaround for hooks restriction.

  useEffect(() => {
    if (filterCategory === 'Player_Name') {
      handleCategorydata(PLAYER_IPL_DATA);
    } else {
      handleCategorydata(TEAM_IPL_DATA);
    }
  }, [filterCategory]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const filteredData = data.filter((entity) =>
    entity[filterCategory].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>IPL Directory</h1>
      <SearchField onSearchChange={handleChange} />
      <div className="filter-card-list-container">
        <FilterList />
        <CardList entityData={filteredData} />
      </div>
    </div>
  );
};

export default App;
