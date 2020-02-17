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
                let typeStyle = null
                switch(pokemon.types[0].type.name) {
                    case 'water':
                        typeStyle = 'water'
                        break
                    case 'bug':
                        typeStyle = 'bug'   
                        break
                    case 'grass':
                        typeStyle = 'grass' 
                        break
                    case 'poison':
                        typeStyle = 'poison'
                        break
                    case 'fire':
                        typeStyle = 'fire' 
                        break 
                    case 'flying':
                        typeStyle = 'flying' 
                        break 
                    case 'normal':
                        typeStyle = 'normal' 
                        break 
                    default:
                        typeStyle = null              
                }

                let typeStyle2 = null

                switch(pokemon.types[1] && pokemon.types[1].type.name) {
                    case 'water':
                        typeStyle2 = 'water'
                        break
                    case 'bug':
                        typeStyle2 = 'bug'   
                        break
                    case 'grass':
                        typeStyle2 = 'grass' 
                        break
                    case 'poison':
                        typeStyle2 = 'poison'
                        break
                    case 'fire':
                        typeStyle2 = 'fire' 
                        break 
                    case 'flying':
                        typeStyle2 = 'flying' 
                        break 
                    case 'normal':
                        typeStyle2 = 'normal' 
                        break 
                    default:
                        typeStyle2 = null              
                }
                return (
                    <div key = {uuid()} className = 'pokeList'>
                        <img className = 'pokeImage' src = {pokemon.sprites.front_default} alt = 'pok'/>
                        <h3 className = 'pokeName'>{pokemon.name}</h3>
                        <span className = {typeStyle}>{pokemon.types[0].type.name}</span>
                        {pokemon.types[1] ? (<span className = {typeStyle2}>{ pokemon.types[1].type.name } </span>) : null }
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