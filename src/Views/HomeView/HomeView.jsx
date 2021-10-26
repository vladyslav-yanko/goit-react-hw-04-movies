import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import { fetchPopularMoviesOfTheDay } from '../../API/themoviedb';
import css from './HomeView.module.css';

export default function HomeView() {
  

  const { url } = useRouteMatch();
  const location = useLocation();
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchPopularMoviesOfTheDay()
      .then(res => res.results)
      .then(setPopularMovies);
  }, []);

  return (
    <>
      <h2>Trending</h2>
      {popularMovies && (
        <ul className={css.list}>
          {popularMovies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: location },
                }}
                className={css.link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
