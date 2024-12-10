import axios from 'axios';

const API_KEY = 'eb49ecf'; 
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query, type) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        type: type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};

