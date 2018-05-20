import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent';
import Home from './container/Home';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render={
              () => (
                <div>Error 404</div>
              )} />
            
          </Switch>
        </AppContent>
      </div>
    );
  }
}

export default App;
