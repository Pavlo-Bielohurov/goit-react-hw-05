import { getMoviesByCast } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMesange from "../ErrorMesange/errorMesange";
import Loader from "../Loader/loader";
import css from "./movieCast.module.css";
export default function MovieCast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getCasts() {
      setLoader(true);
      try {
        const respons = await getMoviesByCast(moviesId);
        setCast(respons.data.cast);
        console.log(respons);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }
    getCasts();
  }, [moviesId]);

  console.log(cast);

  return (
    <div>
      {!loader && cast.length > 0 && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.cast_id} className={css.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.actorImage}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p className={css.description}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      ;{error && <ErrorMesange />}
      {loader && <Loader />}
    </div>
  );
}
