import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2JkNDBkNWEwNzJmNTM1NjVkYzAzNzUwMjI1NmJjNiIsIm5iZiI6MTcyNTc4MTc0My4yNDA1NDUsInN1YiI6IjY2ZGQ1NTY0ZmY5ZTlkMDQ3OWI5NDE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-wz3fshjZSp0G8EzjEAR3j3Biqr1xFk_diuAdcgr6U",
  },
};
export const getMoviesTrend = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return response.data;
};

export const getMoviesSearch = async (search) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const getMoviesById = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return response.data;
};

export const getMoviesByCast = async (id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
};

export const getMoviesByReviews = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
    options
  );
  return response.data;
};
