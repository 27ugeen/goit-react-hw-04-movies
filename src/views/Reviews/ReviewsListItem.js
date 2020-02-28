import React from 'react';
import PropTypes from 'prop-types';

const ReviewsListItem = ({ author, content }) => (
  <li>
    <h2>Author: {author}</h2>
    <p>{content}</p>
  </li>
);

ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewsListItem;
