const initState = {
    pokemon: null,
    data2: null
}

const pokemonReducer = (state = initState, action) => {
    switch(action.type) {
        case 'NEW_POKEMON_DATA':
            return {
                ...state,
                data: action.data
            }
        default:
            return state    
    }
}

export default pokemonReducer