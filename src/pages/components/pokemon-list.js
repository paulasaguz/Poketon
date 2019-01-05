import React from 'react';
import PokemonItem from './pokemon-item'
import './pokemon-list.css'

function PokemonList({pokemonList}){
  return (
  <div className="pokemonList">
    {
      pokemonList.map((item, index) =>(
        <PokemonItem key={index}{...item}/>
      ))
    }
  </div>
  )
}

export default PokemonList