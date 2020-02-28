import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesListItem = ({ id, title, name, match, location }) => (
  <li>
    <Link
      to={{
        pathname: `${match.url}/${id}`,
        state: { from: location },
      }}
    >
      {title ? title : name}
    </Link>
  </li>
);

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesListItem);
