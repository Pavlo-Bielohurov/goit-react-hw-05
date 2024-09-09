import { useEffect, useRef, useState, Suspense } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import clsx from "clsx";

import { getMoviesById } from "../../servers/tmdb";
import MovieInfo from "../../components/MovieInfo/movieInfo";
import ErrorMesange from "../../components/ErrorMesange/errorMesange";
import Loader from "../../components/Loader/loader";
import css from "./MovieDetails.module.css";

const NavLinkStyle = (props) => {
  return clsx(css.link, props.isActive && css.isActive);
};

export default function MoviesDetails() {
  const { moviesId } = useParams();

  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        setLoader(true);
        const respons = await getMoviesById(moviesId);
        setMovie(respons);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }

    getMovieInfo();
  }, [moviesId]);
  return (
    <>
      <Link to={backLinkRef.current} className={css.goBackBtn}>
        Go back
      </Link>
      {!loader && movie && <MovieInfo movie={movie} />}
      {error && <ErrorMesange />}
      {loader && <Loader />}
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={NavLinkStyle} state={location.state}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={NavLinkStyle} state={location.state}>
            Reviews
          </NavLink>
        </li>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ul>
    </>
  );
}
