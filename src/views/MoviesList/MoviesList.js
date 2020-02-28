import React from 'react';
import { withRouter } from 'react-router-dom';
import MoviesListItem from './MoviesListItem';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => (
  <ul className="MovieList">
    {movies.map(({ id, title, name }) => (
      <MoviesListItem key={id} title={title} name={name} id={id} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default withRouter(MoviesList);
