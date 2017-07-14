import React, { Component } from 'react';
import './AppContent.css';
import SubNavigation from './SubNavigation/SubNavigation';
import MovieListItems from './MovieListItems/MovieListItems';

class AppContent extends Component {
  render() {
    return (
      <div className="main-content">
        <SubNavigation />
        <MovieListItems/>
      </div>
    );
  }
}

export default AppContent;
