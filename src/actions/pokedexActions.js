import axios from 'axios'

export const getPokemons = (url) => {
    return (dispatch, getState) => {
        axios.get(url)
        .then(resp => {
            dispatch({type: 'URLS_RECEIVED', resp: resp.data})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                dispatch({type: 'DATA_RECEIVED', res})
            })
        })})
    } 
}

export const next = (nextUrl) => {
    return (dispatch, getState) => {
        dispatch({type: 'DATA_NULL'})
        axios.get(nextUrl)
        .then(resp => {
            dispatch({type: 'NEXT_URL', resp})
            dispatch({type: 'PREV_URL', resp})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                dispatch({type: 'DATA_RECEIVED', res})
            })
        })})
    }
}

export const prev = (prevUrl) => {
    return (dispatch, getState) => {
        dispatch({type: 'DATA_NULL'})
        axios.get(prevUrl)
        .then(resp => {
            dispatch({type: 'NEXT_URL', resp})
            dispatch({type: 'PREV_URL', resp})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                dispatch({type: 'DATA_RECEIVED', res})
            })
        })})
    }
}