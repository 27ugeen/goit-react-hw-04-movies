import React, { Suspense, lazy } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import routes from '../../routes';
import PropTypes from 'prop-types';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

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
    <Suspense fallback={<Spinner />}>
      <Route path={`${match.path}${routes.cast}`} component={Cast} />
      <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
    </Suspense>
  </>
);

AdditionalInfo.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInfo);
