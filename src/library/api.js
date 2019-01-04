class API {
  getPokemonList() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(function (response) {
      return response.json()
      .then((pokemonList)=>{
        console.log(pokemonList)
        return pokemonList;
      })
    })
  }
  getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(function (response) {
        return response.json()
        .then((pokemon)=>{
          return pokemon;
        })
      })
  }
}

export default new API()