import React from 'react'
import './favorites.css'

function Favorites ({listFavorites}){
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