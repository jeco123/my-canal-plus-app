import React, { Component } from 'react';
import MovieListItems from './MovieListItems/MovieListItems';

class AppContent extends Component {
  render() {
    return (
      <div style={{ flexDirection: 'column', display: 'flex' }}>
        <MovieListItems />
        <MovieListItems />
        <MovieListItems />
        <MovieListItems />
        <MovieListItems />
        <MovieListItems />
      </div>
    );
  }
}

export default AppContent;
