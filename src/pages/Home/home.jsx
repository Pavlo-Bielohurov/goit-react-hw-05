import { getMoviesTrend } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/movieList";
import ErrorMesange from "../../components/ErrorMesange/errorMesange";
import Loader from "../../components/Loader/loader";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getMovie() {
      setLoader(true);
      try {
        const res = await getMoviesTrend();
        setMovies(res.results);
        console.log(movies);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }
    getMovie();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {!loader && movies.length > 0 && <MovieList trendmovies={movies} />}
      {error && <ErrorMesange />}
      {loader && <Loader />}
    </>
  );
}
