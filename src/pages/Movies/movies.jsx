import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList/movieList";
import { getMoviesSearch } from "../../servers/tmdb";

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovies] = useState("");
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    params.set("movie", e.target.elements.movie.value);
    setParams(params);
    setSearchMovies(e.target.elements.movie.value);

    e.target.reset();
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMoviesSearch(searchMovie);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMovies();
  }, [searchMovie]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList trendmovies={movies} />}
    </div>
  );
}
