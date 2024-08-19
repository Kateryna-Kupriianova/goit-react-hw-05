import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '3d038329c18432526df90308185ea4bc';
// Замість ключа API, використовуємо токен доступу
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDAzODMyOWMxODQzMjUyNmRmOTAzMDgxODVlYTRiYyIsIm5iZiI6MTcyMzk5NTY0Ni43NDY0OTQsInN1YiI6IjY2YzIxMGRlMThlNjYyMmFkY2QzNDVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCZe9VjKyub-4CEK_TECHdsfUCTV9J81gkkxCY-RarA';

const MovieDetailPage = () => {
  const { movieId } = useParams();  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          params: {
            api_key: API_KEY, 
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching the movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetailPage;
