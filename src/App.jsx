import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import Loader from "./components/Loader/loader.jsx";
// import Home from "./pages/Home/home.jsx";
// import Movies from "./pages/Movies/movies.jsx";
// import MoviesDetails from "./pages/MovieDetails/movieDetals.jsx";
// import MovieCast from "./components/MovieCast/movieCast.jsx";
// import MovieReviews from "./components/MovieReviews/movieReviews.jsx";
// import NotFaund from "./pages/NotFaund/notFaund.jsx";

const Home = lazy(() => import("./pages/Home/home"));
const Movies = lazy(() => import("./pages/Movies/movies.jsx"));
const MoviesDetails = lazy(() =>
  import("./pages/MovieDetails/movieDetals.jsx")
);
const MovieCast = lazy(() => import("./components/MovieCast/movieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/movieReviews.jsx")
);
const NotFaund = lazy(() => import("./pages/NotFaund/notFaund.jsx"));

// import "./App.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MoviesDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFaund />} />
      </Routes>
    </Suspense>
  );
}

export default App;
