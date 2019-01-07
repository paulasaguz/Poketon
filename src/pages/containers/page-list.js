import React, { Component } from 'react'
import PokemonList from '../components/pokemon-list'
import API from '../../library/api'
import { connect } from 'react-redux'

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
  handleFavoriteCLick = (name) => {
    this.props.dispatch({
      type : 'ADD_FAV',
      payload : {
        name
      }
    })
  }
  render() {
    return (
      <PokemonList 
        favoriteList={this.props.favoriteList} 
        handleFavClick={this.handleFavoriteCLick} 
        pokemonList={this.state.pokemonList}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    favoriteList : state.favorites
  }
}
export default connect(mapStateToProps)(PageList) ;