// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import Home from "./pages/Home/home.jsx";
import Movies from "./pages/Movies/movies.jsx";
import MoviesDetails from "./pages/MovieDetails/movieDetals.jsx";
import MovieCast from "./components/MovieCast/movieCast.jsx";
import MovieReviews from "./components/MovieReviews/movieReviews.jsx";
import NotFaund from "./pages/NotFaund/notFaund.jsx";

// const Home = lazy(() => import("./pages/Home/home"));
// const Movies = lazy(() => import("./pages/Movis/movis"));

// import './App.css'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
