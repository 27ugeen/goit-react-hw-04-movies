import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import routes from '../../routes';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ match, location }) => (
  <>
    <div className="AdditionalInfo">
      <h4>Additional information</h4>
      <ul className="AdditionalInfoList">
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.cast}`,
              state: { from: location.state.from },
            }}
          >
            cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}${routes.reviews}`,
              state: { from: location.state.from },
            }}
          >
            reviews
          </NavLink>
        </li>
      </ul>
    </div>
    <Route path={`${match.path}${routes.cast}`} component={Cast} />
    <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
  </>
);

AdditionalInfo.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInfo);
