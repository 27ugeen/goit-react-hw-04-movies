import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../utils/getQueryParams';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import Searchbox from '../components/Searchbox';
import movieAPI from '../services/movieAPI';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: '',
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevParams } = getQueryParams(prevProps.location.search);
    const { query: nextParams } = getQueryParams(this.props.location.search);
    if (nextParams && prevParams !== nextParams) {
      this.fetchMovies(nextParams);
    }
  }
  fetchMovies = query => {
    this.setState({ loading: true });
    movieAPI
      .fetchMoviesWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };
  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {error && <Notification message={error} />}
        {loading && <Spinner />}
        {movies.length > 0 && (
          <ul className="MovieList">
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={{
                    pathname: `${match.url}/${id}`,
                    state: { from: location },
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
