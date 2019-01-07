import React from 'react'
import PokeType from './poke-type'
import PokeAbility from './poke-ability'
import leftPad from 'left-pad'
import Left from '../../icons/components/left'
import Right from '../../icons/components/right'
import { Link } from 'react-router-dom'

import './pokemon.css'

function Pokemon ({pokemon}){
  if (!pokemon.name){
    return null
  }
  return (
    <div className="pokemon-container">
      <div className="buttons">
        <Link to={`/pokemon/${pokemon.id - 1}`}>
          <Left size={25} viewBox="0 0 24 24" />
        </Link>
        <Link to={`/pokemon/${pokemon.id + 1}`}>
          <Right size={25} viewBox="0 0 24 24"/>
        </Link>
      </div>
      <h1 className="poke-name">{pokemon.name} <span className="poke-number"> No. {pokemon.id}</span></h1>
      <div className="description-container">
        <img className="poke-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leftPad(pokemon.id, 3, 0)}.png`} alt="pokemon-image" width="200" height="200" />
        <div className="description">
          <li>
            <h4>Peso: <span className="poke-weight">{pokemon.weight}</span></h4>
          </li>
          <li>
            <h4>Tipo</h4>
            <p>
            {
              pokemon.types.map((type, index)=>(
                <PokeType key={index}{...type}/> 
              ))
            }
            </p>
          </li>
          <li>
            <h4>Habilidades</h4>
            <p>
            {
              pokemon.abilities.map((aby, index)=>(
                <PokeAbility key={index}{...aby}/>
              ))
            }
            </p>
          </li>
        </div>
      </div>
      <div className="poke-carousel">
        <img className="poke-small" src={pokemon.sprites.back_default} alt="pokemon-image" width="100" height="100" />
        <img className="poke-small" src={pokemon.sprites.back_shiny} alt="pokemon-image" width="100" height="100" />
        <img className="poke-small" src={pokemon.sprites.front_shiny} alt="pokemon-image" width="100" height="100" />
        <img className="poke-small" src={pokemon.sprites.front_default} alt="pokemon-image" width="100" height="100" />
      </div>
    </div>
  )
}

export default Pokemon