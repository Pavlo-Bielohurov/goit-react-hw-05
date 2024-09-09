import { getMoviesTrend } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/movieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const res = await getMoviesTrend();
        setMovies(res.results);
        console.log(movies);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList trendmovies={movies} />}
    </>
  );
}
