import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryList from './pages/CountryList';
import CountryDetails from './pages/CountryDetails';
import SubRegions from './pages/SubRegions';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":continent" element={<CountryList />} />
        <Route path=":continent/:country" element={<CountryDetails />} />
        <Route path=":continent/:country/:regions" element={<SubRegions />} />
      </Routes>
    </>
  );
}

export default App;
