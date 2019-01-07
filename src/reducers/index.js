function favoritesReducer (state, action){
  switch(action.type){
    case 'ADD_FAV' : {
      const newState = state
      newState.favorites.push(action.payload.name)
      return newState
    }
    default : {
      return state
    }
  }
}
export default favoritesReducer