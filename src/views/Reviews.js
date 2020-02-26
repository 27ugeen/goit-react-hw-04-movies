import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import movieAPI from '../services/movieAPI';

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    this.setState({ loading: true });
    movieAPI
      .fetchMovieReviews(movieId)
      .then(reviews => this.setState({ reviews: [...reviews] }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { reviews, loading, error } = this.state;
    return (
      <>
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {reviews.length > 0 ? (
          <ul className="ReviewsList">
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews</p>
        )}
      </>
    );
  }
}
