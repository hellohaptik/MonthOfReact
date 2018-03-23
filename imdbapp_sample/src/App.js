import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import TopMovies from './pages/TopMovies';
import Movie from './pages/Movie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopMovies} />
          <Route exact path="/movies/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
