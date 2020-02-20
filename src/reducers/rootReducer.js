import pokedexReducer from './pokedexReducer'
import pokemonReducer from './pokemonReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    pokedex: pokedexReducer,
    pokemon: pokemonReducer,
})

export default rootReducer