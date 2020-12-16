import React, { useState } from 'react';

import SearchField from './components/search-field/search-field.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import IPL_DATA from './data.json';

import './App.css';

const App = () => {
  const [data, setData] = useState(IPL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const filteredData = data.filter((player) =>
    player.Player_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>IPL Directory</h1>
      <SearchField onSearchChange={handleChange} />
      <div className="button-container">
        <button className="button" onClick={() => setShowAll(!showAll)}>
          Show All
        </button>
        <button className="button">Filters</button>
      </div>
      <CardList playerData={filteredData} showAll={showAll} />
    </div>
  );
};

export default App;
