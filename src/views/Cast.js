import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
// import CastList from '../components/CastList';
import movieAPI from '../services/movieAPI';
import noimage from '../assets/noimage.jpg';

export default class Cast extends Component {
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
        {cast.length > 0 ? (
          <ul className="CastList">
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  className="CastImage"
                  src={
                    profile_path
                      ? `${movieAPI.baseImageUrl}${profile_path}`
                      : `${noimage}`
                  }
                  alt=""
                  width="100px"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cast</p>
        )}
      </>
    );
  }
}
