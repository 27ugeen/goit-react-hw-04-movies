import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbox extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { value: '' };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SearchBox">
        <input
          type="text"
          placeholder="Enter movie"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
