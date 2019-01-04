import React, { Component } from 'react';
import Pokemon from '../components/pokemon'
import API from '../../library/api'

class PagePokemon extends Component {
  state = { 
    pokemon : {}
  }
  componentDidMount(){
    const id= this.props.match.params.id
    this.getPokemon(id)
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.getPokemon(this.props.match.params.id)
    }
  }
  getPokemon(id){
    API.getPokemon(id)
    .then((pokemon) => {
      this.setState({
        pokemon
      })
    })
  }
  render() { 
    return ( 
      <Pokemon pokemon={this.state.pokemon}/>
    );
  }
}

export default PagePokemon;