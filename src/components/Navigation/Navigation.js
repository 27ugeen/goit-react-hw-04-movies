import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const { home, movies } = routes;

const Navigation = () => (
  <ul className="NavList">
    <NavLink
      exact
      to={home}
      className="NavLink"
      activeClassName="NavLinkActive"
    >
      Home
    </NavLink>
    <NavLink to={movies} className="NavLink" activeClassName="NavLinkActive">
      Movies
    </NavLink>
  </ul>
);

export default Navigation;
