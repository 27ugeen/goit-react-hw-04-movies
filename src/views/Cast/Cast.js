import React, { Component, Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

const Notification = lazy(() => import('../../components/Notification'));
const CastList = lazy(() => import('./CastList'));

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  state = {
    cast: [],
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    movieAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => this.setState({ cast }))
      .catch(({ message }) => this.setState({ error: message }));
  };
  render() {
    const { cast, error } = this.state;
    return (
      <Suspense fallback={<Spinner />}>
        {error && <Notification message={error} />}
        {cast.length > 0 ? <CastList cast={cast} /> : <p>No cast</p>}
      </Suspense>
    );
  }
}
