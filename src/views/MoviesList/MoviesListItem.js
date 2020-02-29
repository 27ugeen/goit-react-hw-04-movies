import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

const MoviesListItem = ({ id, title, name, location }) => (
  <li>
    <Link
      to={{
        pathname: `${routes.movies}/${id}`,
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
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesListItem);
