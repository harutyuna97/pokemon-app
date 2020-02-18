import React, { Component } from 'react';
import '../pokedex/pokedex.css'
import axios from 'axios'
import uuid from 'uuid/v1'
import { Link } from 'react-router-dom'


class Pokedex extends Component {

    state = {
        prevUrl: null,
        data: [],
        nextUrl: 'https://pokeapi.co/api/v2/pokemon'
    }

    componentDidMount() {
        axios.get(this.state.nextUrl)
        .then(resp => {
            this.setState({nextUrl: resp.data.next})
            this.setState({prevUrl: resp.data.previous})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                const data = this.state.data.concat()
                data.push(res.data)
                this.setState({ data })
            })
        })})
    }

    

    next = () => {
        this.setState({ data: [] })
        axios.get(this.state.nextUrl)
        .then(resp => {
            this.setState({nextUrl: resp.data.next})
            this.setState({prevUrl: resp.data.previous})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                const data = this.state.data.concat()
                data.push(res.data)
                this.setState({ data })
            })
        })})
    }

    prev = () => {
        this.setState({ data: [] })
        axios.get(this.state.prevUrl)
        .then(resp => {
            this.setState({nextUrl: resp.data.next})
            this.setState({prevUrl: resp.data.previous})
            resp.data.results.map(result => {
            axios.get(result.url)
            .then(res => {
                const data = this.state.data.concat()
                data.push(res.data)
                this.setState({ data })
            })
        })})
    }
        
    sort = (e) => {
        if (e.target.value === 'fromUpCase') {
            const data = this.state.data.concat()
            data.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            this.setState({data})  
        } else if (e.target.value === 'fromLowCase') {
            const data = this.state.data.concat()
            data.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              });
            this.setState({data})  
        }
    }

    
    

    render() { 
        let { data } = this.state
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
                    case 'electric':
                        typeStyle = 'electric' 
                        break 
                    case 'fairy':
                        typeStyle = 'fairy' 
                        break 
                    case 'ground':
                        typeStyle = 'ground' 
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
                    case 'electric':
                        typeStyle2 = 'electric' 
                        break 
                    case 'fairy':
                        typeStyle2 = 'fairy' 
                        break 
                    case 'ground':
                        typeStyle2 = 'ground' 
                        break 
                    default:
                        typeStyle2 = null              
                }
                return (
                    <div key = {uuid()} className = 'pokeList'>
                        <Link to = { '/' + pokemon.name }>
                            <img className = 'pokeImage' src = {pokemon.sprites.front_default} alt = 'pok'/>
                        </Link>
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
            <div>
                <div className = 'selectDiv'>
                    <select id="sort" onChange = { this.sort }>
                        <option className = 'option'>Sort results by...</option>
                        <option className = 'option' value="fromUpCase">Sort by name (A-Z)</option>
                        <option className = 'option' value="fromLowCase">Sort by name (Z-A)</option>
                    </select>
                </div>
                <div className = 'mainDiv'>
                    { PokeList }
                </div>
                <div className = 'btnDiv'>
                    { this.state.prevUrl ? (<button className = 'prvBtn' onClick = { this.prev }><i className = "fas fa-arrow-left"></i></button>) : null }
                    { this.state.nextUrl ? (<button className = 'nxtBtn' onClick = { this.next }><i className = "fas fa-arrow-right"></i></button>) : null }
                </div>
            </div>
        )
        
    }
}
 
export default Pokedex;