import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Notification from '../../components/Notification';
import MovieInfo from './MovieInfo';
import AdditionalInfo from './AdditionalInfo';
import routes from '../../routes';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  state = {
    movie: null,
    loading: false,
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    this.setState({ loading: true });
    movieAPI
      .fetchMoviesDetails(movieId)
      .then(movie => this.setState({ movie }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
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
    const { movie, loading, error } = this.state;
    return (
      <main>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {movie && (
          <>
            <MovieInfo movie={movie} />
            <AdditionalInfo />
          </>
        )}
      </main>
    );
  }
}
