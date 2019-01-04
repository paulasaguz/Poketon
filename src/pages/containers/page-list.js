import React, { Component } from 'react';
import PokemonList from '../components/pokemon-list';
import API from '../../library/api';

class PageList extends Component {
  state = { 
  pokemonList : {}
  }
  componentDidMount(){
    this.getList()
  }
  getList(){
    API.getPokemonList()
    .then((pokemonList) => {
      console.log(pokemonList)
      this.setState({
        pokemonList
      })
    })
  }
  render() { 
    return ( 
      <div className="pokelist">
        <PokemonList pokemonList={this.state.pokemonList}/>
      </div>
    );
  }
}

export default PageList;