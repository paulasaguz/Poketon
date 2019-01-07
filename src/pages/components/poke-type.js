import React from 'react'

const types = {
  'normal' : '#BCBCAF',
  'grass' : '#8CD851',
  'fire' : '#FA5643',
  'water' : '#56AEFF',
  'fighting' : '#A85643',
  'flying' : '#79A3FF',
  'poison' : '#A4599C',
  'ground' : '#E6C653',
  'rock' : '#CEBD72',
  'bug' :  '#C2D21F',
  'ghost' : '#7874D6',
  'electric' : '#FDE53B',
  'psychic' : '#F260AF',
  'ice' : '#96F1FF',
  'dragon' : '#8874FF',
  'dark' : '#8B6754',
  'steel' : '#C4C2DB',
  'fairy' : '#F9AEFF'
}

function PokeType(props){
  const colorb = {
    backgroundColor : types[props.type.name]
  }
  return (
  <span className="types" style={colorb}>{props.type.name}</span>
  )
}

export default PokeType