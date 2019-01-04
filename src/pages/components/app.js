import React, { Component, Fragment } from 'react';
import Home from '../components/home';
import Pokedex from './pokemon';
import API from '../../library/api';

class App extends Component {
  state = { 
    pokemon : [],
    pokemones : []
  }

  getList = () => {
    API.getPokemonList()
    .then((pokemones)=>{
      this.setState({
        pokemones
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(this.form)
    this.id = form.get('id')
    console.log(this.id)
    API.getPokemon(this.id)
    .then((pokemon) => {
      console.log(pokemon)
      this.setState({
        pokemon
      })
    })
  }
  setRef = (element) => {
    this.form = element
  }
  render() { 
    return ( 
    <Fragment>
      <Home handleSubmit={this.handleSubmit} setRef={this.setRef} />
      <Pokedex pokemones={this.state.pokemones} pokemon={this.state.pokemon}/>
    </Fragment>
    );
  }
}

export default App;