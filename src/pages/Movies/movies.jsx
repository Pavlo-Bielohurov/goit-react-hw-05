import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/movieList";
import { getMoviesSearch } from "../../servers/tmdb";
import ErrorMesange from "../../components/ErrorMesange/errorMesange";
import Loader from "../../components/Loader/loader";
import css from "./movies.module.css";

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const movie = params.get("movie");

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieValue = e.target.elements.movie.value.trim();
    if (movieValue) {
      params.set("movie", movieValue);
      setParams(params);
    }

    e.target.reset();
  };

  useEffect(() => {
    if (!movie) return;
    async function fetchMovies() {
      setLoader(true);
      setMovies([]);
      setError(false);
      try {
        const data = await getMoviesSearch(movie);
        setMovies(data.results);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }

    fetchMovies();
  }, [movie]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="movie" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {!loader && movies && <MovieList trendmovies={movies} />}
      {error && <ErrorMesange />}
      {loader && <Loader />}
    </div>
  );
}
