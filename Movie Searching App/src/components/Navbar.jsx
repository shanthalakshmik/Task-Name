import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 text-white p-4 flex justify-center">
      <Link to="https://www.omdbapi.com" className="text-lg font-bold">
      
      </Link>
    </nav>
  );
};

export default Navbar;
