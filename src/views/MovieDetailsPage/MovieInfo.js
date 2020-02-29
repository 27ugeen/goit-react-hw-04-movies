import React from 'react';
import { withRouter } from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

const MovieInfo = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => (
  <div className="MovieInfo">
    <img
      className="MovieImage"
      src={`${movieAPI.baseImageUrl}${poster_path}`}
      alt={title}
      width="240"
      height="360"
    />
    <div className="MovieDescription">
      <h1 className="MovieTitle">{title}</h1>
      <p>Release date: {release_date}</p>
      <p>Vote average: {vote_average}</p>
      <h2>Overview:</h2>
      <p>{overview}</p>
      <h3>Genres:</h3>
      <ul className="GanresList">
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }),
};

export default withRouter(MovieInfo);
