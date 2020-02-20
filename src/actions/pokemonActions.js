import axios from 'axios'

export const getPokemonData = (pokemon) => {
    return (dispatch, getState) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(resp => {
            dispatch({type: 'NEW_POKEMON_DATA', data: resp.data})
        })
    }
}