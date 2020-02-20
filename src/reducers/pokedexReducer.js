const initState = {
    url: 'https://pokeapi.co/api/v2/pokemon',
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
        case 'SORT_FROM_UP':
            let newData3 = state.data.concat()
            newData3.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
            });
            return {
                ...state,
                data: newData3
            }
        case 'SORT_FROM_DOWN':
            let newData4 = state.data.concat()
            newData4.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
            });
            return {
                ...state,
                data: newData4
            }
        default: 
            return state    
    }
}

export default pokedexReducer

