import React from 'react';
import movieAPI from '../../services/movieAPI';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => (
  <ul className="CastList">
    {cast.map(({ id, name, profile_path, character }) => (
      <li key={id}>
        <img
          className="CastImage"
          src={`${movieAPI.baseImageUrl}${profile_path}`}
          alt=""
          width="100px"
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CastList;
