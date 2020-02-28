import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import MoviesList from './MoviesList';
import movieAPI from '../services/movieAPI';

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: '',
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = () => {
    this.setState({ loading: true });
    movieAPI
      .fetchMovies()
      .then(movies => this.setState({ movies }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movies, loading, error } = this.state;
    return (
      <>
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {movies.length > 0 && (
          <>
            <h1 className="HomeTitle">Tranding week</h1>
            <MoviesList movies={movies} />
          </>
        )}
      </>
    );
  }
}
