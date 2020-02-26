const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b5e820553e5fd9114e49637174c9cfda';
const baseImageUrl = 'https://image.tmdb.org/t/p/original';

const fetchMovies = async () => {
  const res = await fetch(`${baseURL}/trending/all/week?api_key=${API_KEY}`);
  const { results } = await res.json();
  return results;
};

const fetchMoviesDetails = async movieId => {
  const res = await fetch(`${baseURL}/movie/${movieId}?api_key=${API_KEY}`);
  const result = await res.json();
  return result;
};

const fetchMoviesWithQuery = async query => {
  const res = await fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
  );
  const { results } = await res.json();
  return results;
};

const fetchMovieCast = async movieId => {
  const res = await fetch(
    `${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  const result = await res.json();
  return result;
};

const fetchMovieReviews = async movieId => {
  const res = await fetch(
    `${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
  const { results } = await res.json();
  return results;
};

export default {
  fetchMovies,
  fetchMoviesDetails,
  fetchMoviesWithQuery,
  fetchMovieCast,
  fetchMovieReviews,
  baseImageUrl,
};
