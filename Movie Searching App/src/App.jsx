import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import MovieDetails from './components/MovieDetails'; // Ensure this path is correct
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
