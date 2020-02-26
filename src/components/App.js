import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import NotFound from '../views/NotFound';
import routes from '../routes';

const { home, movies, movieDetails } = routes;

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route path={home} exact component={HomePage} />
        <Route path={movies} exact component={MoviesPage} />
        <Route path={movieDetails} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </>
);

export default App;
