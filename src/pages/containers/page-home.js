import React, { Component, Fragment } from 'react';
import Form from '../components/form';
import Pokemon from '../components/pokemon';
import API from '../../library/api';

class Home extends Component {
  state = { 
    pokemon : {},
    pokemones : []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(this.form)
    this.id = form.get('id')
    this.props.history.push(`/pokemon/${this.id}`);
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
      <Form handleSubmit={this.handleSubmit} setRef={this.setRef} />
      <Pokemon pokemon={this.state.pokemon}/>
    </Fragment>
    );
  }
}

export default Home;