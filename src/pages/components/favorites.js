import React from 'react'
import './favorites.css'

function Favorites ({listFavorites}){
  if(!listFavorites){
    return(
      <p className="empty">Aún no tienes favoritos</p>
    )
  }
  return( 
    <div className="favoritesList">
      {
        listFavorites.map(favorite=>
        <li key={favorite}> {favorite} </li>)
      }
    </div>
  )
}

export default Favorites