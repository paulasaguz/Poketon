function favoritesReducer (state, action){
  switch(action.type){
    case 'ADD_FAV' : {
      const repetido = state.favorites.indexOf(action.payload.name)
      if(repetido >= 0){
        return state
      }
      const newState = {...state, favorites : [...state.favorites, action.payload.name]}
        return newState
    }
    default : {
      return state
    }
  }
}
export default favoritesReducer