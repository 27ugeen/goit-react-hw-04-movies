import React from 'react';
import Appbar from '../AppBar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="Layout">
    <Appbar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
