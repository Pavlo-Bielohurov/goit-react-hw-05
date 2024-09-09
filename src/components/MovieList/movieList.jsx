import { Link, useLocation } from "react-router-dom";

export default function MovieList({ trendmovies }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {trendmovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location.state}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
