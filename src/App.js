import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent/AppContent';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <AppContent/>
      </div>
    );
  }
}

export default App;
