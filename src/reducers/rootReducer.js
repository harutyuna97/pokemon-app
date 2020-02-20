import pokedexReducer from './pokedexReducer'
import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
    pokedex: pokedexReducer,
    pokemon: pokemonReducer,
})

export default rootReducer