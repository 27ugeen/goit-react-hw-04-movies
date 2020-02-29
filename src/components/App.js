import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Spinner from './Spinner';
import routes from '../routes';

const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const NotFound = lazy(() => import('../views/NotFound'));

const { home, movies, movieDetails } = routes;

const App = () => (
  <>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={home} exact component={HomePage} />
          <Route path={movies} exact component={MoviesPage} />
          <Route path={movieDetails} component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;
