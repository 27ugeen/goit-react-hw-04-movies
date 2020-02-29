import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Notification from '../../components/Notification';
import CastList from './CastList';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  state = {
    cast: [],
    loading: false,
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    this.setState({ loading: true });
    movieAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => this.setState({ cast }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { cast, loading, error } = this.state;
    return (
      <>
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {cast.length > 0 ? <CastList cast={cast} /> : <p>No cast</p>}
      </>
    );
  }
}
