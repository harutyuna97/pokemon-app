const initState = {
    prevUrl: null,
    data: [],
    nextUrl: 'https://pokeapi.co/api/v2/pokemon'
}

const pokedexReducer = (state = initState, action) => {
    switch(action.type) {
        case 'URLS_RECEIVED':
            return {
                ...state,
                nextUrl: action.resp.next, 
                prevUrl: action.resp.previous 
            }
        case 'DATA_RECEIVED':
            let newData = state.data.concat()
            newData.push(action.res.data)
            return {
                ...state,
                data: newData
            }
        case 'DATA_NULL':
            let newDataNull = state.data.concat()  
            newDataNull = []
            return {
                ...state,
                data: newDataNull
            }  
        case 'NEXT_URL':
            return {
                ...state,
                nextUrl: action.resp.data.next
            }    
        case 'PREV_URL':
            return {
                ...state,
                prevUrl: action.resp.data.previous
            }    
        default: 
            return state    
    }
}

export default pokedexReducer

