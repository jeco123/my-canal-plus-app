import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './container/AppHeader';
import AppContent from './container/AppContent';
import Home from './container/Home';
import MovieDetails from './container/MovieDetails';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/details/:id' render={({ match }) => (
              <MovieDetails params={match.params} />)} />
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
