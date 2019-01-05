import React, { Component } from 'react';
import PokemonList from '../components/pokemon-list';
import API from '../../library/api';

class PageList extends Component {
  state = { 
    pokemonList : []
  }
  componentDidMount(){
    this.getList()
  }
  getList(){
    API.getPokemonList()
    .then(({results}) => {
      this.setState({
        pokemonList : results
      })
    })
  }
  render() { 
    return ( 
      <PokemonList pokemonList={this.state.pokemonList}/>
    );
  }
}

export default PageList;