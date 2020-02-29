import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Notification from '../../components/Notification';
import ReviewsList from './ReviewsList';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
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
          <ReviewsList reviews={reviews} />
        ) : (
          <p>No reviews</p>
        )}
      </>
    );
  }
}
