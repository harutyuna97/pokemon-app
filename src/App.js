import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Pokedex from './pokedex/Pokedex';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = 'App'>
          <Route exact path = '/' component = { Pokedex } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
