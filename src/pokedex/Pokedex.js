import React, { Component } from 'react';
import '../pokedex/pokedex.css'
import axios from 'axios'
import uuid from 'uuid/v1'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPokemons, next, prev } from '../actions/pokedexActions';


class Pokedex extends Component {

    componentDidMount() {
        this.props.dataNull()
        this.props.getPokemons(this.props.url)
    }

    
    next = () => {
        this.props.next(this.props.nextUrl)
    }

    prev = () => {
        this.props.prev(this.props.prevUrl)
    }
        
    sort = (e) => {
        if (e.target.value === 'fromUpCase') {
            this.props.sortFromUp(e)
        } else if (e.target.value === 'fromLowCase') {
           this.props.sortFromDown(e)
        }
    }

    
    

    render() { 
        let { data } = this.props
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
            <img className='loadImg2' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f3a3831234507.564a1d2338123.gif' alt = 'loading' />
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
                    { this.props.prevUrl ? (<button className = 'prvBtn' onClick = { this.prev }><i className = "fas fa-arrow-left"></i></button>) : null }
                    { this.props.nextUrl ? (<button className = 'nxtBtn' onClick = { this.next }><i className = "fas fa-arrow-right"></i></button>) : null }
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.pokedex.data,
        prevUrl: state.pokedex.prevUrl,
        nextUrl: state.pokedex.nextUrl,
        url: state.pokedex.url,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataNull: () => dispatch({type: 'DATA_NULL'}),
        getPokemons: url => dispatch(getPokemons(url)),
        next: nextUrl => dispatch(next(nextUrl)),
        prev: prevUrl => dispatch(prev(prevUrl)),
        sortFromUp: e => dispatch({type: 'SORT_FROM_UP', e}),
        sortFromDown: e => dispatch({type: 'SORT_FROM_DOWN', e})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);