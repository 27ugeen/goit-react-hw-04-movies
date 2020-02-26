import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1> Error 404</h1>
    <p>
      Sorry, the page is not found, please try to go to
      <Link to="/">Home Page</Link>
    </p>
  </div>
);

export default NotFound;
