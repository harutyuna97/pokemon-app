import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Pokedex from './pokedex/Pokedex';
import Pokemon from './pokedex/Pokemon';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = 'App'>
          <Route exact path = '/' component = { Pokedex } />
          <Route path = '/:poke_name' component = { Pokemon } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
