import React, { Component, Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner';
import routes from '../../routes';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

const Notification = lazy(() => import('../../components/Notification'));
const MovieInfo = lazy(() => import('./MovieInfo'));
const AdditionalInfo = lazy(() => import('./AdditionalInfo'));

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  state = {
    movie: null,
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    movieAPI
      .fetchMoviesDetails(movieId)
      .then(movie => this.setState({ movie }))
      .catch(({ message }) => this.setState({ error: message }));
  };

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      return history.push(state.from);
    }

    history.push(routes.movies);
  };
  render() {
    const { movie, error } = this.state;
    return (
      <main>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <Suspense fallback={<Spinner />}>
          {error && <Notification message={error} />}
          {movie && (
            <>
              <MovieInfo movie={movie} />
              <AdditionalInfo />
            </>
          )}
        </Suspense>
      </main>
    );
  }
}
