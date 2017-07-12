import React, { Component } from 'react';
import './AppContent.css';
import SubNavigation from './SubNavigation/SubNavigation'

class AppContent extends Component {
  render() {
    return (
        <div className="main-content">
          <SubNavigation/>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}

export default AppContent;
