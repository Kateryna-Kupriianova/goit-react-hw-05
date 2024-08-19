import { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import axios from 'axios';

const API_KEY = '3d038329c18432526df90308185ea4bc';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDAzODMyOWMxODQzMjUyNmRmOTAzMDgxODVlYTRiYyIsIm5iOiIxNzIzOTk1NjQ2Ljc0NjQ5NCIsInN1YiI6IjY2YzIxMGRlMThlNjYyMmFkY2QzNDVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCZe9VjKyub-4CEK_TECHdsfUCTV9J81gkkxCY-RarA';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        params: {
          query: searchQuery,
          api_key: API_KEY,
        },
      });
      setMovies(response.data.results);
      setSearchQuery('');
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
