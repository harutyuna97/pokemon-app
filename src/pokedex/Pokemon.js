import React, { Component } from 'react';
import axios from 'axios'
import './pokemon.css'
import { Link } from 'react-router-dom'

class Pokemon extends Component {
    state = {
        pokemon: null,
        data: null
    }
    componentDidMount() {
        let pokemon = this.props.match.params.poke_name
        this.setState({ pokemon })
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(resp => {
            this.setState({ data: resp.data })
        })
    }

    

    render() { 
        let pokemon = this.state.data ? (
            <div>
                <div className = 'title'>
                    <Link to = '/' className = 'backBtn'><i className = "fas fa-arrow-left"></i></Link>
                    <span className = 'pokeName2'>{this.state.data.name + ' ' + '№' + this.state.data.id}</span>
                </div>
                <div className = 'pokeDiv'>
                    <img className = 'pokeImg' src = { this.state.data.sprites.front_default } alt='pokemon'/>
                    <div className = 'pokeInfo'>
                        <p className = 'infoText'><span className = 'infoTitle'>Height:</span> { this.state.data.height }</p>
                        <p className = 'infoText'><span className = 'infoTitle'>Weight:</span> { this.state.data.weight }</p>
                        <p className = 'infoText'><span className = 'infoTitle'>Types:</span> {this.state.data.types[0].type.name}  {this.state.data.types[1] ? ',' + ' ' + this.state.data.types[1].type.name : null} </p>
                    </div>
            </div>
            </div>
        ) : (
            <p className = 'loading'>Loading...</p>
        )
        return ( 
            <div>
                { pokemon }
            </div>
         );
    }
}
 
export default Pokemon;