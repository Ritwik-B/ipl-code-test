import React, { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import IPL_DATA from './data.json';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setData(IPL_DATA);
  }, []);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const filteredData = data.filter((player) =>
    player.Player_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>IPL Directory</h1>
      <SearchField onSearchChange={handleChange} />
      <CardList players={filteredData} />
    </div>
  );
};

export default App;
