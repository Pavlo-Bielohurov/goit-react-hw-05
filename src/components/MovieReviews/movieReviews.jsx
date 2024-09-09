import { getMoviesByReviews } from "../../servers/tmdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setRevies] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const respons = await getMoviesByReviews(moviesId);
        setRevies(respons.results);
      } catch (e) {
        console.log(e);
      }
    }
    getReviews();
  }, [moviesId]);

  console.log(reviews);

  return (
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "20px" }}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
