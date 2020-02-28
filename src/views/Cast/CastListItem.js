import React from 'react';
import movieAPI from '../../services/movieAPI';
import noimage from '../../assets/noimage.jpg';
import PropTypes from 'prop-types';

const CastListItem = ({ name, profile_path, character }) => (
  <li>
    <img
      className="CastImage"
      src={
        profile_path ? `${movieAPI.baseImageUrl}${profile_path}` : `${noimage}`
      }
      alt=""
      width="100px"
    />
    <p>{name}</p>
    <p>Character: {character}</p>
  </li>
);

CastListItem.propTypes = {
  name: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  character: PropTypes.string.isRequired,
};

export default CastListItem;
