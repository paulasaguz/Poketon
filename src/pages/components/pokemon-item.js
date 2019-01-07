import React from 'react'
import Star from '../../icons/components/star'
import './pokemon-item.css'

function PokemonItem ({favoriteList, name, url, handleFavClick}){

  let indice = favoriteList.indexOf(name)
  let color = ''
  if(indice >= 0){
    color = 'blue'
  }

  return (
    <div className="pokemonItem">
      <li 
        onClick={()=>{handleFavClick(name, url)}}>
        {name} 
        <Star 
          color={color}  
          size={24} 
          viewBox="0 0 24 24"
        />
      </li>
    </div>
  )
}

export default PokemonItem