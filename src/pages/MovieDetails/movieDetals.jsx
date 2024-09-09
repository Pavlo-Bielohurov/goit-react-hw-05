import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import { getMoviesById } from "../../servers/tmdb";
import MovieInfo from "../../components/MovieInfo/movieInfo";

export default function MoviesDetails() {
  const { moviesId } = useParams();

  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const respons = await getMoviesById(moviesId);
        setMovie(respons);
      } catch (e) {
        console.log(e);
      }
    }

    getMovieInfo();
  }, [moviesId]);
  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      {movie && <MovieInfo movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast" state={location.state}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={location.state}>
            Reviews
          </NavLink>
        </li>

        <Outlet />
      </ul>
    </>
  );
}
