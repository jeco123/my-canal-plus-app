import React, { Component } from 'react';
import SubNavigation from './SubNavigation/SubNavigation';
import MovieListItems from './MovieListItems/MovieListItems';

class AppContent extends Component {
  render() {
    return (
      <div className="main-content">
        <SubNavigation />
        <div style={{flexDirection: 'column',  display: 'flex'}}>
          <MovieListItems />
          <MovieListItems />
          <MovieListItems />
          <MovieListItems />
          <MovieListItems />
          <MovieListItems />
        </div>
      </div>
    );
  }
}

export default AppContent;
