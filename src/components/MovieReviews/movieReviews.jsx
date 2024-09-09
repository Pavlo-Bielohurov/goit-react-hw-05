import { getMoviesByReviews } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMesange from "../ErrorMesange/errorMesange";
import Loader from "../Loader/loader";
import css from "./movieReviews.module.css";

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setRevies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function getReviews() {
      setLoader(true);
      try {
        const respons = await getMoviesByReviews(moviesId);
        setRevies(respons.results);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }
    getReviews();
  }, [moviesId]);

  console.log(reviews);

  return (
    <div>
      {!loader && reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "20px" }}>
              <h3>{review.author}</h3>
              <p className={css.description}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <ErrorMesange />}
      {loader && <Loader />}
    </div>
  );
}
