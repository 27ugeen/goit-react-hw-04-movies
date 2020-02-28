import React from 'react';
import ReviewsListItem from './ReviewsListItem';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => (
  <ul className="ReviewsList">
    {reviews.map(({ id, author, content }) => (
      <ReviewsListItem key={id} author={author} content={content} />
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
