import React, { useState } from 'react';

// movie data
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
      imdbID: 'tt7286456',
      Title: 'Joker',
      Year: '2019',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg',
    },
    {
      imdbID: 'tt0369339',
      Title: 'The Aviator',
      Year: '2004',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Aviator_%282004%29.png',
    },
    {
      imdbID: 'tt2283362',
      Title: 'Jumanji: Welcome to the Jungle',
      Year: '2017',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png',
    },
    {
      imdbID: 'tt0120802',
      Title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      Year: '2003',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png',
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
      imdbID: 'tt6673612',
      Title: 'Dolittle',
      Year: '2020',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/6/66/Dolittle_%28film%29_poster.jpg',
    },
    {
      imdbID: 'tt0848228',
      Title: 'The Avengers',
      Year: '2012',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
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
      imdbID: 'tt9376612',
      Title: 'Shang-Chi and the Legend of the Ten Rings',
      Year: '2021',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Shang-Chi_poster.jpeg',
    },
    {
      imdbID: 'tt0903624',
      Title: 'The Hobbit: There and Back Again',
      Year: '2014',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/a/a5/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg',
    },
    {
      imdbID: 'tt1099212',
      Title: 'Way of War',
      Year: '2009',
      Poster: 'https://via.placeholder.com/300',
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
    {
      imdbID: 'tt10954600',
      Title: 'Bad Boys for Life',
      Year: '2020',
      Poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Bad_Boys_for_Life_poster.jpg',
    },
  ]
const SearchResults = () => {
  const [movies, setMovies] = useState([]); // Initialize with an empty array
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
    } finally {
      setLoading(false);
    }
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
    } else {
      setError('Please enter a valid search term.');
    }
  };

  return (
    <div
    className="min-h-screen bg-cover bg-center text-white p-6"
    style={{
      backgroundColor: '#2c3e50', // Fallback background color
    }}
  >
      <h2 className="text-3xl font-bold mb-6 text-center">React Movie Search</h2>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center space-y-4 mb-6"
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className="border p-3 rounded w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Movie List */}
      {movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="border rounded bg-gray-800 p-4 shadow-lg"
            >
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/300'
                }
                alt={movie.Title || 'No Image Available'}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg">{movie.Title}</h3>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {!loading && !error && movies.length === 0 && query && (
        <p className="text-gray-400 text-center">
          No movies found. Try searching for something else!
        </p>
      )}
    </div>
  );
};

export default SearchResults;
