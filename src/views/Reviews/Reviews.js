import React, { Component, Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

const Notification = lazy(() => import('../../components/Notification'));
const ReviewsList = lazy(() => import('./ReviewsList'));

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  state = {
    reviews: [],
    error: '',
  };
  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }
  fetchMovies = movieId => {
    movieAPI
      .fetchMovieReviews(movieId)
      .then(reviews => this.setState({ reviews: [...reviews] }))
      .catch(({ message }) => this.setState({ error: message }));
  };
  render() {
    const { reviews, error } = this.state;
    return (
      <Suspense fallback={<Spinner />}>
        {error && <Notification message={error} />}
        {reviews.length > 0 ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <p>No reviews</p>
        )}
      </Suspense>
    );
  }
}
