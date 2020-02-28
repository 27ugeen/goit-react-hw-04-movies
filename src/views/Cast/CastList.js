import React from 'react';
import CastListItem from './CastListItem';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => (
  <ul className="CastList">
    {cast.map(({ id, name, profile_path, character }) => (
      <CastListItem
        key={id}
        name={name}
        profile_path={profile_path}
        character={character}
      />
    ))}
  </ul>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CastList;
