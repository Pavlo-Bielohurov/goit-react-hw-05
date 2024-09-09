export default function MovieInfo({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h1>{movie.title}</h1>
        <p>{`Release Date: ${movie.release_date}`}</p>
        <p>{`Country: ${movie.production_countries
          .map((countre) => countre.name)
          .join(" , ")}`}</p>
        <p>{`Budget: ${movie.budget} USD`}</p>
        <p>{`Runtime: ${movie.runtime} min`}</p>
        <p>{`Rating: ${movie.vote_average}/10`}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((gener) => gener.name).join(" , ")}</p>
      </div>
    </div>
  );
}
