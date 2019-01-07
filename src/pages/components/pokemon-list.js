import React from 'react'
import PokemonItem from './pokemon-item'
import './pokemon-list.css'

function PokemonList({favoriteList, pokemonList, handleFavClick}){
  return (
  <div className="pokemonList">
    {
      pokemonList.map((item, index) =>(
        <PokemonItem 
          favoriteList={favoriteList} 
          handleFavClick={handleFavClick} 
          key={index}{...item}
        />
      ))
    }
  </div>
  )
}

export default PokemonList