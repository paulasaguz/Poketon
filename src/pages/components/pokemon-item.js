import React from 'react';
import './pokemon-item.css';

function PokemonItem (props){
  return(
    <div className="pokemonItem">
      <li>{props.name}</li>
    </div>
  )
}

export default PokemonItem