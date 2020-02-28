import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import Cast from './Cast';
import Reviews from './Reviews';
import routes from '../routes';
import movieAPI from '../services/movieAPI';
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
    const { match, location } = this.props;
    return (
      <main>
        {error && <Notification message={error} />}
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {loading && <Spinner />}
        {movie && (
          <div className="MovieInfo">
            <img
              className="MovieImage"
              src={`${movieAPI.baseImageUrl}${movie.poster_path}`}
              alt={movie.title}
              width="240px"
            />
            <div className="MovieDescription">
              <h1 className="MovieTitle">{movie.title}</h1>
              <p>Release date: {movie.release_date}</p>
              <p>Vote average: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className="GanresList">
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="AdditionalInfo">
          <h4>Additional information</h4>
          <ul className="AdditionalInfoList">
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}${routes.cast}`,
                  state: { from: location.state.from },
                }}
              >
                cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}${routes.reviews}`,
                  state: { from: location.state.from },
                }}
              >
                reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route path={`${match.path}${routes.cast}`} component={Cast} />
        <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
      </main>
    );
  }
}
