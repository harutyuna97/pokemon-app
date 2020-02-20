import React, { Component } from 'react';
import './pokemon.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPokemonData } from '../actions/pokemonActions';


class Pokemon extends Component {
    
    componentDidMount() {
        this.props.getPokemonData(this.props.match.params.poke_name)
    }

    

    render() { 
        let pokemon = this.props.data ? (
            <div>
                <div className = 'title'>
                    <Link to = '/' className = 'backBtn'><i className = "fas fa-arrow-left"></i></Link>
                    <span className = 'pokeName2'>{this.props.data.name + ' ' + '№' + this.props.data.id}</span>
                </div>
                <div className = 'pokeDiv'>
                    <img className = 'pokeImg' src = { this.props.data.sprites.front_default } alt='pokemon'/>
                    <div className = 'pokeInfo'>
                        <p className = 'infoText'><span className = 'infoTitle'>Height:</span> { this.props.data.height }</p>
                        <p className = 'infoText'><span className = 'infoTitle'>Weight:</span> { this.props.data.weight }</p>
                        <p className = 'infoText'><span className = 'infoTitle'>Types:</span> {this.props.data.types[0].type.name}  {this.props.data.types[1] ? ',' + ' ' + this.props.data.types[1].type.name : null} </p>
                    </div>
            </div>
            </div>
        ) : (
            <img className='loadImg' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f3a3831234507.564a1d2338123.gif' alt = 'loading' />
        )
        return ( 
            <div>
                { pokemon }
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.pokemon.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemonData: pokemon => dispatch(getPokemonData(pokemon))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);