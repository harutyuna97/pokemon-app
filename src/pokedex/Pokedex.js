import React, { Component } from 'react';
import '../pokedex/pokedex.css'
import axios from 'axios'
import uuid from 'uuid/v1'

class Pokedex extends Component {

    state = {
        next: null,
        data: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(resp => resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                const data = this.state.data.concat()
                data.push(res.data)
                this.setState({ data })
            })
        }))
    }

        
    
    render() { 
        const { data } = this.state
        console.log(this.state.data)
         const PokeList = data.length ? (
            data.map(pokemon => {
                return (
                    <div key = {uuid()} className = 'pokeList'>
                        <img className = 'pokeImage' src = {pokemon.sprites.front_default} alt = 'pok'/>
                        <h3 className = 'pokeName'>{pokemon.name}</h3>
                        <span className = 'type1'>{pokemon.types[0].type.name}</span>
                        {pokemon.types[1] ? (<span className = 'type2'>{ pokemon.types[1].type.name } </span>) : null }
                    </div>
                )
            })
        ) : (
            <div>No data</div>
        )
        return (
            <div className = 'mainDiv'>
                { PokeList }
            </div>
        )
        
    }
}
 
export default Pokedex;