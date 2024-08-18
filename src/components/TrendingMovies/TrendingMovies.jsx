import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '3d038329c18432526df90308185ea4bc';
const TRENDING_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(TRENDING_MOVIES_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
