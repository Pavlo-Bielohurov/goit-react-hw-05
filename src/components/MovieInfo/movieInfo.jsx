import css from "./movieInfo.module.css";
export default function MovieInfo({ movie }) {
  return (
    <div className={css.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={css.img}
      />
      <div className={css.containerDescription}>
        <h1 className={css.title}>{movie.title}</h1>
        <p
          className={css.description}
        >{`Release Date: ${movie.release_date}`}</p>
        <p className={css.description}>{`Country: ${movie.production_countries
          .map((countre) => countre.name)
          .join(" , ")}`}</p>
        <p className={css.description}>{`Budget: ${movie.budget} USD`}</p>
        <p className={css.description}>{`Runtime: ${movie.runtime} min`}</p>
        <p className={css.description}>{`Rating: ${movie.vote_average.toFixed(
          1
        )}/10`}</p>
        <h2 className={css.title}>Overview</h2>
        <p className={css.description}>{movie.overview}</p>
        <h3 className={css.title}>Genres</h3>
        <p className={css.description}>
          {movie.genres.map((gener) => gener.name).join(" , ")}
        </p>
      </div>
    </div>
  );
}
