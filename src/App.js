import React, { useState, useEffect } from 'react';

import SearchField from './components/search-field/search-field.component.jsx';
import IPL_DATA from './data.json';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    setData(IPL_DATA);
  }, []);

  return (
    <div className="App">
      <h1>IPL Directory</h1>
      <SearchField onSearchChange={handleChange} />
    </div>
  );
};

export default App;
