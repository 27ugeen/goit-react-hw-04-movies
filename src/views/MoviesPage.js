import React, { Component } from 'react';
import getQueryParams from '../utils/getQueryParams';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import Searchbox from '../components/Searchbox';
import MoviesList from './MoviesList';
import movieAPI from '../services/movieAPI';
import PropTypes from 'prop-types';

export default class MoviesPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  state = {
    movies: [],
    loading: false,
    error: '',
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevParams } = getQueryParams(prevProps.location.search);
    const { query: nextParams } = getQueryParams(this.props.location.search);
    if (nextParams && prevParams !== nextParams) {
      this.fetchMovies(nextParams);
    }
  }
  fetchMovies = query => {
    this.setState({ loading: true });
    movieAPI
      .fetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };
  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
