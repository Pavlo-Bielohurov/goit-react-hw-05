import { getMoviesByCast } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCasts() {
      try {
        const respons = await getMoviesByCast(moviesId);
        setCast(respons.data.cast);
        console.log(respons);
      } catch (e) {
        console.log(e);
      }
    }
    getCasts();
  }, [moviesId]);

  console.log(cast);

  return (
    <div>
      {cast.length > 0 && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
