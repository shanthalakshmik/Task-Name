import React, { useState } from 'react';

// Default movie data
const defaultMovies = [
  {
    imdbID: 'tt0120737',
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/Ringstrilogyposter.jpg',
  },
  {
    imdbID: 'tt0120738',
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg',
  },
  {
    imdbID: 'tt0187738',
    Title: 'Blade',
    Year: '1998',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/8/82/Blade_movie.jpg',
  },
  {
    imdbID: 'tt0103874',
    Title: 'Candyman',
    Year: '1992',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Candymanposter.jpg',
  },
  {
    imdbID: 'tt0078748',
    Title: 'Alien',
    Year: '1979',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg',
  },
  
  {
    imdbID: 'tt0499549',
    Title: 'Avatar',
    Year: '2009',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Avatar-Teaser-Poster.jpg',
  },
  {
    imdbID: 'tt0120338',
    Title: 'Titanic',
    Year: '1997',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg',
  },
  {
    imdbID: 'tt6806448',
    Title: 'Jumanji: Welcome to the Jungle',
    Year: '2017',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png',
  },
  {
    imdbID: 'tt2283362',
    Title: 'The Avengers',
    Year: '2012',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
  },
  {
    imdbID: 'tt4520988',
    Title: 'Frozen 2',
    Year: '2019',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Frozen_2_poster.jpg',
  },
  {
    imdbID: 'tt0910970',
    Title: 'WALL-E',
    Year: '2008',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/c/c2/WALL-Eposter.jpg',
  },
  {
    imdbID: 'tt0172495',
    Title: 'Gladiator',
    Year: '2000',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg',
  },
  {
    imdbID: 'tt9376612',
    Title: 'Shang-Chi and the Legend of the Ten Rings',
    Year: '2021',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Shang-Chi_poster.jpeg',
  },
  {
    imdbID: 'tt0367594',
    Title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    Year: '2005',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/b/be/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe_%282005_film%29.jpg',
  },
  {
    imdbID: 'tt3521164',
    Title: 'Moana',
    Year: '2016',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg',
  },
  {
    imdbID: 'tt1025100',
    Title: 'Gemini Man',
    Year: '2019',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/3/3a/GeminiManPoster.jpeg',
  },
  {
    imdbID: 'tt0903624',
    Title: 'The Hobbit: There and Back Again',
    Year: '2014',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/a/a5/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg',
  },
  {
    imdbID: 'tt1298650',
    Title: 'Brothers',
    Year: '2015',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Brothers_2015_poster.jpg',
  },
  {
    imdbID: 'tt13269572',
    Title: 'Lover',
    Year: '2022',
    Poster: 'https://via.placeholder.com/300',
  },
  {
    imdbID: 'tt0499549',
    Title: 'Chandramukhi',
    Year: '2005',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/3/39/Chandramukhi_2005_poster.jpg',
  },
  {
    imdbID: 'tt0323013',
    Title: 'Amaran',
    Year: '1992',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Amaranposter.jpg',
  },
  {
    imdbID: 'tt0117603',
    Title: 'Beast',
    Year: '2022',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/6/69/Beast_film_poster.jpg',
  },
];

const SearchResults = () => {
  const [movies, setMovies] = useState(defaultMovies); // Initialize with default movies
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch movie data from OMDB API
  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=eb49ecf`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]);
    }
    setLoading(false);
  };

  // Handle search input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchMovies(query);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Change to your image
      }}
    >

    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center text-white p-4">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-6 text-center">Movie Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col items-center w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className="w-full p-3 rounded-lg border-none focus:outline-none mb-4 text-black"
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Search
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && <p className="text-lg font-bold mt-4">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-screen-xl">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white rounded-lg shadow-lg p-4 text-black">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg text-center">{movie.Title}</h3>
            <p className="text-center">{movie.Year}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
